const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.end(fs.readFileSync("./dist/index.html", "utf-8"));
});

app.use(express.static("./dist"));

app.listen(8888, () => {
  console.log("server is running")
});