const express = require("express");
const app = express();
const jsQR = require("jsqr");

app.use(express.static("./public"));

app.get("/", (req, res, next) => {
  res.render('scanner.ejs');
});

module.exports = app;
