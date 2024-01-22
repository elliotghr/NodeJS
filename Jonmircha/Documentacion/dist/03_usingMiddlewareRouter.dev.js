"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireWildcard(require("express"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
var port = 3000;
var router = (0, _express.Router)(); // a middleware function with no mount path. This code is executed for every request to the router

router.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
}); // a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path

router.use("/user/:id", function (req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
}, function (req, res, next) {
  console.log("Request Type:", req.method);
  next();
}); // a middleware sub-stack that handles GET requests to the /user/:id path

router.get("/user/:id", function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === "0") next("route"); // otherwise pass control to the next middleware function in this stack
  else next();
}, function (req, res, next) {
  // render a regular page
  res.render("regular");
}); // handler for the /user/:id path, which renders a special page

router.get("/user/:id", function (req, res, next) {
  console.log(req.params.id);
  res.render("special");
}); // mount the router on the app
// app.use("/", router);

app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});