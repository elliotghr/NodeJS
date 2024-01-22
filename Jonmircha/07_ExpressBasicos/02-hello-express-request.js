import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde Express.js</h1>");
});

// Para recibir parametros por URL lo haremos anteponiendo : al nombre del parametro y se separarán por un guión
// Endpoint con params
app.get("/user/:id-:name-:age", (req, res) => {
  // http://localhost:3000/user/7-elliot-27
  // Establecemos las cabeceras
  res.set({ "content-Type": "text/html; charset=utf-8" });
  // Accedemos a los parametros desde request y dentro de params podemos acceder a cada uno de ellos
  res.end(
    `<h1> ${req.params.name} bienvenido a Express.js. Tu id es: ${req.params.id} y tienes ${req.params.age} años.</h1>`
  );
});

app.get("/search", (req, res) => {
  // http://localhost:3000/search?id=7&name=elliot&age=27
  // Endpoint con query
  res.set({ "content-Type": "text/html; charset=utf-8" });
  // Accedemos a los parametros desde request y dentro de query podemos acceder a cada uno de ellos
  res.end(
    `<h1> ${req.query.name} bienvenido a Express.js. Tu id es: ${req.query.id} y tienes ${req.query.age} años.</h1>`
  );
});

// Seteamos el puerto
app.listen(3000, () => {
  console.log("Inciando Express desde http://localhost:3000");
});
