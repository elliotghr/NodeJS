import { Router } from "express";
import routerBirds from "./birds.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});
// Route handlers
// Next
// Ejecuta la siguiente callback
router.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);
// With array
// Ejecuta las funciones declaradas en el array
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

router.get("/example/c", [cb0, cb1, cb2]);

// Combination
// Se pueden combinar los arrays con el método next
const db0 = function (req, res, next) {
  console.log("DB0");
  next();
};

const db1 = function (req, res, next) {
  console.log("DB1");
  next();
};

router.get(
  "/example/d",
  [db0, db1],
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from D!");
  }
);

// res.send([body])
// Envío de respuesta con contenido no estatico
// Si es un string, entonces, lo convierte a un Content-type: html
router.get("/buffer", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from("<p style='color:red'>some html</p>"));
});

// res.sendFile(path [, options] [, fn])
// Respuesta con envío de archivos staticos
router.get("/gethtml", (req, res) => {
  res.sendFile(resolve("index.html"));
});

// router.route()
// Se puede hacer uso del método route para agrupar varias rutas con el mismo nombre pero diferente verbo HTTP
router
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

router.use("/birds", routerBirds);

export default router;
