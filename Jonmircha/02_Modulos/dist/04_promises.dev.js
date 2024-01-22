"use strict";

var fs = require("node:fs/promises"); // accedemos al uso de las promesas en lugar de callbacks, existen varios modulos con esta caracteristica


console.log("Leyendo el primer archivo..."); // Manejo de promesas con los métodos then y catch

fs.readFile("./archivosss.txt", "utf-8").then(function (text) {
  console.log("primer texto:", text);
})["catch"](function (err) {
  console.log("Ha ocurrido un error: ", err);
});
console.log("--> Hacer cosas mientras lee el archivo...");
console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then(function (text) {
  console.log("segundo texto:", text);
}); // PROMISIFY EN MODULOS QUE NO TIENEN PROMESAS
// promisify funciona en los módulos nativos que no tienen promesas nativas -> ("node:<modulo>/promises")
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
// console.log("Leyendo el primer archivo...");
// fs.readFilePromise("./archivo2.txt", "utf-8").then((text) => {
//   console.log("segundo texto:", text);
// });