const fs = require("node:fs");

// En los callbacks siempre está primero el error (puesto ahi de manera intencional para no omitirlo)
fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Error al leer el directorio: ", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
