// Objeto global que proporciona control e información sobre el proceso actual del entorno de ejecución

// Argumentos de entrada:
console.log(process.argv);

// Controlar el proceso y su salida
// process.exit(0); // salida normal sin errores
// process.exit(0); // salida indicando la existencia de algún error

// Podemos controlar eventos del proceso (on)
process.on("exit", () => {
  // Cuando salgas:
  // ej: Código para limpiar recrusos
});

// current working directory (Desde donde ejecutamos el archivo)
console.log(process.cwd());

// platform
console.log(process.platform);

// Uno de los más usados: ENV
console.log(process.env.PEPITO); // ejecutar con -> PEPITO=hola node 07_process.js
