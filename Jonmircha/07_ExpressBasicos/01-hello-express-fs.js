import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  // Ahora usaremos el método sendFile y le pasamos la ruta del archivo
  // IMPORTANTE: "path must be an absolute path to the file."
  // https://expressjs.com/en/4x/api.html#res.sendFile
  res.sendFile(resolve("index.html"));
});

app.listen(3000, () => {
  console.log("Inciando Express desde http://localhost:3000");
});
