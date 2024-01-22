"use strict";

var fs = require("node:fs"); // a partir de Node 16, se recomienda poner node:
// https://nodejs.org/api/fs.html#fsfstatsyncfd-options


var stats = fs.statSync("./archivo.txt"); // Un objeto <fs.Stats> proporciona información sobre un archivo.
// https://nodejs.org/api/fs.html#class-fsstats -> Métodos disponibles

console.log(stats.isFile(), // si es un fichero
stats.isDirectory(), // si es un directorio
stats.isSymbolicLink(), // si es un enlace simbólico
stats.size // tamaño en bytes
);