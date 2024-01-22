import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskController.js";
import errorController from "./controllers/errorController.js";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// MIDDLEWARES
app.use(cors());
app.use(helmet());
app.use(morgan("dev")); // seteamos el tipo de logger a usar, en este caso será dev
// Establecemos el soporte al parseo de JSON
app.use(express.json());
// Configuramos la codificación de datos
app.use(express.urlencoded({ extended: false }));

// DEFINICIÓN DE RUTAS
app.get("/tasks", taskController.getAllTask);
app.get("/tasks/:id", taskController.getTask);
app.post("/tasks", taskController.addTask);
app.put("/tasks/:id", taskController.updateTask);
app.put("/tasks/complete/:id", taskController.completeTask);
app.put("/tasks/uncomplete/:id", taskController.uncompleteTask);
app.del("/tasks/:id", taskController.deleteTask);
// El manejo de los errores deben de ir al final ya que esto funciona como un switch
app.use(errorController.notFound);

app.listen(port, () => {
  console.log(`La API está funcionando en http://localhost:${port}/tasks`);
});
