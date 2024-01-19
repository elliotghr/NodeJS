import express from "express";

// Inicializamos express
const app = express();
const port = 3000;
// Creamos un Router
// https://expressjs.com/en/starter/basic-routing.html

// app.METHOD(PATH, HANDLER)
app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde Express.js</h1>");
  console.log(res);
  console.log(req);
});

// Iniciamos el servidor y escuchamos las conexiones en el puerto 3000
app.listen(port, () => {
  console.log("Inciando Express desde http://localhost:3000");
});
