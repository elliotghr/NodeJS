"use strict";

var fs = require("node:fs"); // En los callbacks siempre está primero el error (puesto ahi de manera intencional para no omitirlo)


fs.readdir(".", function (err, files) {
  if (err) {
    console.log("Error al leer el directorio: ", err);
    return;
  }

  files.forEach(function (file) {
    console.log(file);
  });
});