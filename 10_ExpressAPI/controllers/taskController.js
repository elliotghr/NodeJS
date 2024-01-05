// Variable de estado que simulará la DB
let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
];

// Aqui declaramos la lógica de cada una de las rutas
const getAllTask = (req, res) => {
  res.json({ tasks });
};
const getTask = (req, res) => {
  let id = parseInt(req.params.id);
  console.log(id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    res.status(404).json({
      error: "404",
      message: "Tarea no encontrada",
    });
  } else {
    res.json({
      error: false,
      message: "Tarea encontrada",
      body: tasks[taskIndex],
    });
  }
};
const addTask = (req, res) => {
  let { title } = req.body;
  if (!title) {
    res.status(404).json({
      error: "404",
      message: "Falta el titulo de la tarea",
    });
  } else {
    let id = tasks.length + 1;
    let completed = false;

    tasks.push({
      id,
      title,
      completed,
    });
    res.json({ error: false, message: "Tarea agregada", body: tasks });
  }
};
const updateTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1)
    res.status(404).json({
      error: "404",
      message: "Tarea no encontradas",
    });
  tasks[taskIndex].title = req.body.title;
  res.json({ error: false, message: "Tarea editada", body: tasks });
};
const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);

  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({
      error: true,
      message: "Tarea no encontradas",
    });
  } else {
    tasks = tasks.filter((task) => task.id !== id);
    res.json({ error: false, message: "Tarea eliminada", body: tasks });
  }
};
const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = true;
    res.json({ error: false, message: "Tarea completada", body: tasks });
  } else {
    res.status(404).json({
      error: true,
      message: "Tarea no encontradas",
    });
  }
};
const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = false;
    res.json({ error: false, message: "Tarea no completada", body: tasks });
  } else {
    res.status(404).json({
      error: true,
      message: "Tarea no encontradas",
    });
  }
};

export default {
  getAllTask,
  getTask,
  addTask,
  updateTask,
  deleteTask,
  completeTask,
  uncompleteTask,
};
