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

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = document.querySelector('.header');\n\nconst about = document.createElement(\"div\");\nabout.setAttribute('class', 'about');   \n\nconst about_container = document.createElement('div');\nabout_container.setAttribute('class', 'about_container');\n\nabout_container.innerHTML = \"Established in 2005, Smoking Mocha Café has since become an integral part of the community. What started as a small coffee corner grew into a cosy café, thanks to the overwhelming support of our loyal customers. Throughout the years, we've remained committed to excellence, consistently delivering an unparalleled coffee experience.\\\nOur journey began years ago when our founder, Sofia, fell in love with the aroma and complexity of coffee. She travelled the world, exploring coffee plantations and learning from seasoned roasters and growers. Inspired by this passion, he set out to create a haven where coffee lovers could indulge in the finest brews.\\\nOur café is more than just a place to grab a drink; it's a haven where you can unwind and savour the moments. Our cosy seating, ambient lighting, and tranquil atmosphere create the perfect setting to catch up with friends, read a book, or simply enjoy your own company.\\\nCome, be a part of the Smoking Mocha family, and let us take you on a journey of aromatic flavors and warm moments. We look forward to serving you and making your time at Smoking Mocha Café truly unforgettable.\"\n\nconst about_span = document.createElement('span');\nabout_span.innerHTML = \"Visit us today and experience the magic of Smoking Mocha!\";\n\nabout_container.appendChild(about_span);\nabout.appendChild(about_container);\n\n\nfunction loadAbout(){\n    header.insertAdjacentElement(\"afterend\", about);\n    return about;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/aboutus.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst header = document.querySelector('.header');\n\nconst home = document.createElement('div');\nhome.setAttribute('class', 'home');\n\nconst home_container = document.createElement('div');\nhome_container.setAttribute('id', 'home_container')\n\nhome.appendChild(home_container);\n\nconst quoteBox = document.createElement('div');\nquoteBox.setAttribute('class', 'quoteBox');\n\nconst quote1 = document.createElement('div');\nquote1.setAttribute('id', 'quote1');\nquote1.innerHTML = \"Where coffee brews moments, and conversations percolate.\";\nquoteBox.appendChild(quote1);\n\nconst quote2 = document.createElement('div');\nquote2.setAttribute('id', 'quote2');\nquote2.innerHTML = \"Embrace the aroma, savor the flavors, create lasting memories.\";\nquoteBox.appendChild(quote2);\n\nhome_container.appendChild(quoteBox);\n\nconst showcase = document.createElement('div');\nshowcase.setAttribute('class', 'showcase');\n\nconst column1 = document.createElement('div');\ncolumn1.setAttribute('class', 'column')\nconst image1 = document.createElement('img');\nimage1.src = \"imgs/barista.jpg\"\nconst span1 = document.createElement('span');\nspan1.innerHTML = \"Customer Service, brewed with a smile.\"\ncolumn1.appendChild(image1);\ncolumn1.appendChild(span1);\nshowcase.appendChild(column1);\n\nconst column2 = document.createElement('div');\ncolumn2.setAttribute('class', 'column')\nconst image2 = document.createElement('img');\nimage2.src = \"imgs/cafe.jpg\"\nconst span2 = document.createElement('span');\nspan2.innerHTML = \"Ambience, for the Romantic in you.\"\ncolumn2.appendChild(image2);\ncolumn2.appendChild(span2);\nshowcase.appendChild(column2);\n\nconst column3 = document.createElement('div');\ncolumn3.setAttribute('class', 'column')\nconst image3 = document.createElement('img');\nimage3.src = \"imgs/coffee.jpg\"\nconst span3 = document.createElement('span');\nspan3.innerHTML = \"Coffee, to Heal your soul.\"\ncolumn3.appendChild(image3);\ncolumn3.appendChild(span3);\nshowcase.appendChild(column3);\n\nhome.appendChild(showcase)\n\nfunction loadHome(){\n    header.insertAdjacentElement(\"afterend\",home);\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _aboutus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus.js */ \"./src/aboutus.js\");\n\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst content = document.getElementById(\"content\");\n\nconst home_button = document.getElementById(\"home\");\nconst menu_button = document.getElementById(\"menu\");\nconst about_button = document.getElementById(\"about\");\n\nhome_button.onclick = () =>{\n    if ((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n    {\n        content.removeChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    }\n    if ((0,_aboutus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    {\n        content.removeChild((0,_aboutus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    }\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nmenu_button.onclick = () =>{\n    if((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()){\n        content.removeChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n    }\n    if ((0,_aboutus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    {\n        content.removeChild((0,_aboutus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    }\n\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\nabout_button.onclick = () =>{\n    if((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()){\n        content.removeChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n    }\n    if ((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n    {\n        content.removeChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n    }\n    (0,_aboutus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst header = document.querySelector('.header')\n\nconst menu = document.createElement('div');\nmenu.setAttribute('class', 'menu')\n\nfunction createMenuItem(imageSrc, name, price) {\n    const itemDiv = document.createElement(\"div\");\n    itemDiv.id = \"item\";\n\n    const image = document.createElement(\"img\");\n    image.src = imageSrc;\n    image.height = \"200\";\n    image.width = \"200\";\n\n    const productDiv = document.createElement(\"div\");\n    productDiv.classList.add(\"product\");\n\n    const nameSpan = document.createElement(\"span\");\n    nameSpan.textContent = name;\n\n    const priceDiv = document.createElement(\"div\");\n    priceDiv.id = \"price\";\n    priceDiv.textContent = price + \"/-\";\n\n    productDiv.appendChild(nameSpan);\n    productDiv.appendChild(priceDiv);\n\n    itemDiv.appendChild(image);\n    itemDiv.appendChild(productDiv);\n\n    return itemDiv;\n}\n\nfunction displayMenuItems() {\n    const menuGrid = document.createElement('div');\n    menuGrid.setAttribute('class', 'menuGrid');\n\n    const menuItems = [\n        {\n            imageSrc: \"imgs/menu/latte.png\",\n            name: \"Latte\",\n            price: \"175\"\n        },\n        {\n            imageSrc: \"imgs/menu/donut.png\",\n            name: \"Donut\",\n            price: \"125\"\n        },\n        {\n            imageSrc: \"imgs/menu/muffin.png\",\n            name: \"Muffin\",\n            price: \"90\"\n        },\n        {\n            imageSrc: \"imgs/menu/cappucino.png\",\n            name: \"Cappucino\",\n            price: \"175\"\n        },\n        {\n            imageSrc: \"imgs/menu/flat_white.png\",\n            name: \"Flat White\",\n            price: \"195\"\n        },\n        {\n            imageSrc: \"imgs/menu/espresso.png\",\n            name: \"Espresso\",\n            price: \"155\"\n        },\n        {\n            imageSrc: \"imgs/menu/americano.png\",\n            name: \"Americano\",\n            price: \"145\"\n        },\n        {\n            imageSrc: \"imgs/menu/tiramisu.png\",\n            name: \"Tiramisu\",\n            price: \"210\"\n        }\n    ];\n\n    menuItems.forEach(item => {\n        const menuItem = createMenuItem(item.imageSrc, item.name, item.price);\n        menuGrid.appendChild(menuItem);\n    });\n\n    return menuGrid;\n}\n\nconst menu_grid = displayMenuItems();\n\nmenu.appendChild(menu_grid);\n\nfunction loadMenu(){\n    header.insertAdjacentElement(\"afterend\", menu);\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;