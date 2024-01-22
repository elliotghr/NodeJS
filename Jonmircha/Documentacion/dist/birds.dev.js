"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var routerBirds = (0, _express.Router)(); // middleware that is specific to this router

routerBirds.use(function (req, res, next) {
  console.log("Time: ", Date.now());
  next();
}); // define the home page rsoute

routerBirds.get("/", function (req, res) {
  res.send("Birds home page");
}); // define the about route

routerBirds.get("/about", function (req, res) {
  res.send("About birds");
});
var _default = routerBirds;
exports["default"] = _default;