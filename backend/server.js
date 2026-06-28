const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = "./data/routes.json";

function getRoutes() {
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function saveRoutes(data) {
  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(data, null, 2)
  );
}

/* GET ALL */

app.get("/routes", (req, res) => {
  res.json(getRoutes());
});

/* GET ONE */

app.get("/routes/:id", (req, res) => {
  const routes = getRoutes();

  const route = routes.find(
    r => r.id == req.params.id
  );

  if (!route) {
    return res
      .status(404)
      .json({ message: "Route not found" });
  }

  res.json(route);
});

/* SEARCH */

app.get("/search", (req, res) => {
  const routes = getRoutes();

  const keyword =
    req.query.from?.toLowerCase() || "";

  const result = routes.filter(r =>
    r.from.toLowerCase().includes(keyword)
  );

  res.json(result);
});

/* POST */

app.post("/routes", (req, res) => {
  const routes = getRoutes();

  const newRoute = {
    id: Date.now(),
    ...req.body
  };

  routes.push(newRoute);

  saveRoutes(routes);

  res.status(201).json(newRoute);
});

/* PUT */

app.put("/routes/:id", (req, res) => {
  let routes = getRoutes();

  routes = routes.map(route =>
    route.id == req.params.id
      ? { ...route, ...req.body }
      : route
  );

  saveRoutes(routes);

  res.json({
    message: "Updated successfully"
  });
});

/* DELETE */

app.delete("/routes/:id", (req, res) => {
  let routes = getRoutes();

  routes = routes.filter(
    route => route.id != req.params.id
  );

  saveRoutes(routes);

  res.json({
    message: "Deleted successfully"
  });
});

app.listen(5000, () => {
  console.log(
    "Backend running on http://localhost:5000"
  );
});