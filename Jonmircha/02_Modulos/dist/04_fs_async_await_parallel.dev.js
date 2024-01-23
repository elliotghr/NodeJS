"use strict";

var _promises = require("node:fs/promises");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Retorna una respuesta hasta que ambas promesas se resuelven
Promise.all([(0, _promises.readFile)("./archivo.txt", "utf-8"), (0, _promises.readFile)("./archivo2.txt", "utf-8")]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      text = _ref2[0],
      secondText = _ref2[1];

  console.log("primer texto:", text);
  console.log("segundo texto:", secondText);
});