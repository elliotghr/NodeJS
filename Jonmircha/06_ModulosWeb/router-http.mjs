// DOCS: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
import { createServer } from "http";

// El requestListener  recibe dos parametros, la petición (require o req) y la respuesta (response)
const server = createServer((req, response) => {
  if (req.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>Home! 🤓</h1>");
  } else if (req.url === "/hola") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>¡Hola! 🤞</h1>");
  } else if (req.url === "/nano") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>Nano! 🐶</h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>¡Not found! ☹</h1>");
  }
});

// Asignamos un puerto a nuestro servidor
// Se recomienda utilizar un puerto > 3000 y también podemos especificar la dirección IP
server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor web en ejecución en http://127.0.0.1:3000");
});
