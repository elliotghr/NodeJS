import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import markdownIt from "markdown-it";
import fm from "front-matter";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = fileURLToPath(new URL(".", import.meta.url)); // nueva manera de especificar la carpeta de trabajo en windows

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", path.join(__dirname, "pages")); // Definimos la carpeta  de las views
app.set("view engine", "pug"); // Definimos el motor de plantillas

app.use(express.static(path.join(__dirname, "public"))); // Obtenemos los archivos en la carpeta public, excepto los .md
// Rutas dinamicas desde archivos en la carpeta "pages"
// Con esto generaremos rutas dinamicas, amigables y sin mostrar la extensión .md
const pagesDir = path.join(__dirname, "pages"); // definimos la ruta
const files = await fs.readdir(pagesDir); // obtenemos un array de los archivos del directorio dado
console.log(files);

// Aquí lógica para archivos html y md
for (let file of files) {
  const filePath = path.join(pagesDir, file);
  let extname = path.extname(file);

  console.log(file, filePath, extname);

  if (extname === ".md" || extname === ".pug" || extname === ".html") {
    let fileName = path.basename(file, extname);
    console.log(fileName);

    app.get(`/${fileName}`, async (req, res) => {
      try {
        if (extname === ".pug") {
          res.render(fileName);
        }

        if (extname === ".html") {
          res.sendFile(filePath);
        }

        if (extname === ".md") {
          let fileContent = await fs.readFile(filePath, "utf-8");
          // Desestructuramos el body y los frontMatterAttributes (renombrados a attributes) de la librería fm
          let { attributes: frontMatterAttributes, body } = fm(fileContent);

          let attributes = frontMatterAttributes;
          let contentHTML = markdownIt().render(body);
          // Definimos el layout-markdown como vista a basarse
          // Los atributos son los que existen en el archivo md entre --- y ---, el contentHTML es el resto del archivo md
          res.render("layout-markdown", { ...attributes, contentHTML });
        }
      } catch (err) {
        res.status(404).render("error-404");
      }
    });
  }
}
// Ruta de la página principal
app.get("/", (req, res) => {
  res.render("index");
});

// Ruta del error 404
app.use((req, res) => {
  res.status(404).render("error-404");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
