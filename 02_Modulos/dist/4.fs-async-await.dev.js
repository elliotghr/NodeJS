"use strict";

// Esto sólo en los módulos nativos
// que no tienen promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
var _require = require('node:fs/promises'),
    readFile = _require.readFile;

function init() {
  var text, secondText;
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Leyendo el primer archivo...');
          _context.next = 3;
          return regeneratorRuntime.awrap(readFile('./archivo.txt', 'utf-8'));

        case 3:
          text = _context.sent;
          console.log('primer texto:', text);
          console.log('--> Hacer cosas mientras lee el archivo...');
          console.log('Leyendo el segundo archivo...');
          _context.next = 9;
          return regeneratorRuntime.awrap(readFile('./archivo2.txt', 'utf-8'));

        case 9:
          secondText = _context.sent;
          console.log('segundo texto:', secondText);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

init(); // IIFE - Inmediatly Invoked Function Expression
// ;(
//   async () => {
//     console.log('Leyendo el primer archivo...')
//     const text = await readFile('./archivo.txt', 'utf-8')
//     console.log('primer texto:', text)
//     console.log('--> Hacer cosas mientras lee el archivo...')
//     console.log('Leyendo el segundo archivo...')
//     const secondText = await readFile('./archivo2.txt', 'utf-8')
//     console.log('segundo texto:', secondText)    
//   }
// )()