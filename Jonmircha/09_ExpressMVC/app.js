import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskController.js";
import errorController from "./controllers/errorController.js";
import { fileURLToPath } from "url";
// No es necesario importar pug, Node ya lo reconoce como motor de plantillas

// __dirname (nativo) -> Ya no es compatible con los módulos ESM, solo con CommonJS, entonces, debemos declararla

// const __dirname = path.dirname(new URL(import.meta.url).pathname); // nueva manera de especificar la carpeta de trabajo
const __dirname = fileURLToPath(new URL(".", import.meta.url)); // nueva manera de especificar la carpeta de trabajo en windows

const app = express();
const port = 3001;

// MIDDLEWARES
app.use(cors());
app.use(helmet());
app.use(morgan("dev")); // seteamos el tipo de logger a usar, en este caso será dev
app.set("views", path.join(__dirname, "views")); // Definimos la carpeta de las views
app.set("view engine", "pug"); // Definimos el motor de plantillas
// Configuramos la carpeta publica asignandosela a express.static
app.use(express.static(path.join(__dirname, "public")));
// Establecemos el soporte al parseo de JSON
app.use(express.json());
// Configuramos la codificación de datos
app.use(express.urlencoded({ extended: false }));

// DEFINICIÓN DE RUTAS
app.get("/", taskController.getllAllTask);
app.get("/add", taskController.getAddTaskForm);
app.post("/add", taskController.addTask);
app.get("/edit/:id", taskController.getEditTaskForm);
app.post("/edit/:id", taskController.updateTask);
app.get("/complete/:id", taskController.completeTask);
app.get("/uncomplete/:id", taskController.uncompleteTask);
app.get("/delete/:id", taskController.deleteTask);
// El manejo de los errores deben de ir al final ya que esto funciona como un switch
app.use(errorController.notFound);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
