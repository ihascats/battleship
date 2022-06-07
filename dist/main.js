/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/board.combat.js":
/*!********************************!*\
  !*** ./src/js/board.combat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_display_current__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.display-current */ \"./src/js/board.display-current.js\");\n\n\nfunction getChildElementIndex(node) {\n  return Array.prototype.indexOf.call(node.parentNode.children, node);\n}\n\nfunction checkSelectedSquare(opponent, coords) {\n  if ( // eslint-disable-next-line operator-linebreak\n  opponent.map.layout[coords[0]][coords[1]] !== false && opponent.map.layout[coords[0]][coords[1]] !== true) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction combat(player, cpu, playerBoard, cpuBoard, square) {\n  var elementNumber = getChildElementIndex(square);\n  var row = Math.floor(elementNumber / 10);\n  var column = elementNumber % 10;\n\n  if (checkSelectedSquare(cpu, [row, column])) {\n    player.attack([row, column]);\n    var cpuAttack = true;\n\n    while (cpuAttack) {\n      var cord0 = Math.floor(Math.random() * 10);\n      var cord1 = Math.floor(Math.random() * 10);\n\n      if (checkSelectedSquare(player, [cord0, cord1])) {\n        cpu.attack([cord0, cord1]);\n        cpuAttack = false;\n      }\n    }\n  }\n\n  (0,_board_display_current__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cpu, cpuBoard);\n  (0,_board_display_current__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player, playerBoard);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combat);\n\n//# sourceURL=webpack://linting/./src/js/board.combat.js?");

/***/ }),

/***/ "./src/js/board.display-current.js":
/*!*****************************************!*\
  !*** ./src/js/board.display-current.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayCurrentBoard(opponent, opponentBoard) {\n  for (var i = 0; i < 10; i += 1) {\n    for (var j = 0; j < 10; j += 1) {\n      if (opponent.map.layout[i][j] === true) {\n        opponentBoard.children.item(i * 10 + j).classList.add('hit');\n      }\n\n      if (opponent.map.layout[i][j] === false) {\n        opponentBoard.children.item(i * 10 + j).classList.add('miss');\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCurrentBoard);\n\n//# sourceURL=webpack://linting/./src/js/board.display-current.js?");

/***/ }),

/***/ "./src/js/board.generate.js":
/*!**********************************!*\
  !*** ./src/js/board.generate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateBoard() {\n  function createSquare() {\n    var square = document.createElement('div');\n    square.classList.add('square');\n    return square;\n  }\n\n  var board = document.querySelectorAll('.board');\n  board.forEach(function (element) {\n    for (var i = 0; i < 100; i += 1) {\n      element.appendChild(createSquare());\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateBoard);\n\n//# sourceURL=webpack://linting/./src/js/board.generate.js?");

/***/ }),

/***/ "./src/js/board.randomize-on-load.js":
/*!*******************************************!*\
  !*** ./src/js/board.randomize-on-load.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction randomOnLoad(player, cpu) {\n  var board = document.querySelector('.board');\n  cpu.randomlyPlaceShips();\n  cpu.randomlyPlaceShips();\n  player.randomlyPlaceShips();\n\n  for (var i = 0; i < 10; i += 1) {\n    for (var j = 0; j < 10; j += 1) {\n      if (typeof player.map.layout[i][j] === 'number') {\n        board.children.item(i * 10 + j).classList.add('ship');\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomOnLoad);\n\n//# sourceURL=webpack://linting/./src/js/board.randomize-on-load.js?");

/***/ }),

/***/ "./src/js/board.randomize.js":
/*!***********************************!*\
  !*** ./src/js/board.randomize.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction randomizeButton(player) {\n  var board = document.querySelector('.board');\n  player.randomlyPlaceShips();\n  board.childNodes.forEach(function (element) {\n    var square = element;\n    square.classList.remove('ship');\n  });\n\n  for (var i = 0; i < 10; i += 1) {\n    for (var j = 0; j < 10; j += 1) {\n      if (typeof player.map.layout[i][j] === 'number') {\n        board.children.item(i * 10 + j).classList.add('ship');\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomizeButton);\n\n//# sourceURL=webpack://linting/./src/js/board.randomize.js?");

/***/ }),

/***/ "./src/js/board.reset.js":
/*!*******************************!*\
  !*** ./src/js/board.reset.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction resetBoards() {\n  var boards = document.querySelectorAll('.board');\n  boards.forEach(function (board) {\n    for (var i = 0; i < 10; i += 1) {\n      for (var j = 0; j < 10; j += 1) {\n        board.children.item(i * 10 + j).removeAttribute('class');\n        board.children.item(i * 10 + j).classList.add('square');\n      }\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetBoards);\n\n//# sourceURL=webpack://linting/./src/js/board.reset.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _board_combat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.combat */ \"./src/js/board.combat.js\");\n/* harmony import */ var _board_generate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.generate */ \"./src/js/board.generate.js\");\n/* harmony import */ var _board_randomize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.randomize */ \"./src/js/board.randomize.js\");\n/* harmony import */ var _board_randomize_on_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board.randomize-on-load */ \"./src/js/board.randomize-on-load.js\");\n/* harmony import */ var _board_reset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board.reset */ \"./src/js/board.reset.js\");\n/* harmony import */ var _player_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.constructor */ \"./src/js/player.constructor.js\");\n\n\n\n\n\n\n\n(0,_board_generate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar cpu = new _player_constructor__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nvar player = new _player_constructor__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nvar cpuBoard = document.querySelector('#opponent');\nvar playerBoard = document.querySelector('.board');\n\nwindow.onload = function () {\n  return (0,_board_randomize_on_load__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(player, cpu);\n};\n\ncpu.designateOpponent(player);\nplayer.designateOpponent(cpu);\nvar startButton = document.querySelector('#start');\nvar resetButton = document.querySelector('#reset');\nvar randomize = document.querySelector('.randomize');\n\nstartButton.onclick = function () {\n  randomize.onclick = null;\n  randomize.classList.add('disableRandomize');\n\n  cpuBoard.onclick = function (e) {\n    var square = e.target.closest('.square');\n    if (!square || square === null) return;\n    (0,_board_combat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player, cpu, playerBoard, cpuBoard, square);\n  };\n};\n\nresetButton.onclick = function () {\n  cpuBoard.onclick = null;\n  player.map.resetMap();\n  cpu.map.resetMap();\n  (0,_board_reset__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_board_randomize_on_load__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(player, cpu);\n\n  randomize.onclick = function () {\n    (0,_board_randomize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player);\n  };\n\n  randomize.classList.remove('disableRandomize'); //\n};\n\nrandomize.onclick = function () {\n  (0,_board_randomize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player);\n};\n\n//# sourceURL=webpack://linting/./src/js/index.js?");

/***/ }),

/***/ "./src/js/map.constructor.js":
/*!***********************************!*\
  !*** ./src/js/map.constructor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.constructor */ \"./src/js/ship.constructor.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Map = /*#__PURE__*/function () {\n  function Map() {\n    _classCallCheck(this, Map);\n\n    this.layout = [[null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null]];\n    var carrier = new _ship_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 0);\n    var battleship = new _ship_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 1);\n    var cruiser = new _ship_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 2);\n    var submarine = new _ship_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3);\n    var destroyer = new _ship_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 4);\n    this.ships = [carrier, battleship, cruiser, submarine, destroyer];\n  }\n\n  _createClass(Map, [{\n    key: \"cloneMap\",\n    value: function cloneMap(ship) {\n      var mapLayoutCopy = JSON.parse(JSON.stringify(this.layout));\n      var layoutWithoutSelectedShip = mapLayoutCopy.map(function (secondArray) {\n        return (// eslint-disable-next-line implicit-arrow-linebreak\n          secondArray.map(function (item) {\n            var result = item;\n\n            if (item === ship.id) {\n              result = null;\n            }\n\n            if (Array.isArray(result)) {\n              if (result.includes(ship.id)) {\n                var index = result.indexOf(ship.id);\n\n                if (index !== -1) {\n                  result.splice(index, 1);\n                }\n              }\n            }\n\n            if (Array.isArray(result)) {\n              if (!result.length) {\n                result = null;\n              }\n            }\n\n            return result;\n          })\n        );\n      } // eslint-disable-next-line function-paren-newline\n      );\n      return layoutWithoutSelectedShip;\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"verifyPlacement\",\n    value: function verifyPlacement(ship, coordinates, verificationLayout) {\n      var verification = true;\n      ship.foresight(coordinates[0], coordinates[1]).forEach(function (item) {\n        var row = item[0];\n        var col = item[1];\n\n        if (verificationLayout[row][col] !== null) {\n          // eslint-disable-next-line no-useless-return\n          verification = false;\n        }\n      });\n      return verification;\n    }\n  }, {\n    key: \"positionShip\",\n    value: function positionShip(ship, coordinates) {\n      var _this = this;\n\n      var layoutWithoutSelectedShip = this.cloneMap(ship);\n      var canPlaceShip = this.verifyPlacement(ship, coordinates, layoutWithoutSelectedShip);\n      if (!canPlaceShip) return;\n      this.layout = JSON.parse(JSON.stringify(layoutWithoutSelectedShip));\n      ship.move(coordinates[0], coordinates[1]);\n      ship.gridPositions.forEach(function (item) {\n        var row = item[0];\n        var col = item[1];\n        _this.layout[row][col] = ship.id;\n      });\n      var startRow = ship.gridPositions[0][0] - 1;\n      var startCol = ship.gridPositions[0][1] - 1;\n      var endRow = ship.gridPositions[ship.gridPositions.length - 1][0] + 1;\n      var endCol = ship.gridPositions[ship.gridPositions.length - 1][1] + 1;\n\n      for (var i = startRow; i <= endRow; i += 1) {\n        for (var j = startCol; j <= endCol; j += 1) {\n          if (i >= 0 && i < 10 && j >= 0 && j < 10) {\n            if (Array.isArray(this.layout[i][j])) {\n              this.layout[i][j].push(ship.id);\n            }\n\n            if (this.layout[i][j] === null) {\n              this.layout[i][j] = [ship.id];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"rotateShip\",\n    value: function rotateShip(ship) {\n      var verificationLayout = this.cloneMap(ship);\n      ship.changeOrientation();\n      var canPlaceShip = this.verifyPlacement(ship, ship.originPosition, verificationLayout);\n\n      if (!canPlaceShip) {\n        ship.changeOrientation();\n        return;\n      }\n\n      this.positionShip(ship, ship.originPosition);\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(coordinates) {\n      if ( // eslint-disable-next-line operator-linebreak\n      this.layout[coordinates[0]][coordinates[1]] === null || Array.isArray(this.layout[coordinates[0]][coordinates[1]])) {\n        this.layout[coordinates[0]][coordinates[1]] = false;\n        return;\n      }\n\n      var hitShipId;\n\n      if (!Number.isNaN(this.layout[coordinates[0]][coordinates[1]])) {\n        hitShipId = this.layout[coordinates[0]][coordinates[1]];\n        this.layout[coordinates[0]][coordinates[1]] = true;\n      }\n\n      var isHitShipDestroyed = true;\n\n      for (var i = 0; i < 10; i += 1) {\n        for (var j = 0; j < 10; j += 1) {\n          if (this.layout[i][j] === hitShipId) {\n            isHitShipDestroyed = false;\n          }\n        }\n      }\n\n      if (isHitShipDestroyed) {\n        for (var _i = 0; _i < 10; _i += 1) {\n          for (var _j = 0; _j < 10; _j += 1) {\n            if (Array.isArray(this.layout[_i][_j])) {\n              if (this.layout[_i][_j].includes(hitShipId)) {\n                this.layout[_i][_j] = false;\n              }\n            }\n          }\n        }\n      } //\n      //\n\n    }\n  }, {\n    key: \"allShipsDestroyed\",\n    value: function allShipsDestroyed() {\n      var numberOfTrueStatements = 0;\n\n      for (var i = 0; i < 10; i += 1) {\n        for (var j = 0; j < 10; j += 1) {\n          if (this.layout[i][j] === true) {\n            numberOfTrueStatements += 1;\n          }\n        }\n      }\n\n      if (numberOfTrueStatements === 17) {\n        return true;\n      }\n\n      return false; //\n    }\n  }, {\n    key: \"resetMap\",\n    value: function resetMap() {\n      this.layout = [[null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null]];\n    }\n  }]);\n\n  return Map;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);\n\n//# sourceURL=webpack://linting/./src/js/map.constructor.js?");

/***/ }),

/***/ "./src/js/player.constructor.js":
/*!**************************************!*\
  !*** ./src/js/player.constructor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _map_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.constructor */ \"./src/js/map.constructor.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.map = new _map_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.opponent = null;\n  }\n\n  _createClass(Player, [{\n    key: \"designateOpponent\",\n    value: function designateOpponent(opponent) {\n      this.opponent = opponent;\n    }\n  }, {\n    key: \"attack\",\n    value: function attack(coordinates) {\n      this.opponent.map.receiveAttack(coordinates);\n    }\n  }, {\n    key: \"allShipsPlaced\",\n    value: function allShipsPlaced() {\n      var layout = this.map.layout;\n      var shipIds = [0, 1, 2, 3, 4];\n\n      for (var i = 0; i < 10; i += 1) {\n        for (var j = 0; j < 10; j += 1) {\n          if (!Number.isNaN(layout[i][j])) {\n            if (shipIds.includes(layout[i][j])) {\n              var index = shipIds.indexOf(layout[i][j]);\n\n              if (index !== -1) {\n                shipIds.splice(index, 1);\n              }\n            }\n          }\n        }\n      }\n\n      if (shipIds.length > 0) return false;\n      return true; //\n    }\n  }, {\n    key: \"randomlyPlaceShips\",\n    value: function randomlyPlaceShips() {\n      var shipIds = [0, 1, 2, 3, 4];\n\n      while (shipIds.length > 0) {\n        var layout = this.map.layout;\n        var notPlaced = true;\n\n        while (notPlaced) {\n          var coord0 = Math.floor(Math.random() * 10);\n          var coord1 = Math.floor(Math.random() * 10);\n          var coords = [coord0, coord1];\n          var ship = this.map.ships[shipIds[0]];\n\n          if (this.map.verifyPlacement(ship, coords, layout)) {\n            this.map.positionShip(ship, coords);\n            shipIds.shift();\n            notPlaced = false;\n          }\n\n          if (!this.map.verifyPlacement(ship, coords, layout)) {\n            ship.changeOrientation();\n\n            if (this.map.verifyPlacement(ship, coords, layout)) {\n              this.map.positionShip(ship, coords);\n              shipIds.shift();\n              notPlaced = false;\n            }\n          }\n        }\n      } //\n\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://linting/./src/js/player.constructor.js?");

/***/ }),

/***/ "./src/js/ship.constructor.js":
/*!************************************!*\
  !*** ./src/js/ship.constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/* eslint-disable consistent-return */\nvar Ship = /*#__PURE__*/function () {\n  function Ship(size, id) {\n    _classCallCheck(this, Ship);\n\n    this.size = size;\n    this.id = id;\n    this.orientation = true;\n    this.originPosition = [0, 0];\n    this.gridPositions = []; // true === row length / horizontal\n    // false === column length / vertical\n  }\n\n  _createClass(Ship, [{\n    key: \"changeOrientation\",\n    value: function changeOrientation() {\n      this.orientation = !this.orientation;\n      this.move(this.originPosition[0], this.originPosition[1]);\n    }\n  }, {\n    key: \"move\",\n    value: function move(rowCoord, colCoord) {\n      var row = rowCoord;\n      var col = colCoord;\n\n      if (this.orientation) {\n        if (col > 10 - this.size) {\n          col = 10 - this.size;\n        }\n\n        var shipPositions = [];\n\n        for (var i = 0; i < this.size; i += 1) {\n          shipPositions.push([row, col + i]);\n        }\n\n        this.gridPositions = shipPositions;\n        this.originPosition = [row, col];\n        return shipPositions;\n      }\n\n      if (!this.orientation) {\n        if (row > 10 - this.size) {\n          row = 10 - this.size;\n        }\n\n        var _shipPositions = [];\n\n        for (var _i = 0; _i < this.size; _i += 1) {\n          _shipPositions.push([row + _i, col]);\n        }\n\n        this.gridPositions = _shipPositions;\n        this.originPosition = [row, col];\n        return _shipPositions;\n      }\n    }\n  }, {\n    key: \"foresight\",\n    value: function foresight(rowCoord, colCoord) {\n      var row = rowCoord;\n      var col = colCoord;\n\n      if (this.orientation) {\n        if (col > 10 - this.size) {\n          col = 10 - this.size;\n        }\n\n        var shipPotentialPosition = [];\n\n        for (var i = 0; i < this.size; i += 1) {\n          shipPotentialPosition.push([row, col + i]);\n        }\n\n        return shipPotentialPosition;\n      }\n\n      if (!this.orientation) {\n        if (row > 10 - this.size) {\n          row = 10 - this.size;\n        }\n\n        var _shipPotentialPosition = [];\n\n        for (var _i2 = 0; _i2 < this.size; _i2 += 1) {\n          _shipPotentialPosition.push([row + _i2, col]);\n        }\n\n        return _shipPotentialPosition;\n      }\n    }\n  }]);\n\n  return Ship;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://linting/./src/js/ship.constructor.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/img/target.png */ \"./src/img/target.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Kdam Thmor Pro', 'Ubuntu', 'Roboto', -apple-system,\\n    BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-rows: auto 1fr;\\n  width: 100vw;\\n  height: 100vh;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\nheader > h1 {\\n  letter-spacing: 2px;\\n}\\n\\n.game {\\n  width: 100%;\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr min-content 1fr;\\n  align-content: center;\\n}\\n\\n.game > section {\\n  height: 100%;\\n}\\n\\nfooter > h5 > a {\\n  color: black;\\n}\\n\\n.half {\\n  height: 100%;\\n  display: grid;\\n  align-items: center;\\n  justify-content: center;\\n  align-content: center;\\n}\\n\\n.board {\\n  display: grid;\\n  grid-template-columns: repeat(10, min-content);\\n  border-top: 1px solid #0000005e;\\n  border-left: 1px solid #0000005e;\\n  width: fit-content;\\n}\\n\\n.square {\\n  height: 47px;\\n  width: 47px;\\n  border-bottom: 1px solid #0000005e;\\n  border-right: 1px solid #0000005e;\\n}\\n\\n.controls {\\n  text-align: end;\\n}\\n\\n.randomize {\\n  cursor: pointer;\\n  color: #005eb1;\\n  user-select: none;\\n}\\n\\n.disableRandomize {\\n  cursor: not-allowed;\\n  color: #005eb179 !important;\\n}\\n\\n.hit {\\n  background-color: #ff000061;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n.half:first-child > .board > .hit {\\n  background-color: #64112454 !important;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n.miss {\\n  background-color: #0c202661;\\n}\\n\\n.pad {\\n  visibility: hidden;\\n}\\n\\n.gameControls > button {\\n  width: 96px;\\n  border: none;\\n  height: 32px;\\n  font-size: 13px;\\n}\\n\\n.gameControls > button:hover {\\n  width: 96px;\\n  border: none;\\n  height: 32px;\\n  font-size: 12px;\\n  background-color: #b4b4b4;\\n}\\n\\n.gameControls > button:active {\\n  width: 96px;\\n  border: none;\\n  height: 32px;\\n  font-size: 11px;\\n  background-color: #f7f7f7;\\n}\\n\\n.ship {\\n  background-color: #507493;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://linting/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://linting/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://linting/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://linting/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://linting/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://linting/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/target.png":
/*!****************************!*\
  !*** ./src/img/target.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8092cc16e4664a056bc0.png\";\n\n//# sourceURL=webpack://linting/./src/img/target.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;