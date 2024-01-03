import express from "express";
import { resolve } from "path";

const app = express();
// MÉTODOS RESPONSE:
// https://expressjs.com/en/4x/api.html#res

// Endpoint set y end
app.get("/", (req, res) => {
  // Seteamos las cabeceras
  res.set({ "content-Type": "text/html; charset=utf-8" });

  // El método end termina con la ejecución del programa
  // res.end("<h1>Hola mundo desde Express.js con el método end</h1>");

  // El método send no termina con la ejecución del programa
  res.send("<h1>Hola mundo desde Express.js con el método send</h1>");
});

// Endpoint que retorna un archivo json
app.get("/json", (req, res) => {
  res.json({
    name: "nano",
    age: "11",
    nickname: "banano",
  });
});

// Endpoint que retorna un archivo
app.get("/archivo", (req, res) => {
  // IMPORTANTE: "path must be an absolute path to the file."
  // https://expressjs.com/en/4x/api.html#res.sendFile
  res.sendFile(resolve("index.html"));
});

// Endpoint que retorna una plantilla de un motor de plantillas
app.get("/plantilla", (req, res) => {
  // Es necesario especificar el motor de plantilla, en este caso Nunjucks para que funcione la ruta
  res.render("plantilla");
});

// Redirecciones
app.get("/anemex", (req, res) => {
  // res.send("<h1>Bienvenidos a anemex ✌</h1>");
  res.redirect(302, "https://anemex.com.mx");
});

// Seteamos el puerto
app.listen(3000, () => {
  console.log("Inciando Express desde http://localhost:3000");
});
