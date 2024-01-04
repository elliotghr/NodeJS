import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// import taskController from "./controllers/taskController.js";
// No es necesario importar pug, Node ya lo reconoce como motor de plantillas

// __dirname -> Ya no es compatible con los módulos ESM, solo con CommonJS, entonces, debemos declararla

const __dirname = path.dirname(new URL(import.meta.url).pathname); // nueva manera de especificar la carpeta de trabajo

const app = express();
const port = 3000;

// Midlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev")); // seteamos el tipo de logger a usar, en este caso será dev

// Configuramos la carpeta publica asignandosela a express.static
app.use(express.static(path.join(__dirname, "public")));

// Establecemos el soporte al parseo de JSON
app.use(express.json());

// Configuramos la codificación de datos
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
