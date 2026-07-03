require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Route = require("./models/Route");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:");
    console.error(err.message);
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