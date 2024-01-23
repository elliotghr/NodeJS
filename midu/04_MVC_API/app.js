import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

// import movies from "./movies.json" assert {type: 'json'}; // Indicamos que debe export el archivo como un tipo JSON y no como un JS. (Experimantal)
// import movies from "./movies.json" with {type: 'json'}; // Esta es la sintaxis que será oficial, pero aún no funciona

// Como leer un json en ESModules
// import fs from "node:fs";
// const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));

// Como leer un json en ESModules recomendado por ahora
// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);

// const movies = require("./movies.json");

const app = express();
app.use(json());
// Administración de CORS
app.use(corsMiddleware());
app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies

// Rutas
// Endpoint getAll o get specific movie

app.use("/movies", moviesRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
