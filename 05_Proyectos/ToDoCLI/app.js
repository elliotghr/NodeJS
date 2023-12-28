// Importamos readline que pertenece al core de Node
import { createInterface } from "readline";
// Importamos chalk con npm que es una librería de terceros
import chalk from "chalk";

const task = [];

// Necesitamos un objeto que procese la entrada de datos y otro que procese la salida
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  // process es el objeto que contiene el event loop que está ejecutando nuestro códigos
});

function displayMenu() {
  console.log(chalk.redBright.bold("👽👽👽 To Do App 👽👽👽"));
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Salir");
}

displayMenu();
