const express = require("express");
const app = express();
// const cars = require("cors");
const port = process.env.PORT || 5000;
// app.use(cars);
// ? data
const categories = require("./data/categories.json");
app.get("/", (req, res) => {
  res.send("iAcademy Server in Running...");
});
// ? categories
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
