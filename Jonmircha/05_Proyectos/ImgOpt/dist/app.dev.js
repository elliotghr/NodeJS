"use strict";

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _imagemin = _interopRequireDefault(require("imagemin"));

var _imageminJpegtran = _interopRequireDefault(require("imagemin-jpegtran"));

var _imageminPngquant = _interopRequireDefault(require("imagemin-pngquant"));

var _imageminSvgo = _interopRequireDefault(require("imagemin-svgo"));

var _imageminWebp = _interopRequireDefault(require("imagemin-webp"));

var _imageminGifsicle = _interopRequireDefault(require("imagemin-gifsicle"));

var _sharp = _interopRequireDefault(require("sharp"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Imagenes originales
var inputFolder = "src"; // Imagenes resultantes

var outputFolder = "opt"; // Ancho a redimensionar

var targetWidth = 1920; // Lo haremos en una función asincorna para acelerar el proceso de optimización al optimzar varias imagenes al mismo tiempo
// En Node, cuando trabajamos con una función asincrona podemos trabajar con try/catch para obtener los errores

var processImg = function processImg() {
  var files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, inputPath, outputPath;

  return regeneratorRuntime.async(function processImg$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_fsExtra["default"].readdir(inputFolder));

        case 3:
          files = _context.sent;
          console.log(files);
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 8;
          _iterator = files[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 22;
            break;
          }

          file = _step.value;
          // Declaramos las referencias de entrada y de salida
          inputPath = "".concat(inputFolder, "/").concat(file);
          outputPath = "".concat(outputFolder, "/").concat(file); // Haciendo uso de sharp podemos redimensionarla y asignarla en el nuevo directorio

          _context.next = 16;
          return regeneratorRuntime.awrap((0, _sharp["default"])(inputPath).resize(targetWidth).toFile(outputPath));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap((0, _imagemin["default"])([outputPath], {
            destination: outputFolder,
            plugins: [(0, _imageminJpegtran["default"])({
              quality: 80
            }), // Comprimir imagen JPG con calidad del 80%
            (0, _imageminPngquant["default"])(), // Comprimir imagen PNG
            (0, _imageminSvgo["default"])(), // Comprimir imagen SVG
            (0, _imageminWebp["default"])({
              quality: 80
            }), // Comprimir imagen WebP con calidad del 80%
            (0, _imageminGifsicle["default"])() // Comprimir imagen GIF
            ]
          }));

        case 18:
          console.log(_chalk["default"].green("Se ha optimizado la imagen ".concat(file)));

        case 19:
          _iteratorNormalCompletion = true;
          _context.next = 10;
          break;

        case 22:
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 28:
          _context.prev = 28;
          _context.prev = 29;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 31:
          _context.prev = 31;

          if (!_didIteratorError) {
            _context.next = 34;
            break;
          }

          throw _iteratorError;

        case 34:
          return _context.finish(31);

        case 35:
          return _context.finish(28);

        case 36:
          console.log(_chalk["default"].bgGreenBright.bold("Ha terminado con éxito el proceso de optimizar tus imagenes"));
          _context.next = 42;
          break;

        case 39:
          _context.prev = 39;
          _context.t1 = _context["catch"](0);
          console.error(_context.t1);

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 39], [8, 24, 28, 36], [29,, 31, 35]]);
};

processImg();