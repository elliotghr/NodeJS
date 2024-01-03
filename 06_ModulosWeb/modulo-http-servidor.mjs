// DOCS: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
import { createServer } from "http";

// El requestListener  recibe dos parametros, la petición (require o req) y la respuesta (response)
const server = createServer((req, response) => {
  // Escribimos una cabecera
  //   response.writeHead(200, { "Content-Type": "text/plain" });
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //   Retornamos una respuesta
  response.end("<h1>¡Hola mundo 🤓!</h1> <p>Primer servidor web en Node</p>");
});

// Asignamos un puerto a nuestro servidor
// Se recomienda utilizar un puerto > 3000 y también podemos especificar la dirección IP
server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor web en ejecución en http://127.0.0.1:3000");
});
