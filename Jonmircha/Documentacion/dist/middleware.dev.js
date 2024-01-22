"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // first middleware

var myLogger = function myLogger(req, res, next) {
  console.log("LOGGED");
  next();
}; // second middleware


var requestTime = function requestTime(req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);
app.get("/", function (req, res) {
  var responseText = "Hello World!<br>";
  responseText += "<small>Requested at: ".concat(req.requestTime, "</small>");
  res.send(responseText);
});
app.listen(3000);