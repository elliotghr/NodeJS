"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _birds = _interopRequireDefault(require("./birds.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get("/", function (req, res) {
  res.send("Hello World!");
}); // Route handlers
// Next
// Ejecuta la siguiente callback

router.get("/example/b", function (req, res, next) {
  console.log("the response will be sent by the next function ...");
  next();
}, function (req, res) {
  res.send("Hello from B!");
}); // With array
// Ejecuta las funciones declaradas en el array

var cb0 = function cb0(req, res, next) {
  console.log("CB0");
  next();
};

var cb1 = function cb1(req, res, next) {
  console.log("CB1");
  next();
};

var cb2 = function cb2(req, res) {
  res.send("Hello from C!");
};

router.get("/example/c", [cb0, cb1, cb2]); // Combination
// Se pueden combinar los arrays con el método next

var db0 = function db0(req, res, next) {
  console.log("DB0");
  next();
};

var db1 = function db1(req, res, next) {
  console.log("DB1");
  next();
};

router.get("/example/d", [db0, db1], function (req, res, next) {
  console.log("the response will be sent by the next function ...");
  next();
}, function (req, res) {
  res.send("Hello from D!");
}); // res.send([body])
// Envío de respuesta con contenido no estatico
// Si es un string, entonces, lo convierte a un Content-type: html

router.get("/buffer", function (req, res) {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from("<p style='color:red'>some html</p>"));
}); // res.sendFile(path [, options] [, fn])
// Respuesta con envío de archivos staticos

router.get("/gethtml", function (req, res) {
  res.sendFile(resolve("index.html"));
}); // router.route()
// Se puede hacer uso del método route para agrupar varias rutas con el mismo nombre pero diferente verbo HTTP

router.route("/book").get(function (req, res) {
  res.send("Get a random book");
}).post(function (req, res) {
  res.send("Add a book");
}).put(function (req, res) {
  res.send("Update the book");
});
router.use("/birds", _birds["default"]);
var _default = router;
exports["default"] = _default;