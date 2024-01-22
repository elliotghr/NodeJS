// Este archivo funcionará sin mjs porque está la key type del package.json con el valor "modules"
import { calculadora } from "./calculadora.js";
const c = console.log;

c(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(4, 2));
