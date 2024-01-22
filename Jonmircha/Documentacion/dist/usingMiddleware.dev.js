"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});
app.use("/user/:id", function (req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
}, function (req, res, next) {
  console.log("Request Type:", req.method);
  next();
});
app.get("/user/:id", function (req, res, next) {
  res.send("USER");
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});