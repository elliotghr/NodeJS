// Definimos las funciones
const sumar = (a, b) => a + b,
  restar = (a, b) => a - b,
  multiplicar = (a, b) => a * b,
  dividir = (a, b) => a / b,
  modulo = (a, b) => a % b,
  // Creamos un objeto con los métodos definidos
  calculadora = {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo,
  };

// Exportamos el objeto de calculadora como tipo module
module.exports = calculadora;
