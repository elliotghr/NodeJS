// Variable de estado que simulará la DB
let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
];

// Aqui declaramos la lógica de cada una de las rutas
const getllAllTask = (req, res) => {
  res.render("index", { title: "Lista de tareas", tasks });
};
const getAddTaskForm = (req, res) => {
  res.render("add", { title: "Agregar tarea" });
};
const getEditTaskForm = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (!task) res.redirect("/");
  res.render("edit", { title: "Editar Tarea", task });
};
const addTask = (req, res) => {
  let { title } = req.body;
  let id = tasks.length + 1;
  let completed = false;

  tasks.push({
    id,
    title,
    completed,
  });
  res.redirect("/");
};
const updateTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) res.redirect("/");
  tasks[taskIndex].title = req.body.title;
  res.redirect("/");
};
const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.redirect("/");
};
const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) task.completed = true;
  res.redirect("/");
};
const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) task.completed = false;
  res.redirect("/");
};

export default {
  getllAllTask,
  getAddTaskForm,
  getEditTaskForm,
  addTask,
  updateTask,
  deleteTask,
  completeTask,
  uncompleteTask,
};
