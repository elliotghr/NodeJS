const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
// Si no se especifica la codificación, entonces regresará un buffer
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  // <---- ejecutas este callback cuando termines
  console.log("primer texto:", text);
});

console.log("--> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("segundo texto:", text);
});
