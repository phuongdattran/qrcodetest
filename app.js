const express = require("express");
const app = express();
const jsQR = require("jsqr");

app.get("/", (req, res, next) => {
  res.render('camera.ejs');
});

module.exports = app;
