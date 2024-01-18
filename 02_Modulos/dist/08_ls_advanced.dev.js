"use strict";

var fs = require("node:fs");

var folder = process.arg[2] || ".";
fs.readdir(folder, function (err, files) {
  if (err) {
    console.log("Error al leer el directorio: ", err);
    return;
  }

  files.forEach(function (file) {
    console.log(file);
  });
});