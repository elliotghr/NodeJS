import express from "express";
import { resolve } from "path";
// Inicializamos express
const app = express();

// Hacemos uso del método get para crear dicha ruta
app.get("/", (req, res) => {
  // Ahora usaremos el método sendFile y le pasamos la ruta del archivo
  res.sendFile(resolve("index.html"));
});

// Seteamos el puerto
app.listen(3000, () => {
  console.log("Inciando Express desde http://localhost:3000");
});
