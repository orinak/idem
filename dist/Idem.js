var Idem =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/font-detect/font-detect-cmd.js":
/*!*****************************************************!*\
  !*** ./node_modules/font-detect/font-detect-cmd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var FontDetector, woff,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  woff = "data:font/woff;charset=utf-8;base64,d09GRk9UVE8AAAQYAAoAAAAABlwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAMQAAADSEQga8UZGVE0AAAG4AAAAGwAAABxqQJGNT1MvMgAAAdQAAABDAAAAYFYPXfBjbWFwAAACGAAAADcAAAFCAA0D1mhlYWQAAAJQAAAAKQAAADb9ITBXaGhlYQAAAnwAAAAZAAAAJAN7/ztobXR4AAACmAAAAAgAAAAIAfQAAG1heHAAAAKgAAAABgAAAAYAAlAAbmFtZQAAAqgAAAFZAAACjkaWZeZwb3N0AAAEBAAAABMAAAAg/4YAMnicY2RgYWFgZGTkCs0rySzJSU0xZGBkYmBk0PjBz/BDmvGHDNMPWeYf4izdQMAqw7CIX4aBQUCGYamgDAO7DMNpIQZmkGoXBl+GMOei1MSS1BSFpEqFqtS8fCBO19HRUSjPLMlQcMvPK3HLL0pPVTDSM1DQyCgpKbDS108DiqaBRPWK0/TyUks04Y5AuAYIBBmYGBkVFLv3/nDdy7h37++Yvcx7xdR/rHzPtvdPuegP198xf1zZ+fi6RbpFu3m4ANybP/V4nGNgYGBkAIIztovOg+jzjOV2ULoeAEMOBccAeJxjYGH8wviFgZWBgamLaQ8DA0MPhGZ8wGDIyAQUZWBjZoABRgYkEJDmmsJwgMGAwYBZ4b8FQxSGGgUgZAQAfmQKqgB4nGNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoQgvsH//xDy/0WoSgZGNgYYk2hAqvrBDgBrAQbjAHicY2BkYGAA4pys3ox4fpuvDNzML4AiDOcZy3ci01DAwcAEogAU4ghtAAAAeJxjYGRgYFb4b8EQxQADjAyogAkAMlIBuQAAAAH0AAAAAAAAAABQAAACAAB4nIWQzUoDMRSFT+wPFESkT5CNUGEmzZRuOluhC8Wl3bdMph2omTpNKe1eceebCL6Ca9euXfsE7vTMNBREsBOS+92TMzc3AXCCZwjsvgs8ehZo4cPzEZr48lzDmbjyXEdL3Htu4FS8eG5Sf6dT1FvMHqq/ShZo483zEY7x6bmGS3x7rqMt7jw3IMWT5yb1V/ZXwGAMxzWBxAQbrltmFrmPUwTVkFgjo3NGGnLXkstY0GGo9aCgGTt0OI4FYnQ5Uu9N916FJTNF1VA/5zMVZuxMIicbuTU255wGQSDXmZvJYW7dMC+mRvaUlp2Zc4u4202ppqWqlqmyxrHITXVK2eG8uk1EybrMzU1CvK60DCvcMjFJtmL87xox59+SOz3CACHXkG7N2GepX23Gcn80ORqEUdjTUf9QkyNqBR8nq/qSrF1WV1Use8LIFMsst1LrSGmt5YGCP/yzcc0AAAB4nGNgZgCD/80MRgxYAAAoRAG4AA==";

  FontDetector = (function() {
    function FontDetector(opts) {
      this.ready = __bind(this.ready, this);
      var src;
      src = "src: url(" + woff + ") format('woff');";
      this.css = "@font-face {\n    font-family: font-detect-0-woff;\n    " + src + "\n}\n#font-detect-test-block {\n    display: inline-block;\n    position: fixed;\n    left: -100%;\n}";
    }

    FontDetector.prototype.inject = function() {
      var elem, head, sheet;
      elem = document.getElementById('font-detect-test-block');
      if (elem == null) {
        elem = document.createElement('div');
        elem.id = 'font-detect-test-block';
        elem.innerHTML = '0';
        document.body.appendChild(elem);
      }
      sheet = document.getElementById('font-detect-styles');
      if (sheet == null) {
        sheet = document.createElement('style');
        sheet.setAttribute('type', 'text/css');
        sheet.id = 'font-detect-styles';
        sheet.innerHTML = this.css;
        head = document.getElementsByTagName('head')[0];
        return head.appendChild(sheet);
      }
    };

    FontDetector.prototype.remove = function() {
      var elem, sheet;
      elem = document.getElementById('font-detect-test-block');
      if (elem != null) {
        elem.remove();
      }
      sheet = document.getElementById('font-detect-styles');
      if (sheet != null) {
        return sheet.remove();
      }
    };

    FontDetector.prototype.ready = function(callback) {
      var elem;
      this.inject();
      elem = document.getElementById('font-detect-test-block');
      elem.style.fontFamily = 'font-detect-0-woff';
      if (elem.clientWidth > 0) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.ready(callback);
          };
        })(this)), 50);
      } else {
        return callback();
      }
    };

    FontDetector.prototype.detect = function(fonts, callback) {
      return this.ready((function(_this) {
        return function() {
          var elem, err, font, results, _i, _len;
          elem = document.getElementById('font-detect-test-block');
          results = [];
          for (_i = 0, _len = fonts.length; _i < _len; _i++) {
            font = fonts[_i];
            elem.style.fontFamily = "'" + font + "', font-detect-0-woff";
            results.push(elem.clientWidth > 0);
          }
          err = null;
          callback(err, results);
          return _this.remove();
        };
      })(this));
    };

    return FontDetector;

  })();

  module.exports = FontDetector;

}).call(this);


/***/ }),

/***/ "./src/Agent.js":
/*!**********************!*\
  !*** ./src/Agent.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Probes = __webpack_require__(/*! ./Probes */ "./src/Probes/index.js")

const serialize = __webpack_require__(/*! ./serialize */ "./src/serialize.js")
const encode = __webpack_require__(/*! ./encode */ "./src/encode.js")

function Agent () {
  // use w/o `new` keyword
  if (!(this instanceof Agent)) {
    return new Agent()
  }

  const probes = {}

  for (const name in Probes) {
    const make = Probes[name]
    probes[name] = make()
  }

  this.probes = probes

  return this
}

Agent.prototype.detect = async function () {
  const { probes } = this

  const data = {}

  for (const key in probes) {
    const probe = probes[key]

    data[key] = await probe()
  }

  const id = encode(serialize(data))

  return {
    id,
    data
  }
}

module.exports = Agent

module.exports.encode = encode
module.exports.serialize = serialize


/***/ }),

/***/ "./src/Probes/FontList.js":
/*!********************************!*\
  !*** ./src/Probes/FontList.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FontDetector = __webpack_require__(/*! font-detect */ "./node_modules/font-detect/font-detect-cmd.js")

// incomplete list of popular fonts
const FONT_LIST = [
  'Helvetica',
  'Lucida Grande',
  'Lucida Sans',
  'Tahoma',
  'Arial',
  'Geneva',
  'Monaco',
  'Verdana',
  'Microsoft Sans Serif',
  'Trebuchet MS',
  'Courier New',
  'Times New Roman',
  'Courier',
  'Lucida Bright',
  'Lucida Sans Typewriter',
  'URW Chancery L',
  'Comic Sans MS',
  'Georgia',
  'Palatino Linotype',
  'Lucida Sans Unicode',
  'Times',
  'Century Schoolbook L',
  'URW Gothic L',
  'Franklin Gothic Medium',
  'Lucida Console',
  'Impact',
  'URW Bookman L',
  'Helvetica Neue',
  'Nimbus Sans L',
  'URW Palladio L',
  'Nimbus Mono L',
  'Nimbus Roman No9 L',
  'Arial Black',
  'Sylfaen',
  'MV Boli',
  'Estrangelo Edessa',
  'DejaVu Sans',
  'Liberation Sans',
  'Hiragino Sans GB',
  'Source Han Sans CN Normal',
  'Microsoft YaHei',
  'Wenquanyi Micro Hei',
  'WenQuanYi Zen Hei',
  'ST Heiti',
  'SimHei',
  'WenQuanYi Zen Hei Sharp'
]

/**
 * Factory for probe to get (incomplete) list of available fonts
 *
 * @returns {Function}
 */

const factory = (opts = {}) => {
  const { fonts = FONT_LIST } = opts

  const compile = tbl => {
    const list = []

    for (let i = 0; i < tbl.length; i++) {
      if (tbl[i]) {
        list.push(fonts[i])
      }
    }

    return list
  }

  return function FontList () {
    const detector = new FontDetector()

    const detect = (resolve, reject) => {
      const callback = (err, res) =>
        err
          ? reject(err)
          : resolve(compile(res))

      detector.detect(fonts, callback)
    }

    return new Promise(detect)
  }
}

// expose factory

module.exports = factory

// expose base font names

module.exports.fonts = FONT_LIST


/***/ }),

/***/ "./src/Probes/TimezoneOffset.js":
/*!**************************************!*\
  !*** ./src/Probes/TimezoneOffset.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Factory for probe to get timezone offset
 *
 * @returns {Function}
 */

const factory = () => {
  function TimezoneOffset () {
    return new Date().getTimezoneOffset()
  }

  return TimezoneOffset
}

// expose factory

module.exports = factory


/***/ }),

/***/ "./src/Probes/UserAgent.js":
/*!*********************************!*\
  !*** ./src/Probes/UserAgent.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Factory for probe to get User Agent
 *
 * @returns {Function}
 */

const factory = () => {
  function UserAgent () {
    return window.navigator.userAgent
  }

  return UserAgent
}

// expose factory

module.exports = factory


/***/ }),

/***/ "./src/Probes/index.js":
/*!*****************************!*\
  !*** ./src/Probes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.UserAgent = __webpack_require__(/*! ./UserAgent */ "./src/Probes/UserAgent.js")
module.exports.TimezoneOffset = __webpack_require__(/*! ./TimezoneOffset */ "./src/Probes/TimezoneOffset.js")
module.exports.FontList = __webpack_require__(/*! ./FontList */ "./src/Probes/FontList.js")


/***/ }),

/***/ "./src/encode.js":
/*!***********************!*\
  !*** ./src/encode.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// as Java's hashCode

const hashFromText = text => {
  let hash = 0

  if (text.length === 0) return hash

  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i)

    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }

  return hash
}

// 32 bit number to uniform hex string

const hashToHex = n => {
  let hex = n.toString(16)

  // max 32 bit hex `7FFFFFFF` (for 2147483647)
  const maxLength = 8

  while (hex.length < maxLength) {
    hex = '0' + hex
  }

  return hex
}

//

function encode (text) {
  return hashToHex(hashFromText((text)))
}

module.exports = encode


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.Probes = __webpack_require__(/*! ./Probes */ "./src/Probes/index.js")
module.exports.Agent = __webpack_require__(/*! ./Agent */ "./src/Agent.js")


/***/ }),

/***/ "./src/serialize.js":
/*!**************************!*\
  !*** ./src/serialize.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = data => JSON.stringify(data)


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JZGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lkZW0vLi9ub2RlX21vZHVsZXMvZm9udC1kZXRlY3QvZm9udC1kZXRlY3QtY21kLmpzIiwid2VicGFjazovL0lkZW0vLi9zcmMvQWdlbnQuanMiLCJ3ZWJwYWNrOi8vSWRlbS8uL3NyYy9Qcm9iZXMvRm9udExpc3QuanMiLCJ3ZWJwYWNrOi8vSWRlbS8uL3NyYy9Qcm9iZXMvVGltZXpvbmVPZmZzZXQuanMiLCJ3ZWJwYWNrOi8vSWRlbS8uL3NyYy9Qcm9iZXMvVXNlckFnZW50LmpzIiwid2VicGFjazovL0lkZW0vLi9zcmMvUHJvYmVzL2luZGV4LmpzIiwid2VicGFjazovL0lkZW0vLi9zcmMvZW5jb2RlLmpzIiwid2VicGFjazovL0lkZW0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSWRlbS8uL3NyYy9zZXJpYWxpemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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Ozs7QUN0Q0Esd0JBQXdCLG1CQUFPLENBQUMsdUNBQVU7QUFDMUMsdUJBQXVCLG1CQUFPLENBQUMsK0JBQVM7Ozs7Ozs7Ozs7OztBQ0R4QyIsImZpbGUiOiJJZGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBGb250RGV0ZWN0b3IsIHdvZmYsXG4gICAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuICB3b2ZmID0gXCJkYXRhOmZvbnQvd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUms5VVZFOEFBQVFZQUFvQUFBQUFCbHdBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkRSa1lnQUFBQTlBQUFBTVFBQUFEU0VRZ2E4VVpHVkUwQUFBRzRBQUFBR3dBQUFCeHFRSkdOVDFNdk1nQUFBZFFBQUFCREFBQUFZRllQWGZCamJXRndBQUFDR0FBQUFEY0FBQUZDQUEwRDFtaGxZV1FBQUFKUUFBQUFLUUFBQURiOUlUQlhhR2hsWVFBQUFud0FBQUFaQUFBQUpBTjcvenRvYlhSNEFBQUNtQUFBQUFnQUFBQUlBZlFBQUcxaGVIQUFBQUtnQUFBQUJnQUFBQVlBQWxBQWJtRnRaUUFBQXFnQUFBRlpBQUFDamthV1plWndiM04wQUFBRUJBQUFBQk1BQUFBZy80WUFNbmljWTJSZ1lXRmdaR1RrQ3MwcnlTekpTVTB4WkdCa1ltQmswUGpCei9CRG12R0hETk1QV2VZZjRpemRRTUFxdzdDSVg0YUJRVUNHWWFtZ0RBTzdETU5wSVFabWtHb1hCbCtHTU9laTFNU1MxQlNGcEVxRnF0UzhmQ0JPMTlIUlVTalBMTWxRY012UEszSExMMHBQVlREU00xRFF5Q2dwS2JEUzEwOERpcWFCUlBXSzAvVHlVa3MwNFk1QXVBWUlCQm1ZR0JrVkZMdjMvbkRkeTdoMzcrK1l2Y3g3eGRSL3JIelB0dmRQdWVnUDE5OHhmMXpaK2ZpNlJicEZ1M200QU55YlAvVjRuR05nWUdCa0FJSXp0b3ZPZytqempPVjJVTG9lQUVNT0JjY0FlSnhqWUdIOHd2aUZnWldCZ2FtTGFROERBME1QaEdaOHdHREl5QVFVWldCalpvQUJSZ1lrRUpEbW1zSndnTUdBd1lCWjRiOEZReFNHR2dVZ1pBUUFmbVFLcWdCNG5HTmdZR0JtZ0dBWkJrWUdFTEFCOGhqQmZCWUdCU0ROQW9RZ3ZzSC8veER5LzBXb1NnWkdOZ1lZazJoQXF2ckJEZ0JyQVFiakFIaWNZMkJrWUdBQTRweXMzb3g0ZnB1dkROek1MNEFpRE9jWnkzY2kwMURBd2NBRW9nQVU0Z2h0QUFBQWVKeGpZR1JnWUZiNGI4RVF4UUFEakF5b2dBa0FNbElCdVFBQUFBSDBBQUFBQUFBQUFBQlFBQUFDQUFCNG5JV1F6VW9ETVJTRlQrd1BGRVNrVDVDTlVHRW16WlJ1T2x1aEM4V2wzYmRNcGgyb21UcE5LZTFlY2VlYkNMNkNhOWV1WGZzRTd2VE1OQlJFc0JPUys5MlRNemMzQVhDQ1p3anN2Z3M4ZWhabzRjUHpFWnI0OGx6RG1ianlYRWRMM0h0dTRGUzhlRzVTZjZkVDFGdk1IcXEvU2habzQ4M3pFWTd4NmJtR1MzeDdycU10N2p3M0lNV1Q1eWIxVi9aWHdHQU14eldCeEFRYnJsdG1Gcm1QVXdUVmtGZ2pvM05HR25MWGtzdFkwR0dvOWFDZ0dUdDBPSTRGWW5RNVV1OU45MTZGSlRORjFWQS81ek1WWnV4TUlpY2J1VFUyNTV3R1FTRFhtWnZKWVc3ZE1DK21SdmFVbHAyWmM0dTQyMDJwcHFXcWxxbXl4ckhJVFhWSzJlRzh1azFFeWJyTXpVMUN2SzYwREN2Y01qRkp0bUw4N3hveDU5K1NPejNDQUNIWGtHN04yR2VwWDIzR2NuODBPUnFFVWRqVFVmOVFreU5xQlI4bnEvcVNyRjFXVjFVc2U4TElGTXNzdDFMclNHbXQ1WUdDUC95emNjMEFBQUI0bkdOZ1pnQ0QvODBNUmd4WUFBQW9SQUc0QUE9PVwiO1xuXG4gIEZvbnREZXRlY3RvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBGb250RGV0ZWN0b3Iob3B0cykge1xuICAgICAgdGhpcy5yZWFkeSA9IF9fYmluZCh0aGlzLnJlYWR5LCB0aGlzKTtcbiAgICAgIHZhciBzcmM7XG4gICAgICBzcmMgPSBcInNyYzogdXJsKFwiICsgd29mZiArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcIjtcbiAgICAgIHRoaXMuY3NzID0gXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGZvbnQtZGV0ZWN0LTAtd29mZjtcXG4gICAgXCIgKyBzcmMgKyBcIlxcbn1cXG4jZm9udC1kZXRlY3QtdGVzdC1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG59XCI7XG4gICAgfVxuXG4gICAgRm9udERldGVjdG9yLnByb3RvdHlwZS5pbmplY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtLCBoZWFkLCBzaGVldDtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1kZXRlY3QtdGVzdC1ibG9jaycpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW0uaWQgPSAnZm9udC1kZXRlY3QtdGVzdC1ibG9jayc7XG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gJzAnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgfVxuICAgICAgc2hlZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1kZXRlY3Qtc3R5bGVzJyk7XG4gICAgICBpZiAoc2hlZXQgPT0gbnVsbCkge1xuICAgICAgICBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHNoZWV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzaGVldC5pZCA9ICdmb250LWRldGVjdC1zdHlsZXMnO1xuICAgICAgICBzaGVldC5pbm5lckhUTUwgPSB0aGlzLmNzcztcbiAgICAgICAgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHJldHVybiBoZWFkLmFwcGVuZENoaWxkKHNoZWV0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRm9udERldGVjdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtLCBzaGVldDtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1kZXRlY3QtdGVzdC1ibG9jaycpO1xuICAgICAgaWYgKGVsZW0gIT0gbnVsbCkge1xuICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgc2hlZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1kZXRlY3Qtc3R5bGVzJyk7XG4gICAgICBpZiAoc2hlZXQgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc2hlZXQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEZvbnREZXRlY3Rvci5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgdmFyIGVsZW07XG4gICAgICB0aGlzLmluamVjdCgpO1xuICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250LWRldGVjdC10ZXN0LWJsb2NrJyk7XG4gICAgICBlbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSAnZm9udC1kZXRlY3QtMC13b2ZmJztcbiAgICAgIGlmIChlbGVtLmNsaWVudFdpZHRoID4gMCkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlYWR5KGNhbGxiYWNrKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSksIDUwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBGb250RGV0ZWN0b3IucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uKGZvbnRzLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZHkoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZWxlbSwgZXJyLCBmb250LCByZXN1bHRzLCBfaSwgX2xlbjtcbiAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnQtZGV0ZWN0LXRlc3QtYmxvY2snKTtcbiAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBmb250cy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgZm9udCA9IGZvbnRzW19pXTtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZm9udEZhbWlseSA9IFwiJ1wiICsgZm9udCArIFwiJywgZm9udC1kZXRlY3QtMC13b2ZmXCI7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbS5jbGllbnRXaWR0aCA+IDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnIgPSBudWxsO1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRm9udERldGVjdG9yO1xuXG4gIH0pKCk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBGb250RGV0ZWN0b3I7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJjb25zdCBQcm9iZXMgPSByZXF1aXJlKCcuL1Byb2JlcycpXG5cbmNvbnN0IHNlcmlhbGl6ZSA9IHJlcXVpcmUoJy4vc2VyaWFsaXplJylcbmNvbnN0IGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJylcblxuZnVuY3Rpb24gQWdlbnQgKCkge1xuICAvLyB1c2Ugdy9vIGBuZXdgIGtleXdvcmRcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEFnZW50KSkge1xuICAgIHJldHVybiBuZXcgQWdlbnQoKVxuICB9XG5cbiAgY29uc3QgcHJvYmVzID0ge31cblxuICBmb3IgKGNvbnN0IG5hbWUgaW4gUHJvYmVzKSB7XG4gICAgY29uc3QgbWFrZSA9IFByb2Jlc1tuYW1lXVxuICAgIHByb2Jlc1tuYW1lXSA9IG1ha2UoKVxuICB9XG5cbiAgdGhpcy5wcm9iZXMgPSBwcm9iZXNcblxuICByZXR1cm4gdGhpc1xufVxuXG5BZ2VudC5wcm90b3R5cGUuZGV0ZWN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb2JlcyB9ID0gdGhpc1xuXG4gIGNvbnN0IGRhdGEgPSB7fVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHByb2Jlcykge1xuICAgIGNvbnN0IHByb2JlID0gcHJvYmVzW2tleV1cblxuICAgIGRhdGFba2V5XSA9IGF3YWl0IHByb2JlKClcbiAgfVxuXG4gIGNvbnN0IGlkID0gZW5jb2RlKHNlcmlhbGl6ZShkYXRhKSlcblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGRhdGFcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFnZW50XG5cbm1vZHVsZS5leHBvcnRzLmVuY29kZSA9IGVuY29kZVxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplXG4iLCJjb25zdCBGb250RGV0ZWN0b3IgPSByZXF1aXJlKCdmb250LWRldGVjdCcpXG5cbi8vIGluY29tcGxldGUgbGlzdCBvZiBwb3B1bGFyIGZvbnRzXG5jb25zdCBGT05UX0xJU1QgPSBbXG4gICdIZWx2ZXRpY2EnLFxuICAnTHVjaWRhIEdyYW5kZScsXG4gICdMdWNpZGEgU2FucycsXG4gICdUYWhvbWEnLFxuICAnQXJpYWwnLFxuICAnR2VuZXZhJyxcbiAgJ01vbmFjbycsXG4gICdWZXJkYW5hJyxcbiAgJ01pY3Jvc29mdCBTYW5zIFNlcmlmJyxcbiAgJ1RyZWJ1Y2hldCBNUycsXG4gICdDb3VyaWVyIE5ldycsXG4gICdUaW1lcyBOZXcgUm9tYW4nLFxuICAnQ291cmllcicsXG4gICdMdWNpZGEgQnJpZ2h0JyxcbiAgJ0x1Y2lkYSBTYW5zIFR5cGV3cml0ZXInLFxuICAnVVJXIENoYW5jZXJ5IEwnLFxuICAnQ29taWMgU2FucyBNUycsXG4gICdHZW9yZ2lhJyxcbiAgJ1BhbGF0aW5vIExpbm90eXBlJyxcbiAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxuICAnVGltZXMnLFxuICAnQ2VudHVyeSBTY2hvb2xib29rIEwnLFxuICAnVVJXIEdvdGhpYyBMJyxcbiAgJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLFxuICAnTHVjaWRhIENvbnNvbGUnLFxuICAnSW1wYWN0JyxcbiAgJ1VSVyBCb29rbWFuIEwnLFxuICAnSGVsdmV0aWNhIE5ldWUnLFxuICAnTmltYnVzIFNhbnMgTCcsXG4gICdVUlcgUGFsbGFkaW8gTCcsXG4gICdOaW1idXMgTW9ubyBMJyxcbiAgJ05pbWJ1cyBSb21hbiBObzkgTCcsXG4gICdBcmlhbCBCbGFjaycsXG4gICdTeWxmYWVuJyxcbiAgJ01WIEJvbGknLFxuICAnRXN0cmFuZ2VsbyBFZGVzc2EnLFxuICAnRGVqYVZ1IFNhbnMnLFxuICAnTGliZXJhdGlvbiBTYW5zJyxcbiAgJ0hpcmFnaW5vIFNhbnMgR0InLFxuICAnU291cmNlIEhhbiBTYW5zIENOIE5vcm1hbCcsXG4gICdNaWNyb3NvZnQgWWFIZWknLFxuICAnV2VucXVhbnlpIE1pY3JvIEhlaScsXG4gICdXZW5RdWFuWWkgWmVuIEhlaScsXG4gICdTVCBIZWl0aScsXG4gICdTaW1IZWknLFxuICAnV2VuUXVhbllpIFplbiBIZWkgU2hhcnAnXG5dXG5cbi8qKlxuICogRmFjdG9yeSBmb3IgcHJvYmUgdG8gZ2V0IChpbmNvbXBsZXRlKSBsaXN0IG9mIGF2YWlsYWJsZSBmb250c1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuXG5jb25zdCBmYWN0b3J5ID0gKG9wdHMgPSB7fSkgPT4ge1xuICBjb25zdCB7IGZvbnRzID0gRk9OVF9MSVNUIH0gPSBvcHRzXG5cbiAgY29uc3QgY29tcGlsZSA9IHRibCA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRibC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRibFtpXSkge1xuICAgICAgICBsaXN0LnB1c2goZm9udHNbaV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBGb250TGlzdCAoKSB7XG4gICAgY29uc3QgZGV0ZWN0b3IgPSBuZXcgRm9udERldGVjdG9yKClcblxuICAgIGNvbnN0IGRldGVjdCA9IChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGVyciwgcmVzKSA9PlxuICAgICAgICBlcnJcbiAgICAgICAgICA/IHJlamVjdChlcnIpXG4gICAgICAgICAgOiByZXNvbHZlKGNvbXBpbGUocmVzKSlcblxuICAgICAgZGV0ZWN0b3IuZGV0ZWN0KGZvbnRzLCBjYWxsYmFjaylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZGV0ZWN0KVxuICB9XG59XG5cbi8vIGV4cG9zZSBmYWN0b3J5XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVxuXG4vLyBleHBvc2UgYmFzZSBmb250IG5hbWVzXG5cbm1vZHVsZS5leHBvcnRzLmZvbnRzID0gRk9OVF9MSVNUXG4iLCIvKipcbiAqIEZhY3RvcnkgZm9yIHByb2JlIHRvIGdldCB0aW1lem9uZSBvZmZzZXRcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxuY29uc3QgZmFjdG9yeSA9ICgpID0+IHtcbiAgZnVuY3Rpb24gVGltZXpvbmVPZmZzZXQgKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgfVxuXG4gIHJldHVybiBUaW1lem9uZU9mZnNldFxufVxuXG4vLyBleHBvc2UgZmFjdG9yeVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcbiIsIi8qKlxuICogRmFjdG9yeSBmb3IgcHJvYmUgdG8gZ2V0IFVzZXIgQWdlbnRcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxuY29uc3QgZmFjdG9yeSA9ICgpID0+IHtcbiAgZnVuY3Rpb24gVXNlckFnZW50ICgpIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgfVxuXG4gIHJldHVybiBVc2VyQWdlbnRcbn1cblxuLy8gZXhwb3NlIGZhY3RvcnlcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG4iLCJtb2R1bGUuZXhwb3J0cy5Vc2VyQWdlbnQgPSByZXF1aXJlKCcuL1VzZXJBZ2VudCcpXG5tb2R1bGUuZXhwb3J0cy5UaW1lem9uZU9mZnNldCA9IHJlcXVpcmUoJy4vVGltZXpvbmVPZmZzZXQnKVxubW9kdWxlLmV4cG9ydHMuRm9udExpc3QgPSByZXF1aXJlKCcuL0ZvbnRMaXN0JylcbiIsIi8vIGFzIEphdmEncyBoYXNoQ29kZVxuXG5jb25zdCBoYXNoRnJvbVRleHQgPSB0ZXh0ID0+IHtcbiAgbGV0IGhhc2ggPSAwXG5cbiAgaWYgKHRleHQubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNociA9IHRleHQuY2hhckNvZGVBdChpKVxuXG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyXG4gICAgaGFzaCB8PSAwIC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGhhc2hcbn1cblxuLy8gMzIgYml0IG51bWJlciB0byB1bmlmb3JtIGhleCBzdHJpbmdcblxuY29uc3QgaGFzaFRvSGV4ID0gbiA9PiB7XG4gIGxldCBoZXggPSBuLnRvU3RyaW5nKDE2KVxuXG4gIC8vIG1heCAzMiBiaXQgaGV4IGA3RkZGRkZGRmAgKGZvciAyMTQ3NDgzNjQ3KVxuICBjb25zdCBtYXhMZW5ndGggPSA4XG5cbiAgd2hpbGUgKGhleC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcbiAgICBoZXggPSAnMCcgKyBoZXhcbiAgfVxuXG4gIHJldHVybiBoZXhcbn1cblxuLy9cblxuZnVuY3Rpb24gZW5jb2RlICh0ZXh0KSB7XG4gIHJldHVybiBoYXNoVG9IZXgoaGFzaEZyb21UZXh0KCh0ZXh0KSkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlXG4iLCJtb2R1bGUuZXhwb3J0cy5Qcm9iZXMgPSByZXF1aXJlKCcuL1Byb2JlcycpXG5tb2R1bGUuZXhwb3J0cy5BZ2VudCA9IHJlcXVpcmUoJy4vQWdlbnQnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkYXRhID0+IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4iXSwic291cmNlUm9vdCI6IiJ9