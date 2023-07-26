/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.getElementById('content');
const header = document.querySelector('.header');

const home = document.createElement('div');
home.setAttribute('class', 'home');

const home_container = document.createElement('div');
home_container.setAttribute('id', 'home_container')

home.appendChild(home_container);

const quoteBox = document.createElement('div');
quoteBox.setAttribute('class', 'quoteBox');

const quote1 = document.createElement('div');
quote1.setAttribute('id', 'quote1');
quote1.innerHTML = "Where coffee brews moments, and conversations percolate.";
quoteBox.appendChild(quote1);

const quote2 = document.createElement('div');
quote2.setAttribute('id', 'quote2');
quote2.innerHTML = "Embrace the aroma, savor the flavors, create lasting memories.";
quoteBox.appendChild(quote2);

home_container.appendChild(quoteBox);

const showcase = document.createElement('div');
showcase.setAttribute('class', 'showcase');

const column1 = document.createElement('div');
column1.setAttribute('class', 'column')
const image1 = document.createElement('img');
image1.src = "imgs/barista.jpg"
const span1 = document.createElement('span');
span1.innerHTML = "Customer Service, brewed with a smile."
column1.appendChild(image1);
column1.appendChild(span1);
showcase.appendChild(column1);

const column2 = document.createElement('div');
column2.setAttribute('class', 'column')
const image2 = document.createElement('img');
image2.src = "imgs/cafe.jpg"
const span2 = document.createElement('span');
span2.innerHTML = "Ambience, for the Romantic in you."
column2.appendChild(image2);
column2.appendChild(span2);
showcase.appendChild(column2);

const column3 = document.createElement('div');
column3.setAttribute('class', 'column')
const image3 = document.createElement('img');
image3.src = "imgs/coffee.jpg"
const span3 = document.createElement('span');
span3.innerHTML = "Coffee, to Heal your soul."
column3.appendChild(image3);
column3.appendChild(span3);
showcase.appendChild(column3);

home.appendChild(showcase)

function loadHome(){
    header.insertAdjacentElement("afterend",home);
    return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.getElementById('content');
const header = document.querySelector('.header')

const menu = document.createElement('div');
menu.setAttribute('class', 'menu')

function createMenuItem(imageSrc, name, price) {
    const itemDiv = document.createElement("div");
    itemDiv.id = "item";

    const image = document.createElement("img");
    image.src = imageSrc;
    image.height = "200";
    image.width = "200";

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    const priceDiv = document.createElement("div");
    priceDiv.id = "price";
    priceDiv.textContent = price + "/-";

    productDiv.appendChild(nameSpan);
    productDiv.appendChild(priceDiv);

    itemDiv.appendChild(image);
    itemDiv.appendChild(productDiv);

    return itemDiv;
}

function displayMenuItems() {
    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('class', 'menuGrid');

    const menuItems = [
        {
            imageSrc: "imgs/menu/latte.png",
            name: "Latte",
            price: "175"
        },
        {
            imageSrc: "imgs/menu/donut.png",
            name: "Donut",
            price: "125"
        },
        {
            imageSrc: "imgs/menu/muffin.png",
            name: "Muffin",
            price: "90"
        },
        {
            imageSrc: "imgs/menu/cappucino.png",
            name: "Cappucino",
            price: "175"
        },
        {
            imageSrc: "imgs/menu/flat_white.png",
            name: "Flat White",
            price: "195"
        },
        {
            imageSrc: "imgs/menu/espresso.png",
            name: "Espresso",
            price: "155"
        },
        {
            imageSrc: "imgs/menu/americano.png",
            name: "Americano",
            price: "145"
        },
        {
            imageSrc: "imgs/menu/tiramisu.png",
            name: "Tiramisu",
            price: "210"
        }
    ];

    menuItems.forEach(item => {
        const menuItem = createMenuItem(item.imageSrc, item.name, item.price);
        menuGrid.appendChild(menuItem);
    });

    return menuGrid;
}

const menu_grid = displayMenuItems();

menu.appendChild(menu_grid);

function loadMenu(){
    header.insertAdjacentElement("afterend", menu);
    return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_js__WEBPACK_IMPORTED_MODULE_2__);




(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const content = document.getElementById("content");

const home_button = document.getElementById("home");
const menu_button = document.getElementById("menu");
const about_button = document.getElementById("about");

home_button.onclick = () =>{
    if ((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
    {
        content.removeChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }
    else if (_about_js__WEBPACK_IMPORTED_MODULE_2___default()())
    {
        content.removeChild(_about_js__WEBPACK_IMPORTED_MODULE_2___default()())
    }

    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

menu_button.onclick = () =>{
    if((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()){
        content.removeChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
    }
    else if (_about_js__WEBPACK_IMPORTED_MODULE_2___default()())
    {
        content.removeChild(_about_js__WEBPACK_IMPORTED_MODULE_2___default()())
    }

    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

about_button.onclick = () =>{
    _about_js__WEBPACK_IMPORTED_MODULE_2___default()();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDbEV2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNsR3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0E7QUFDRTs7QUFFbEMsb0RBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCO0FBQ0EsNEJBQTRCLG9EQUFRO0FBQ3BDO0FBQ0EsYUFBYSxnREFBUztBQUN0QjtBQUNBLDRCQUE0QixnREFBUztBQUNyQzs7QUFFQSxJQUFJLG9EQUFRO0FBQ1o7O0FBRUE7QUFDQSxPQUFPLG9EQUFRO0FBQ2YsNEJBQTRCLG9EQUFRO0FBQ3BDO0FBQ0EsYUFBYSxnREFBUztBQUN0QjtBQUNBLDRCQUE0QixnREFBUztBQUNyQzs7QUFFQSxJQUFJLG9EQUFRO0FBQ1o7O0FBRUE7QUFDQSxJQUFJLGdEQUFTO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvbWUnKTtcblxuY29uc3QgaG9tZV9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZV9jb250YWluZXInKVxuXG5ob21lLmFwcGVuZENoaWxkKGhvbWVfY29udGFpbmVyKTtcblxuY29uc3QgcXVvdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnF1b3RlQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncXVvdGVCb3gnKTtcblxuY29uc3QgcXVvdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5xdW90ZTEuc2V0QXR0cmlidXRlKCdpZCcsICdxdW90ZTEnKTtcbnF1b3RlMS5pbm5lckhUTUwgPSBcIldoZXJlIGNvZmZlZSBicmV3cyBtb21lbnRzLCBhbmQgY29udmVyc2F0aW9ucyBwZXJjb2xhdGUuXCI7XG5xdW90ZUJveC5hcHBlbmRDaGlsZChxdW90ZTEpO1xuXG5jb25zdCBxdW90ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnF1b3RlMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1b3RlMicpO1xucXVvdGUyLmlubmVySFRNTCA9IFwiRW1icmFjZSB0aGUgYXJvbWEsIHNhdm9yIHRoZSBmbGF2b3JzLCBjcmVhdGUgbGFzdGluZyBtZW1vcmllcy5cIjtcbnF1b3RlQm94LmFwcGVuZENoaWxkKHF1b3RlMik7XG5cbmhvbWVfY29udGFpbmVyLmFwcGVuZENoaWxkKHF1b3RlQm94KTtcblxuY29uc3Qgc2hvd2Nhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNob3djYXNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2hvd2Nhc2UnKTtcblxuY29uc3QgY29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29sdW1uMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbHVtbicpXG5jb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltYWdlMS5zcmMgPSBcImltZ3MvYmFyaXN0YS5qcGdcIlxuY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5zcGFuMS5pbm5lckhUTUwgPSBcIkN1c3RvbWVyIFNlcnZpY2UsIGJyZXdlZCB3aXRoIGEgc21pbGUuXCJcbmNvbHVtbjEuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbmNvbHVtbjEuYXBwZW5kQ2hpbGQoc3BhbjEpO1xuc2hvd2Nhc2UuYXBwZW5kQ2hpbGQoY29sdW1uMSk7XG5cbmNvbnN0IGNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbHVtbjIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb2x1bW4nKVxuY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWFnZTIuc3JjID0gXCJpbWdzL2NhZmUuanBnXCJcbmNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuc3BhbjIuaW5uZXJIVE1MID0gXCJBbWJpZW5jZSwgZm9yIHRoZSBSb21hbnRpYyBpbiB5b3UuXCJcbmNvbHVtbjIuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbmNvbHVtbjIuYXBwZW5kQ2hpbGQoc3BhbjIpO1xuc2hvd2Nhc2UuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG5cbmNvbnN0IGNvbHVtbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbHVtbjMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb2x1bW4nKVxuY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWFnZTMuc3JjID0gXCJpbWdzL2NvZmZlZS5qcGdcIlxuY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5zcGFuMy5pbm5lckhUTUwgPSBcIkNvZmZlZSwgdG8gSGVhbCB5b3VyIHNvdWwuXCJcbmNvbHVtbjMuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbmNvbHVtbjMuYXBwZW5kQ2hpbGQoc3BhbjMpO1xuc2hvd2Nhc2UuYXBwZW5kQ2hpbGQoY29sdW1uMyk7XG5cbmhvbWUuYXBwZW5kQ2hpbGQoc2hvd2Nhc2UpXG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgaGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsaG9tZSk7XG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51JylcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1hZ2VTcmMsIG5hbWUsIHByaWNlKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbURpdi5pZCA9IFwiaXRlbVwiO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IGltYWdlU3JjO1xuICAgIGltYWdlLmhlaWdodCA9IFwiMjAwXCI7XG4gICAgaW1hZ2Uud2lkdGggPSBcIjIwMFwiO1xuXG4gICAgY29uc3QgcHJvZHVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZHVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdFwiKTtcblxuICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaWNlRGl2LmlkID0gXCJwcmljZVwiO1xuICAgIHByaWNlRGl2LnRleHRDb250ZW50ID0gcHJpY2UgKyBcIi8tXCI7XG5cbiAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcbiAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKHByaWNlRGl2KTtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvZHVjdERpdik7XG5cbiAgICByZXR1cm4gaXRlbURpdjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1lbnVJdGVtcygpIHtcbiAgICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVHcmlkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudUdyaWQnKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaW1ncy9tZW51L2xhdHRlLnBuZ1wiLFxuICAgICAgICAgICAgbmFtZTogXCJMYXR0ZVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTc1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaW1ncy9tZW51L2RvbnV0LnBuZ1wiLFxuICAgICAgICAgICAgbmFtZTogXCJEb251dFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTI1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaW1ncy9tZW51L211ZmZpbi5wbmdcIixcbiAgICAgICAgICAgIG5hbWU6IFwiTXVmZmluXCIsXG4gICAgICAgICAgICBwcmljZTogXCI5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlU3JjOiBcImltZ3MvbWVudS9jYXBwdWNpbm8ucG5nXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNhcHB1Y2lub1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTc1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaW1ncy9tZW51L2ZsYXRfd2hpdGUucG5nXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkZsYXQgV2hpdGVcIixcbiAgICAgICAgICAgIHByaWNlOiBcIjE5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlU3JjOiBcImltZ3MvbWVudS9lc3ByZXNzby5wbmdcIixcbiAgICAgICAgICAgIG5hbWU6IFwiRXNwcmVzc29cIixcbiAgICAgICAgICAgIHByaWNlOiBcIjE1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlU3JjOiBcImltZ3MvbWVudS9hbWVyaWNhbm8ucG5nXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkFtZXJpY2Fub1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaW1ncy9tZW51L3RpcmFtaXN1LnBuZ1wiLFxuICAgICAgICAgICAgbmFtZTogXCJUaXJhbWlzdVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMjEwXCJcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShpdGVtLmltYWdlU3JjLCBpdGVtLm5hbWUsIGl0ZW0ucHJpY2UpO1xuICAgICAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUdyaWQ7XG59XG5cbmNvbnN0IG1lbnVfZ3JpZCA9IGRpc3BsYXlNZW51SXRlbXMoKTtcblxubWVudS5hcHBlbmRDaGlsZChtZW51X2dyaWQpO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGhlYWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBtZW51KTtcbiAgICByZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIlxuXG5sb2FkSG9tZSgpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgaG9tZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBtZW51X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGFib3V0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG5cbmhvbWVfYnV0dG9uLm9uY2xpY2sgPSAoKSA9PntcbiAgICBpZiAobG9hZE1lbnUoKSlcbiAgICB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobG9hZE1lbnUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxvYWRBYm91dCgpKVxuICAgIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChsb2FkQWJvdXQoKSlcbiAgICB9XG5cbiAgICBsb2FkSG9tZSgpO1xufVxuXG5tZW51X2J1dHRvbi5vbmNsaWNrID0gKCkgPT57XG4gICAgaWYobG9hZEhvbWUoKSl7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobG9hZEhvbWUoKSlcbiAgICB9XG4gICAgZWxzZSBpZiAobG9hZEFib3V0KCkpXG4gICAge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGxvYWRBYm91dCgpKVxuICAgIH1cblxuICAgIGxvYWRNZW51KCk7XG59XG5cbmFib3V0X2J1dHRvbi5vbmNsaWNrID0gKCkgPT57XG4gICAgbG9hZEFib3V0KCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=