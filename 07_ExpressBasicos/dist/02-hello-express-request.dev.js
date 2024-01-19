"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.end("<h1>Hola mundo desde Express.js</h1>");
}); // Para recibir parametros por URL lo haremos anteponiendo : al nombre del parametro y se separarán por un guión
// Endpoint con params

app.get("/user/:id-:name-:age", function (req, res) {
  // http://localhost:3000/user/7-elliot-27
  // Establecemos las cabeceras
  res.set({
    "content-Type": "text/html; charset=utf-8"
  }); // Accedemos a los parametros desde request y dentro de params podemos acceder a cada uno de ellos

  res.end("<h1> ".concat(req.params.name, " bienvenido a Express.js. Tu id es: ").concat(req.params.id, " y tienes ").concat(req.params.age, " a\xF1os.</h1>"));
});
app.get("/search", function (req, res) {
  // http://localhost:3000/search?id=7&name=elliot&age=27
  // Endpoint con query
  res.set({
    "content-Type": "text/html; charset=utf-8"
  }); // Accedemos a los parametros desde request y dentro de query podemos acceder a cada uno de ellos

  res.end("<h1> ".concat(req.query.name, " bienvenido a Express.js. Tu id es: ").concat(req.query.id, " y tienes ").concat(req.query.age, " a\xF1os.</h1>"));
}); // Seteamos el puerto

app.listen(3000, function () {
  console.log("Inciando Express desde http://localhost:3000");
});