import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  // Seteamos las cabeceras
  res.set({ "content-Type": "text/html; charset=utf-8" });

  // El método end terminacon la ejecución del programa
  // res.end("<h1>Hola mundo desde Express.js con el método end</h1>");

  // El método send no terminacon la ejecución del programa
  res.send("<h1>Hola mundo desde Express.js con el método send</h1>");
});

// Retornando un archivo json
app.get("/json", (req, res) => {
  res.json({
    name: "nano",
    age: "11",
    nickname: "banano",
  });
});

// Retornando un archivo
app.get("/archivo", (req, res) => {
  res.sendFile(resolve("index.html"));
});

// Retornando una plantilla de un motor de plantillas
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
