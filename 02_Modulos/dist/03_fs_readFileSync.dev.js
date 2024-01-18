"use strict";

var fs = require('node:fs');

console.log('Leyendo el primer archivo...'); // https://nodejs.org/api/fs.html#fsreadfilesyncpath-options

var text = fs.readFileSync('./archivo.txt', 'utf-8'); // Si no se especifica la codificación, entonces regresará un buffer

console.log('primer texto:', text);
console.log('--> Hacer cosas mientras lee el archivo...');
console.log('Leyendo el segundo archivo...');
var secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log('segundo texto:', secondText);