"use strict";

var path = require("node:path"); // Nunca se deben usar rutas del siguiente modo: ./content/subfolder/test.txt, esto está prohibido por la compatibilidad de los SO, en windows -> \ en linux -> /


console.log(path.sep); // barra separadora de carpetas según SO
// unir rutas con path join

var filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // Obtener el nombre de un archivo

var basename = path.basename("/tmp/midu—secret—files/password.txt");
console.log(basename); // Obtener el nombre de un archivo sin extensión

var filename = path.basename("/tmp/midu—secret—files/password.txt", ".txt");
console.log(filename); // Obtener la extensión de un archivo

var extension = path.extname(" my.super.image.jpg");
console.log(extension);