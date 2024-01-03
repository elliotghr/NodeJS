import { get } from "https";

const urlSite = {
  hostname: "jonmircha.com",
  //   El puerto 80 es para http
  //   El puerto 443 es para https
  port: 443,
  path: "/cursos",
};

// Callback de res
get(urlSite, (res) => {
  console.log(
    `El sitio ${urlSite.hostname} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`
  );
  // Callback de error dentro del método on a manera de promesa
}).on("error", (err) => {
  console.error(
    `El sitio ${urlSite.hostname} no ha respondido. Código: ${err.statusCode}. Mensaje: ${err.statusMessage}`
  );
});
