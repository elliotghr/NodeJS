// Importamos readline que pertenece al core de Node
import { createInterface } from "readline";
// Importamos chalk con npm que es una librería de terceros
import chalk from "chalk";

const tasks = [];

// Necesitamos un objeto que procese la entrada de datos y otro que procese la salida
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  // process es el objeto que contiene el event loop que está ejecutando nuestro códigos
});

function displayMenu() {
  console.log("\n");
  console.log(chalk.bold("👽👽👽 To Do App 👽👽👽 \n"));
  console.log(chalk.bgMagentaBright.bold("Menú de opciones"));
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");
}

function addTask() {
  console.log("\n");
  rl.question(chalk.bgMagentaBright.bold("Escribe la tarea: "), (task) => {
    tasks.push({
      task,
      completed: false,
    });
    console.log(chalk.green.bold("¡Tarea agregada con éxito!"));
    displayMenu();
    chooseOption();
  });
}

function listTasks() {
  console.log("\n");
  console.log(chalk.bold("👽👽👽 Estas son tus Tareas 👽👽👽 \n"));
  if (tasks.length === 0) {
    console.log(chalk.greenBright("No hay tareas por hacer 😁✌"));
    displayMenu();
    chooseOption();
  }
  tasks.forEach((task, index) => {
    let status = task.completed ? "✔" : "❌";
    if (task.completed) {
      console.log(
        chalk.greenBright.bold(`${index + 1}.- ${status} - ${task.task}`)
      );
    } else {
      console.log(
        chalk.redBright.bold(`${index + 1}.- ${status} - ${task.task}`)
      );
    }
  });
  displayMenu();
  chooseOption();
}

function completeTask() {
  rl.question(
    chalk.bgMagentaBright.bold("Digita el número de la tarea a completar"),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(chalk.greenBright("Tarea marcada con éxito ✔"));
        displayMenu();
        chooseOption();
      } else {
        console.log(chalk.redBright("Tarea inválida"));
        displayMenu();
        chooseOption();
      }
    }
  );
}

function chooseOption() {
  console.log("\n");
  rl.question(
    chalk.bgMagentaBright.bold(
      "Elige una opción, digita el número de tu opción: "
    ),
    (choice) => {
      switch (choice) {
        case "1":
          addTask();
          break;
        case "2":
          listTasks();
          break;
        case "3":
          completeTask();
          break;
        case "4":
          deleteTask();
          break;
        case "5":
          console.log(chalk.redBright("Adios ✌"));
          // Método que cierra el stream
          rl.close();
          break;

        default:
          console.log(
            chalk.redBright("Opción inválida, intenta nuevamente \n")
          );
          displayMenu();
          chooseOption();
          break;
      }
    }
  );
}

function deleteTask() {
  rl.question(
    chalk.bgMagentaBright.bold("Digita el número de tarea a eliminar: "),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log(chalk.greenBright("Tarea eliminada con éxito ✔"));
        displayMenu();
        chooseOption();
      } else {
        console.log(chalk.redBright("Tarea inválida"));
        displayMenu();
        chooseOption();
      }
    }
  );
}

displayMenu();
chooseOption();
