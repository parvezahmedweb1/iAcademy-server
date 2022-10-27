const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
// ? data
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");
app.get("/", (req, res) => {
  res.send("iAcademy Server in Running...");
});
// ? categories
app.get("/categories", (req, res) => {
  res.send(categories);
});
// ? categories by id
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const coursesById = courses.filter((course) => course.categoryId === id);
  res.send(coursesById);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const coursesId = req.params.id;
  const courser = courses.find((course) => course._id === coursesId);
  res.send(courser);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
