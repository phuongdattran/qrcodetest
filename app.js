const express = require("express");
//const jsQR = require("jsqr");
const QRCode = require('qrcode');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

app.get("/", (req, res, next) => {
  res.render('scanner.ejs');
});

app.get("/generator", (req, res, next) => {
  res.render('generator.ejs');
});

app.post("/qrcode", (req, res, next) => {
  QRCode.toDataURL(req.body.url, function (err, url) {
    res.render('qrcode.ejs', {url});
  });
});

///////////////////////////////////////////////////


module.exports = app;
