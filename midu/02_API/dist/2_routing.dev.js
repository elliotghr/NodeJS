"use strict";

var http = require("node:http"); // commonJS -> modulos clásicos de node


var dittoJSON = require("./pokemon/ditto.json");

var processRequest = function processRequest(req, res) {
  var method = req.method,
      url = req.url;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon":
          {
            var body = ""; // escuchar el evento data

            req.on("data", function (chunk) {
              body += chunk.toString();
            });
            req.on("end", function () {
              var data = JSON.parse(body); // llamar a una base de datos para guardar la info

              res.writeHead(201, {
                "Content-Type": "application/json; charset=utf-8"
              });
              data.timestamp = Date.now();
              res.end(JSON.stringify(data));
            });
            break;
          }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }

  }
};

var server = http.createServer(processRequest);
server.listen(1234, function () {
  console.log("server listening on port http://localhost:1234");
});