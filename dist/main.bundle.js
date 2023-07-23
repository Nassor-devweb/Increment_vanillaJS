/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 62.5%;
}

body {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}

p {
  margin: 0px;
  padding: 0px;
}

@keyframes notification {
  to {
    transform: translateY(0px);
  }
}
.contenaire {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 2fr 2fr 4fr 3fr 1fr;
  object-fit: cover;
  font-size: 1.6rem;
  color: white;
}
.contenaire .notication {
  grid-column: 2/3;
  grid-row: 1/2;
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background-color: #ff866e;
  color: black;
  border-radius: 16px;
  margin: 10px auto;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4);
  height: 14px;
  transform: translateY(-100px);
}
.contenaire .affiche-notif {
  animation: notification 100ms both ease-in-out;
}
.contenaire .limiteHaut {
  margin-top: 100px;
  grid-column: 2/3;
  grid-row: 1/2;
  width: 100%;
  padding-top: 1rem;
}
.contenaire .limiteHaut .limitContent {
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.contenaire .limiteHaut .limitContent .limitTitle {
  width: 100%;
  text-align: center;
}
.contenaire .limiteHaut .limitContent .limitNumber {
  width: 120px;
  height: 80px;
  display: inline-block;
  margin-top: 0.5rem;
  border-radius: 16px;
}
.contenaire .incrementContent {
  grid-column: 2/3;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}
.contenaire .incrementContent .ajustment {
  border-radius: 16px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  min-height: 200px;
  width: 100px;
  font-size: 3.5rem;
  font-weight: bold;
}
.contenaire .incrementContent .ajustment .moins {
  grid-row: 1/2;
  background-color: #4bcfff;
  border-radius: 16px 16px 0px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenaire .incrementContent .ajustment .plus {
  grid-row: 2/3;
  border-radius: 0px 0px 16px 16px;
}
.contenaire .incrementContent .droite {
  justify-self: flex-end;
}
.contenaire .incrementContent .currentValue {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15.5rem;
  font-weight: bold;
}
.contenaire .result {
  grid-column: 2/3;
  padding-top: 3.4rem;
}
.contenaire .result .limiteBasseTitle {
  font-size: 1rem;
  text-align: center;
}
.contenaire .result input {
  width: 120px;
  height: 80px;
  display: block;
  margin: 2rem auto;
  border-radius: 16px;
}
.contenaire .result button {
  padding: 2.6rem 3.1rem;
  background-color: #4bcfff;
  display: block;
  margin: 3.2rem auto;
  border-radius: 16px;
  border: none;
  font-size: 2.6rem;
  color: white;
  cursor: pointer;
}
.contenaire .clickArea {
  grid-column: 2/3;
  display: grid;
  grid-template-rows: 1fr 4fr;
}
.contenaire .clickArea .clickAreaTitle {
  text-align: center;
}
.contenaire .clickArea .area {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 2.4rem;
  cursor: pointer;
}
.contenaire input {
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  font-size: 3.5rem;
  color: white;
  display: block;
  border: none;
  width: 100%;
  padding: 0px;
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/_base.scss","webpack://./src/assets/styles/styles.scss","webpack://./src/assets/styles/pages/_index.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;ACCJ;;ADEA;EACI,YAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;EACA,4BAAA;EACA,iCAAA;EACA,mCAAA;ACCJ;;ADCA;EACI,WAAA;EACA,YAAA;ACEJ;;ADCA;EAII;IACI,0BAAA;ECDN;AACF;ACvBA;EACI,aAAA;EACA,aAAA;EACA,kCAAA;EACA,uCAAA;EACA,iBAAA;EACA,iBAAA;EACA,YAAA;ADyBJ;ACxBI;EACI,gBAAA;EACA,aAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,2CAAA;EACA,YAAA;EACA,6BAAA;AD0BR;ACxBI;EACI,8CAAA;AD0BR;ACxBI;EACI,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,iBAAA;AD0BR;ACzBQ;EACI,WAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;AD2BZ;AC1BY;EACI,WAAA;EACA,kBAAA;AD4BhB;AC1BY;EACI,YAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;AD4BhB;ACxBI;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,kCAAA;AD0BR;ACzBQ;EACI,mBAAA;EACA,aAAA;EACA,2BAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AD2BZ;AC1BY;EACI,aAAA;EACA,yBAAA;EACA,gCAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AD4BhB;AC1BY;EACI,aAAA;EACA,gCAAA;AD4BhB;ACzBQ;EACI,sBAAA;AD2BZ;ACzBQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;AD2BZ;ACxBI;EACI,gBAAA;EACA,mBAAA;AD0BR;ACzBQ;EACI,eAAA;EACA,kBAAA;AD2BZ;ACzBQ;EACI,YAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;AD2BZ;ACzBQ;EACI,sBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;AD2BZ;ACxBI;EACI,gBAAA;EACA,aAAA;EACA,2BAAA;AD0BR;ACzBQ;EACI,kBAAA;AD2BZ;ACzBQ;EACI,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AD2BZ;ACxBI;EACI,0CAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;AD0BR","sourcesContent":[":root{\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    box-sizing: border-box;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-family: 'Roboto', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\np {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n@keyframes notification {\r\n    from {\r\n\r\n    }\r\n    to {\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n",":root {\n  font-size: 62.5%;\n}\n\nbody {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\np {\n  margin: 0px;\n  padding: 0px;\n}\n\n@keyframes notification {\n  to {\n    transform: translateY(0px);\n  }\n}\n.contenaire {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr;\n  grid-template-rows: 2fr 2fr 4fr 3fr 1fr;\n  object-fit: cover;\n  font-size: 1.6rem;\n  color: white;\n}\n.contenaire .notication {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: inline-block;\n  padding: 0.8rem 1.6rem;\n  background-color: #ff866e;\n  color: black;\n  border-radius: 16px;\n  margin: 10px auto;\n  font-size: 1.5rem;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4);\n  height: 14px;\n  transform: translateY(-100px);\n}\n.contenaire .affiche-notif {\n  animation: notification 100ms both ease-in-out;\n}\n.contenaire .limiteHaut {\n  margin-top: 100px;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  width: 100%;\n  padding-top: 1rem;\n}\n.contenaire .limiteHaut .limitContent {\n  width: 100%;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.contenaire .limiteHaut .limitContent .limitTitle {\n  width: 100%;\n  text-align: center;\n}\n.contenaire .limiteHaut .limitContent .limitNumber {\n  width: 120px;\n  height: 80px;\n  display: inline-block;\n  margin-top: 0.5rem;\n  border-radius: 16px;\n}\n.contenaire .incrementContent {\n  grid-column: 2/3;\n  padding-top: 2rem;\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n}\n.contenaire .incrementContent .ajustment {\n  border-radius: 16px;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  min-height: 200px;\n  width: 100px;\n  font-size: 3.5rem;\n  font-weight: bold;\n}\n.contenaire .incrementContent .ajustment .moins {\n  grid-row: 1/2;\n  background-color: #4bcfff;\n  border-radius: 16px 16px 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.contenaire .incrementContent .ajustment .plus {\n  grid-row: 2/3;\n  border-radius: 0px 0px 16px 16px;\n}\n.contenaire .incrementContent .droite {\n  justify-self: flex-end;\n}\n.contenaire .incrementContent .currentValue {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15.5rem;\n  font-weight: bold;\n}\n.contenaire .result {\n  grid-column: 2/3;\n  padding-top: 3.4rem;\n}\n.contenaire .result .limiteBasseTitle {\n  font-size: 1rem;\n  text-align: center;\n}\n.contenaire .result input {\n  width: 120px;\n  height: 80px;\n  display: block;\n  margin: 2rem auto;\n  border-radius: 16px;\n}\n.contenaire .result button {\n  padding: 2.6rem 3.1rem;\n  background-color: #4bcfff;\n  display: block;\n  margin: 3.2rem auto;\n  border-radius: 16px;\n  border: none;\n  font-size: 2.6rem;\n  color: white;\n  cursor: pointer;\n}\n.contenaire .clickArea {\n  grid-column: 2/3;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n.contenaire .clickArea .clickAreaTitle {\n  text-align: center;\n}\n.contenaire .clickArea .area {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  flex-wrap: wrap;\n  font-size: 2.4rem;\n  cursor: pointer;\n}\n.contenaire input {\n  background-color: rgba(255, 255, 255, 0.3);\n  text-align: center;\n  font-size: 3.5rem;\n  color: white;\n  display: block;\n  border: none;\n  width: 100%;\n  padding: 0px;\n  outline: none;\n}",".contenaire {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr 1fr;\r\n    grid-template-rows: 2fr 2fr 4fr 3fr 1fr;\r\n    object-fit: cover;\r\n    font-size: 1.6rem;\r\n    color: white;\r\n    .notication{\r\n        grid-column: 2/3;\r\n        grid-row: 1/2;\r\n        display: inline-block;\r\n        padding: 0.8rem 1.6rem;\r\n        background-color: #ff866e;\r\n        color: black;\r\n        border-radius: 16px;\r\n        margin: 10px auto;\r\n        font-size: 1.5rem;\r\n        box-shadow: 0 4px 12px 0 rgba(0,0,0,.4);\r\n        height: 14px;\r\n        transform: translateY(-100px);\r\n    }\r\n    .affiche-notif {\r\n        animation: notification 100ms both ease-in-out;\r\n    }\r\n    .limiteHaut{\r\n        margin-top: 100px;\r\n        grid-column: 2/3;\r\n        grid-row: 1/2;\r\n        width: 100%;\r\n        padding-top: 1rem;\r\n        .limitContent {\r\n            width: 100%;\r\n            font-size: 1rem;\r\n            display: flex;\r\n            justify-content: center;\r\n            flex-wrap: wrap;\r\n            .limitTitle{\r\n                width: 100%;\r\n                text-align: center;\r\n            }\r\n            .limitNumber{\r\n                width: 120px;\r\n                height: 80px;\r\n                display: inline-block;\r\n                margin-top: 0.5rem;\r\n                border-radius: 16px;\r\n            }\r\n        }\r\n    }\r\n    .incrementContent{\r\n        grid-column: 2/3;\r\n        padding-top: 2rem;\r\n        display: grid;\r\n        grid-template-columns: 1fr 4fr 1fr;\r\n        .ajustment {\r\n            border-radius: 16px;\r\n            display: grid;\r\n            grid-template-rows: 1fr 1fr;\r\n            min-height: 200px;\r\n            width: 100px;\r\n            font-size: 3.5rem;\r\n            font-weight: bold;\r\n            .moins {\r\n                grid-row: 1/2;\r\n                background-color: #4bcfff;\r\n                border-radius: 16px 16px 0px 0px;\r\n                cursor: pointer;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n            }\r\n            .plus {\r\n                grid-row: 2/3;\r\n                border-radius: 0px 0px 16px 16px;\r\n            }\r\n        }\r\n        .droite {\r\n            justify-self: flex-end;\r\n        }\r\n        .currentValue{\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            font-size: 15.5rem;\r\n            font-weight: bold;\r\n        }\r\n    }\r\n    .result{\r\n        grid-column: 2/3;\r\n        padding-top: 3.4rem;\r\n        .limiteBasseTitle{\r\n            font-size: 1rem;\r\n            text-align: center;\r\n        }\r\n        input {\r\n            width: 120px;\r\n            height: 80px;\r\n            display: block;\r\n            margin: 2rem auto ;\r\n            border-radius: 16px;\r\n        }\r\n        button {\r\n            padding: 2.6rem 3.1rem;\r\n            background-color: #4bcfff;\r\n            display: block;\r\n            margin: 3.2rem auto;\r\n            border-radius: 16px;\r\n            border: none;\r\n            font-size: 2.6rem;\r\n            color: white;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    .clickArea{\r\n        grid-column: 2/3;\r\n        display: grid;\r\n        grid-template-rows: 1fr 4fr;\r\n        .clickAreaTitle{\r\n            text-align: center;\r\n        }\r\n        .area{\r\n            background-color:  rgba(255, 255, 255, 0.3);\r\n            border-radius: 16px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-content: center;\r\n            flex-wrap: wrap;\r\n            font-size: 2.4rem;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    input {\r\n        background-color:  rgba(255, 255, 255, 0.3);\r\n        text-align: center;\r\n        font-size: 3.5rem;\r\n        color: white;\r\n        display: block;\r\n        border: none;\r\n        width: 100%;\r\n        padding : 0px;\r\n        outline: none;\r\n    };\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ "./src/assets/styles/styles.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var currValue = document.querySelector('.currentValue p');
var increment = document.querySelector('.ajustment.droite .moins');
var decrement = document.querySelector('.ajustment.gauche .moins');
var limiteHaute = document.querySelector('.limitNumber.haute');
var limiteBasse = document.querySelector('.limitNumber.basse');
var notification = document.querySelector('.notication');
var area = document.querySelector('.area');
console.log(_typeof(currValue));
var reset = document.querySelector('.reset');
var Currentvalue = 0;
function affichageValue(pas, addition) {
  var currentProv;
  currentProv = addition ? Currentvalue + pas : Currentvalue - pas;
  if (parseInt(limiteHaute.value) < currentProv) {
    notification.classList.add('affiche-notif');
    notification.textContent = "Limite haute (".concat(limiteHaute.value, ") atteinte");
  } else if (parseInt(limiteBasse.value) > currentProv) {
    notification.classList.add('affiche-notif');
    notification.textContent = "Limite basse (".concat(limiteBasse.value, ") atteinte");
  } else {
    var notifExist = notification.classList.contains('affiche-notif');
    if (notifExist) {
      notification.classList.remove('affiche-notif');
    }
    Currentvalue = currentProv;
    currValue.textContent = Currentvalue;
  }
}
affichageValue(0, true);
increment.addEventListener('click', function (e) {
  var pasIncrement = parseInt(document.querySelector('.plusInput').value);
  affichageValue(pasIncrement, true);
});
decrement.addEventListener('click', function (e) {
  var pasIncrement = parseInt(document.querySelector('.moinsInput').value);
  affichageValue(pasIncrement, false);
});
reset.addEventListener('click', function (e) {
  Currentvalue = 0;
  affichageValue(0, true);
});
area.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  decrement.dispatchEvent(new Event('click'));
});
area.addEventListener('click', function (e) {
  e.preventDefault();
  increment.dispatchEvent(new Event('click'));
});
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map