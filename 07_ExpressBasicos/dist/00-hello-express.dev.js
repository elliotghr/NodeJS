"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Inicializamos express
var app = (0, _express["default"])();
var port = 3000; // Creamos un Router
// https://expressjs.com/en/starter/basic-routing.html
// app.METHOD(PATH, HANDLER)

app.get("/", function (req, res) {
  res.end("<h1>Hola mundo desde Express.js</h1>");
  console.log(res);
  console.log(req);
}); // Iniciamos el servidor y escuchamos las conexiones en el puerto 3000

app.listen(port, function () {
  console.log("Inciando Express desde http://localhost:3000");
});