import express from "express";

// Inicializamos express
const app = express();

// Hacemos uso del método get
app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde Express.js</h1>");
  console.log(res);
  console.log(req);
});

// Seteamos el puerto
app.listen(3000, () => {
  console.log("Inciando Express desde http://localhost:3000");
});
