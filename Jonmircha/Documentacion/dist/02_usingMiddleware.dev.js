"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Application-level middleware
var app = (0, _express["default"])();
var port = 3000;
app.get("/user/:id", function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === "0") next("route"); // otherwise pass the control to the next middleware function in this stack
  else next();
}, function (req, res, next) {
  // send a regular response
  res.send("regular");
}); // handler for the /user/:id path, which sends a special response

app.get("/user/:id", function (req, res, next) {
  res.send("special");
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});