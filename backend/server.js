require("dotenv").config();
const passport = require("passport");
const session = require("express-session");

require("./config/passport");

const rateLimit = require("express-rate-limit");


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const User = require("./models/User");
const Route = require("./models/Route");
const auth = require("./middleware/auth");

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests. Please try again later.",
});

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(
  session({
    secret: process.env.JWT_SECRET || "mysecretkey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:");
    console.error(err.message);
  });

  /* REGISTER */

app.post(
  "/api/auth/register",

  [
    body("name").notEmpty().withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

/* LOGIN */

app.post(
  "/api/auth/login",

  [
    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("password")
      .notEmpty()
      .withMessage("Password is required"),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: "Invalid email or password",
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET || "mysecretkey",
        {
          expiresIn: "1d",
        }
      );

      res.json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

/* GOOGLE LOGIN */

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

/* GOOGLE CALLBACK */

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
      },
      process.env.JWT_SECRET || "mysecretkey",
      {
        expiresIn: "1d",
      }
    );

    res.redirect(
      `http://localhost:5173/login?token=${token}`
    );
  }
);

/* PROTECTED PROFILE */

app.get("/api/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* GET ALL ROUTES */

app.get("/routes", async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* GET SINGLE ROUTE */

app.get("/routes/:id", async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);

    if (!route) {
      return res
        .status(404)
        .json({ message: "Route not found" });
    }

    res.json(route);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* SEARCH */

app.get("/search", async (req, res) => {
  try {
    const keyword = req.query.from || "";

    const routes = await Route.find({
      from: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* CREATE */

app.post("/routes", async (req, res) => {
  try {
    const newRoute = await Route.create(req.body);
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* UPDATE */

app.put("/routes/:id", async (req, res) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedRoute) {
      return res
        .status(404)
        .json({ message: "Route not found" });
    }

    res.json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* DELETE */

app.delete("/routes/:id", async (req, res) => {
  try {
    const deletedRoute = await Route.findByIdAndDelete(
      req.params.id
    );

    if (!deletedRoute) {
      return res
        .status(404)
        .json({ message: "Route not found" });
    }

    res.json({
      message: "Route deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});