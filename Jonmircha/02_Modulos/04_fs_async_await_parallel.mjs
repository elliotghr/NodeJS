// Con módulos sí se puede usar async/await sin una función
// Top Level await -> Uso de await en el cuerpo del código gracias a los ESM
import { readFile } from "node:fs/promises";

// Retorna una respuesta hasta que ambas promesas se resuelven
Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  // Como ambas promesas se resuelven al mismo tiempo, nosotros controlamos el renderizado de las promesas aqui
  console.log("primer texto:", text);
  console.log("segundo texto:", secondText);
});
