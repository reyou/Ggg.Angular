var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productForm.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productForm.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>productForm.component.html</h2>\r\n<form novalidate [formGroup]=\"form\" (ngSubmit)=\"submitForm(form)\">\r\n  <div class=\"form-group\" *ngFor=\"let control of form.productControls\">\r\n    <label>{{ control.label }}</label>\r\n    <input\r\n      class=\"form-control\"\r\n      [(ngModel)]=\"newProduct[control.modelProperty]\"\r\n      name=\"{{ control.modelProperty }}\"\r\n      formControlName=\"{{ control.modelProperty }}\"\r\n    />\r\n    <ul\r\n      class=\"text-danger list-unstyled\"\r\n      *ngIf=\"(formSubmitted || control.dirty) && !control.valid\"\r\n    >\r\n      <li *ngFor=\"let error of control.getValidationMessages()\">\r\n        {{ error }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <button\r\n    class=\"btn btn-primary\"\r\n    type=\"submit\"\r\n    [disabled]=\"formSubmitted && !form.valid\"\r\n    [class.btn-secondary]=\"formSubmitted && !form.valid\"\r\n  >\r\n    Create\r\n  </button>\r\n  <input\r\n    type=\"button\"\r\n    class=\"btn btn-primary\"\r\n    (click)=\"intro1Click()\"\r\n    value=\"Intro1 Alert\"\r\n  />\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productTable.component.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productTable.component.html ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>productTable.component.html</h2>\r\n<table class=\"table table-sm table-bordered table-striped\">\r\n  <tr>\r\n    <th></th>\r\n    <th>Name</th>\r\n    <th>Category</th>\r\n    <th>Price</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr\r\n    *paFor=\"\r\n      let item of getProducts();\r\n      let i = index;\r\n      let odd = odd;\r\n      let even = even\r\n    \"\r\n    [class.bg-info]=\"odd\"\r\n    [class.bg-warning]=\"even\"\r\n  >\r\n    <td style=\"vertical-align:middle\">{{ i + 1 }}</td>\r\n    <td style=\"vertical-align:middle\">{{ item.name }}</td>\r\n    <td style=\"vertical-align:middle\">{{ item.category }}</td>\r\n    <td style=\"vertical-align:middle\">\r\n      {{ item.price | currency: \"USD\":\"symbol\" }}\r\n    </td>\r\n    <td class=\"text-center\">\r\n      <button class=\"btn btn-danger btn-sm\" (click)=\"deleteProduct(item.id)\">\r\n        Delete\r\n      </button>\r\n    </td>\r\n  </tr>\r\n</table>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/template.html": 
        /*!*********************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template.html ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- controller: component.ts -->\r\n<!-- ref: attr.directive.ts -->\r\n<h2>template.html</h2>\r\n<div class=\"row m-2\">\r\n  <div class=\"col-4 p-2\">\r\n    <paProductForm (paNewProduct)=\"addProduct($event)\"></paProductForm>\r\n  </div>\r\n  <div class=\"col-8 p-2\">\r\n    <paProductTable [model]=\"model\"></paProductTable>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toggleView.component.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toggleView.component.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>toggleView.component.html</h2>\r\n<!-- The important element is ng-content, which Angular will replace with the content of the host element.\r\nThe ngIf directive has been applied to the ng-content element so that it will be visible only if the checkbox\r\nin the template is checked.  -->\r\n<div class=\"checkbox\">\r\n  <label>\r\n    <input type=\"checkbox\" [(ngModel)]=\"showContent\" />\r\n    Show Content\r\n  </label>\r\n</div>\r\n<ng-content *ngIf=\"showContent\"></ng-content>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Intro1Class.ts": 
        /*!********************************!*\
          !*** ./src/app/Intro1Class.ts ***!
          \********************************/
        /*! exports provided: Intro1Class */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro1Class", function () { return Intro1Class; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Intro1Class = /** @class */ (function () {
                function Intro1Class() {
                    this.name = "Intro1ClassName";
                    console.log("Intro1Class initialized.");
                }
                Intro1Class.prototype.getName = function () {
                    return "This is Intro1Class";
                };
                return Intro1Class;
            }());
            /***/ 
        }),
        /***/ "./src/app/addTax.pipe.ts": 
        /*!********************************!*\
          !*** ./src/app/addTax.pipe.ts ***!
          \********************************/
        /*! exports provided: PaAddTaxPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaAddTaxPipe", function () { return PaAddTaxPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* Pipes are classes to which the @Pipe decorator has been applied and that implement a method called
            transform. The @Pipe decorator defines two properties, which are used to configure pipes. */
            var PaAddTaxPipe = /** @class */ (function () {
                /* Pipes are classes to which the @Pipe decorator has been applied and that implement a method called
                transform. The @Pipe decorator defines two properties, which are used to configure pipes. */
                function PaAddTaxPipe() {
                    this.defaultRate = 10;
                }
                PaAddTaxPipe.prototype.transform = function (value, rate) {
                    var valueNumber = Number.parseFloat(value);
                    var rateNumber = rate == undefined ? this.defaultRate : Number.parseInt(rate);
                    return valueNumber + valueNumber * (rateNumber / 100);
                };
                return PaAddTaxPipe;
            }());
            PaAddTaxPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: "addTax"
                })
            ], PaAddTaxPipe);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/app/component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _attr_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attr.directive */ "./src/app/attr.directive.ts");
            /* harmony import */ var _twoway_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twoway.directive */ "./src/app/twoway.directive.ts");
            /* harmony import */ var _structure_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./structure.directive */ "./src/app/structure.directive.ts");
            /* harmony import */ var _iterator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iterator.directive */ "./src/app/iterator.directive.ts");
            /* harmony import */ var _cellColor_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cellColor.directive */ "./src/app/cellColor.directive.ts");
            /* harmony import */ var _cellColorSwitcher_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cellColorSwitcher.directive */ "./src/app/cellColorSwitcher.directive.ts");
            /* harmony import */ var _productTable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productTable.component */ "./src/app/productTable.component.ts");
            /* harmony import */ var _productForm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./productForm.component */ "./src/app/productForm.component.ts");
            /* harmony import */ var _toggleView_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toggleView.component */ "./src/app/toggleView.component.ts");
            /* harmony import */ var _addTax_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addTax.pipe */ "./src/app/addTax.pipe.ts");
            /* harmony import */ var _categoryFilter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categoryFilter.pipe */ "./src/app/categoryFilter.pipe.ts");
            /* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
            /* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* Provide this token to set the locale of your application. It is used for i18n extraction, by i18n pipes (DatePipe, I18nPluralPipe, CurrencyPipe, DecimalPipe and PercentPipe) and by ICU expressions.
            See the i18n guide for more information. */
            // import { LOCALE_ID } from "@angular/core";
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_16___default.a);
            /*The imports property of the NgModule decorator specifies the dependencies of the application.
            Adding FormsModule to the list of dependencies enables the form features and makes them available for use
            throughout the application. */
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
                    declarations: [
                        _component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
                        _attr_directive__WEBPACK_IMPORTED_MODULE_5__["PaAttrDirective"],
                        _twoway_directive__WEBPACK_IMPORTED_MODULE_6__["PaModel"],
                        _structure_directive__WEBPACK_IMPORTED_MODULE_7__["PaStructureDirective"],
                        _iterator_directive__WEBPACK_IMPORTED_MODULE_8__["PaIteratorDirective"],
                        _cellColor_directive__WEBPACK_IMPORTED_MODULE_9__["PaCellColor"],
                        _cellColorSwitcher_directive__WEBPACK_IMPORTED_MODULE_10__["PaCellColorSwitcher"],
                        _productTable_component__WEBPACK_IMPORTED_MODULE_11__["ProductTableComponent"],
                        _productForm_component__WEBPACK_IMPORTED_MODULE_12__["ProductFormComponent"],
                        _toggleView_component__WEBPACK_IMPORTED_MODULE_13__["PaToggleView"],
                        _addTax_pipe__WEBPACK_IMPORTED_MODULE_14__["PaAddTaxPipe"],
                        _categoryFilter_pipe__WEBPACK_IMPORTED_MODULE_15__["PaCategoryFilterPipe"]
                    ],
                    // providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
                    bootstrap: [_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/attr.directive.ts": 
        /*!***********************************!*\
          !*** ./src/app/attr.directive.ts ***!
          \***********************************/
        /*! exports provided: PaAttrDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaAttrDirective", function () { return PaAttrDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* p-ref: app.module.ts */
            /* c-ref: template.html */
            var PaAttrDirective = /** @class */ (function () {
                function PaAttrDirective(element) {
                    this.element = element;
                    /* Creates an instance of this class that can deliver events synchronously or asynchronously. */
                    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /* Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs. */
                PaAttrDirective.prototype.triggerCustomEvent = function () {
                    if (this.product != null) {
                        this.click.emit(this.product.category);
                    }
                };
                PaAttrDirective.prototype.onMouseOver = function () {
                    console.log("Mouse-over on this element.");
                };
                /* Represents a basic change from a previous to a new value for a single property
              on a directive instance. Passed as a value in a {@link SimpleChanges} object to
              the ngOnChanges hook. */
                PaAttrDirective.prototype.ngOnChanges = function (changes) {
                    var change = changes["bgClass"];
                    var classList = this.element.nativeElement.classList;
                    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
                        classList.remove(change.previousValue);
                    }
                    if (!classList.contains(change.currentValue)) {
                        classList.add(change.currentValue);
                    }
                };
                return PaAttrDirective;
            }());
            PaAttrDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pa-attr")
            ], PaAttrDirective.prototype, "bgClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pa-product")
                /* Decorator that marks a DOM property as a host-binding property and supplies configuration metadata. Angular automatically checks host property bindings during change detection, and if a binding changes it updates the host element of the directive. */
                ,
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class")
            ], PaAttrDirective.prototype, "product", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("pa-category")
            ], PaAttrDirective.prototype, "click", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
            ], PaAttrDirective.prototype, "triggerCustomEvent", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseover")
            ], PaAttrDirective.prototype, "onMouseOver", null);
            PaAttrDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[pa-attr]"
                })
            ], PaAttrDirective);
            /***/ 
        }),
        /***/ "./src/app/categoryFilter.pipe.ts": 
        /*!****************************************!*\
          !*** ./src/app/categoryFilter.pipe.ts ***!
          \****************************************/
        /*! exports provided: PaCategoryFilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaCategoryFilterPipe", function () { return PaCategoryFilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaCategoryFilterPipe = /** @class */ (function () {
                function PaCategoryFilterPipe() {
                }
                PaCategoryFilterPipe.prototype.transform = function (products, category) {
                    return category == undefined || category == "[All]"
                        ? products
                        : products.filter(function (p) { return p.category == category; });
                };
                return PaCategoryFilterPipe;
            }());
            PaCategoryFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: "filter",
                    pure: false
                })
            ], PaCategoryFilterPipe);
            /***/ 
        }),
        /***/ "./src/app/cellColor.directive.ts": 
        /*!****************************************!*\
          !*** ./src/app/cellColor.directive.ts ***!
          \****************************************/
        /*! exports provided: PaCellColor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaCellColor", function () { return PaCellColor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaCellColor = /** @class */ (function () {
                function PaCellColor() {
                    /* Decorator that marks a DOM property as a host-binding property and supplies configuration metadata.
                    Angular automatically checks host property bindings during change detection,
                    and if a binding changes it updates the host element of the directive. */
                    this.bgClass = "";
                }
                PaCellColor.prototype.setColor = function (dark) {
                    this.bgClass = dark ? "bg-dark" : "";
                };
                return PaCellColor;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class")
            ], PaCellColor.prototype, "bgClass", void 0);
            PaCellColor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "td[paApplyColor]"
                })
            ], PaCellColor);
            /***/ 
        }),
        /***/ "./src/app/cellColorSwitcher.directive.ts": 
        /*!************************************************!*\
          !*** ./src/app/cellColorSwitcher.directive.ts ***!
          \************************************************/
        /*! exports provided: PaCellColorSwitcher */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaCellColorSwitcher", function () { return PaCellColorSwitcher; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cellColor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellColor.directive */ "./src/app/cellColor.directive.ts");
            var PaCellColorSwitcher = /** @class */ (function () {
                function PaCellColorSwitcher() {
                }
                PaCellColorSwitcher.prototype.ngOnChanges = function (changes) {
                    this.updateContentChildren(changes["modelProperty"].currentValue);
                };
                PaCellColorSwitcher.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.contentChildren.changes.subscribe(function () {
                        setTimeout(function () { return _this.updateContentChildren(_this.modelProperty); }, 0);
                    });
                };
                PaCellColorSwitcher.prototype.updateContentChildren = function (dark) {
                    if (this.contentChildren != null && dark != undefined) {
                        this.contentChildren.forEach(function (child, index) {
                            child.setColor(index % 2 ? dark : !dark);
                        });
                    }
                };
                return PaCellColorSwitcher;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("paCellDarkColor")
            ], PaCellColorSwitcher.prototype, "modelProperty", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_cellColor_directive__WEBPACK_IMPORTED_MODULE_2__["PaCellColor"])
            ], PaCellColorSwitcher.prototype, "contentChildren", void 0);
            PaCellColorSwitcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "table"
                })
            ], PaCellColorSwitcher);
            /***/ 
        }),
        /***/ "./src/app/component.ts": 
        /*!******************************!*\
          !*** ./src/app/component.ts ***!
          \******************************/
        /*! exports provided: ProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function () { return ProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _repository_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repository.model */ "./src/app/repository.model.ts");
            /* harmony import */ var _Intro1Class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Intro1Class */ "./src/app/Intro1Class.ts");
            var ProductComponent = /** @class */ (function () {
                function ProductComponent() {
                    this.model = new _repository_model__WEBPACK_IMPORTED_MODULE_2__["Model"]();
                    this.intro1 = new _Intro1Class__WEBPACK_IMPORTED_MODULE_3__["Intro1Class"]();
                }
                ProductComponent.prototype.addProduct = function (p) {
                    this.model.saveProduct(p);
                };
                ProductComponent.prototype.intro1OnClick = function (intro1Ref) {
                    alert(JSON.stringify(intro1Ref));
                };
                return ProductComponent;
            }());
            ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./template.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/template.html")).default,
                })
            ], ProductComponent);
            /***/ 
        }),
        /***/ "./src/app/datasource.model.ts": 
        /*!*************************************!*\
          !*** ./src/app/datasource.model.ts ***!
          \*************************************/
        /*! exports provided: SimpleDataSource */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDataSource", function () { return SimpleDataSource; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/product.model.ts");
            var SimpleDataSource = /** @class */ (function () {
                function SimpleDataSource() {
                    this.data = new Array(new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](1, "Kayak", "Watersports", 275), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](2, "Lifejacket", "Watersports", 48.95), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](3, "Soccer Ball", "Soccer", 19.5), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](4, "Corner Flags", "Soccer", 34.95), new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](5, "Thinking Cap", "Chess", 16));
                }
                SimpleDataSource.prototype.getData = function () {
                    return this.data;
                };
                return SimpleDataSource;
            }());
            /***/ 
        }),
        /***/ "./src/app/form.model.ts": 
        /*!*******************************!*\
          !*** ./src/app/form.model.ts ***!
          \*******************************/
        /*! exports provided: ProductFormControl, ProductFormGroup */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormControl", function () { return ProductFormControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormGroup", function () { return ProductFormGroup; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _limit_formvalidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./limit.formvalidator */ "./src/app/limit.formvalidator.ts");
            /* ref: template.html */
            /* The FormControl class is used to represent a single element in a form, such as
            input element. */
            var ProductFormControl = /** @class */ (function (_super) {
                __extends(ProductFormControl, _super);
                function ProductFormControl(label, property, value, validator) {
                    var _this = _super.call(this, value, validator) || this;
                    _this.label = label;
                    _this.modelProperty = property;
                    return _this;
                }
                ProductFormControl.prototype.getValidationMessages = function () {
                    var messages = [];
                    if (this.errors) {
                        for (var errorName in this.errors) {
                            switch (errorName) {
                                case "required":
                                    messages.push("You must enter a " + this.label);
                                    break;
                                case "minlength":
                                    messages.push("A " + this.label + " must be at least " + this.errors["minlength"].requiredLength + " characters");
                                    break;
                                case "maxlength":
                                    messages.push("A " + this.label + " must be no more than " + this.errors["maxlength"].requiredLength + " characters");
                                    break;
                                case "limit":
                                    messages.push("A " + this.label + " cannot be more than " + this.errors["limit"].limit);
                                    break;
                                case "pattern":
                                    messages.push("The " + this.label + " contains illegal characters");
                                    break;
                            }
                        }
                    }
                    return messages;
                };
                return ProductFormControl;
            }(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]));
            /* FormGroup class is used to manage a form element and its contents. */
            var ProductFormGroup = /** @class */ (function (_super) {
                __extends(ProductFormGroup, _super);
                function ProductFormGroup() {
                    return _super.call(this, {
                        name: new ProductFormControl("Name", "name", "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                        category: new ProductFormControl("Category", "category", "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[A-Za-z ]+$"),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)
                        ])),
                        price: new ProductFormControl("Price", "price", "", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            _limit_formvalidator__WEBPACK_IMPORTED_MODULE_2__["LimitValidator"].Limit(100),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9.]+$")
                        ]))
                    }) || this;
                }
                Object.defineProperty(ProductFormGroup.prototype, "productControls", {
                    get: function () {
                        var _this = this;
                        return Object.keys(this.controls).map(function (k) { return _this.controls[k]; });
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductFormGroup.prototype.getFormValidationMessages = function (form) {
                    var messages = [];
                    this.productControls.forEach(function (c) { return c.getValidationMessages().forEach(function (m) { return messages.push(m); }); });
                    return messages;
                };
                return ProductFormGroup;
            }(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]));
            /***/ 
        }),
        /***/ "./src/app/iterator.directive.ts": 
        /*!***************************************!*\
          !*** ./src/app/iterator.directive.ts ***!
          \***************************************/
        /*! exports provided: PaIteratorDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaIteratorDirective", function () { return PaIteratorDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaIteratorDirective = /** @class */ (function () {
                function PaIteratorDirective(container, template, differs, changeDetector) {
                    this.container = container;
                    this.template = template;
                    this.differs = differs;
                    this.changeDetector = changeDetector;
                    this.views = new Map();
                }
                PaIteratorDirective.prototype.ngOnInit = function () {
                    this.differ = (this.differs.find(this.dataSource).create());
                };
                PaIteratorDirective.prototype.ngDoCheck = function () {
                    var _this = this;
                    var changes = this.differ.diff(this.dataSource);
                    if (changes != null) {
                        changes.forEachAddedItem(function (addition) {
                            var context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
                            context.view = _this.container.createEmbeddedView(_this.template, context);
                            _this.views.set(addition.trackById, context);
                        });
                        var removals_1 = false;
                        changes.forEachRemovedItem(function (removal) {
                            removals_1 = true;
                            var context = _this.views.get(removal.trackById);
                            if (context != null) {
                                _this.container.remove(_this.container.indexOf(context.view));
                                _this.views.delete(removal.trackById);
                            }
                        });
                        if (removals_1) {
                            var index_1 = 0;
                            this.views.forEach(function (context) { return context.setData(index_1++, _this.views.size); });
                        }
                    }
                };
                PaIteratorDirective.prototype.updateContent = function () {
                    this.container.clear();
                    for (var i = 0; i < this.dataSource.length; i++) {
                        this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
                    }
                };
                return PaIteratorDirective;
            }());
            PaIteratorDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("paForOf")
            ], PaIteratorDirective.prototype, "dataSource", void 0);
            PaIteratorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[paForOf]"
                })
            ], PaIteratorDirective);
            var PaIteratorContext = /** @class */ (function () {
                function PaIteratorContext($implicit, position, total) {
                    this.$implicit = $implicit;
                    this.position = position;
                    this.setData(position, total);
                }
                PaIteratorContext.prototype.setData = function (index, total) {
                    this.index = index;
                    this.odd = index % 2 == 1;
                    this.even = !this.odd;
                    this.first = index == 0;
                    this.last = index == total - 1;
                };
                return PaIteratorContext;
            }());
            /***/ 
        }),
        /***/ "./src/app/limit.formvalidator.ts": 
        /*!****************************************!*\
          !*** ./src/app/limit.formvalidator.ts ***!
          \****************************************/
        /*! exports provided: LimitValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitValidator", function () { return LimitValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* Tracks the value and validation status of an individual form control.
            This is one of the three fundamental building blocks of Angular forms, along with FormGroup and FormArray.
            It extends the AbstractControl class that implements most of the base functionality for accessing the value,
            validation status, user interactions and events. */
            /* Custom validators are factories that create functions used to perform validation. In this case, the
            LimitValidator class defines the Limit method, which is static and is the factory that returns the
            validation function. The argument to the Limit method is the largest value that should be allowed to pass
            validation. */
            var LimitValidator = /** @class */ (function () {
                function LimitValidator() {
                }
                LimitValidator.Limit = function (limit) {
                    return function (control) {
                        var val = Number(control.value);
                        if (val != NaN && val > limit) {
                            return {
                                limit: {
                                    limit: limit,
                                    actualValue: val
                                }
                            };
                        }
                        else {
                            return null;
                        }
                    };
                };
                return LimitValidator;
            }());
            /***/ 
        }),
        /***/ "./src/app/product.model.ts": 
        /*!**********************************!*\
          !*** ./src/app/product.model.ts ***!
          \**********************************/
        /*! exports provided: Product */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function () { return Product; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Product = /** @class */ (function () {
                function Product(id, name, category, price) {
                    this.id = id;
                    this.name = name;
                    this.category = category;
                    this.price = price;
                }
                return Product;
            }());
            /***/ 
        }),
        /***/ "./src/app/productForm.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/productForm.component.ts ***!
          \******************************************/
        /*! exports provided: ProductFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () { return ProductFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.model */ "./src/app/product.model.ts");
            /* harmony import */ var _form_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.model */ "./src/app/form.model.ts");
            /* harmony import */ var _Intro1Class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Intro1Class */ "./src/app/Intro1Class.ts");
            var ProductFormComponent = /** @class */ (function () {
                function ProductFormComponent() {
                    this.form = new _form_model__WEBPACK_IMPORTED_MODULE_3__["ProductFormGroup"]();
                    this.newProduct = new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                    this.formSubmitted = false;
                    this.newProductEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.intro1EventListener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ProductFormComponent.prototype.submitForm = function (form) {
                    this.formSubmitted = true;
                    if (form.valid) {
                        this.newProductEvent.emit(this.newProduct);
                        this.newProduct = new _product_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                        this.form.reset();
                        this.formSubmitted = false;
                    }
                };
                ProductFormComponent.prototype.intro1Click = function () {
                    this.intro1Class = new _Intro1Class__WEBPACK_IMPORTED_MODULE_4__["Intro1Class"]();
                    this.intro1EventListener.emit(this.intro1Class);
                };
                return ProductFormComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("paNewProduct")
            ], ProductFormComponent.prototype, "newProductEvent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("intro1EventListener")
            ], ProductFormComponent.prototype, "intro1EventListener", void 0);
            ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "paProductForm",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productForm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productForm.component.html")).default
                    // styleUrls: ["productForm.component.css"],
                    // encapsulation: ViewEncapsulation.Emulated
                })
            ], ProductFormComponent);
            /***/ 
        }),
        /***/ "./src/app/productTable.component.ts": 
        /*!*******************************************!*\
          !*** ./src/app/productTable.component.ts ***!
          \*******************************************/
        /*! exports provided: ProductTableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableComponent", function () { return ProductTableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProductTableComponent = /** @class */ (function () {
                function ProductTableComponent() {
                    this.taxRate = 10;
                    this.categoryFilter = "[All]";
                    this.dateObject = new Date(2020, 1, 20);
                    this.dateString = "2020-02-20T00:00:00.000Z";
                    this.dateNumber = 1582156800000;
                }
                ProductTableComponent.prototype.getProduct = function (key) {
                    return this.dataModel.getProduct(key);
                };
                ProductTableComponent.prototype.getProducts = function () {
                    return this.dataModel.getProducts();
                };
                ProductTableComponent.prototype.deleteProduct = function (key) {
                    this.dataModel.deleteProduct(key);
                };
                return ProductTableComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("model")
            ], ProductTableComponent.prototype, "dataModel", void 0);
            ProductTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "paProductTable",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productTable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productTable.component.html")).default
                })
            ], ProductTableComponent);
            /***/ 
        }),
        /***/ "./src/app/repository.model.ts": 
        /*!*************************************!*\
          !*** ./src/app/repository.model.ts ***!
          \*************************************/
        /*! exports provided: Model */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function () { return Model; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/product.model.ts");
            /* harmony import */ var _datasource_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource.model */ "./src/app/datasource.model.ts");
            var Model = /** @class */ (function () {
                function Model() {
                    var _this = this;
                    this.locator = function (p, id) { return p.id == id; };
                    this.dataSource = new _datasource_model__WEBPACK_IMPORTED_MODULE_2__["SimpleDataSource"]();
                    this.products = new Array();
                    this.dataSource.getData().forEach(function (p) { return _this.products.push(p); });
                }
                Model.prototype.getProducts = function () {
                    return this.products;
                };
                Model.prototype.getProduct = function (id) {
                    var _this = this;
                    return this.products.find(function (p) { return _this.locator(p, id); });
                };
                Model.prototype.saveProduct = function (product) {
                    var _this = this;
                    if (product.id == 0 || product.id == null) {
                        product.id = this.generateID();
                        this.products.push(product);
                    }
                    else {
                        var index = this.products.findIndex(function (p) { return _this.locator(p, product.id); });
                        this.products.splice(index, 1, product);
                    }
                };
                Model.prototype.deleteProduct = function (id) {
                    var _this = this;
                    var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
                    if (index > -1) {
                        this.products.splice(index, 1);
                    }
                };
                Model.prototype.swapProduct = function () {
                    var p = this.products.shift();
                    this.products.push(new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](p.id, p.name, p.category, p.price));
                };
                Model.prototype.generateID = function () {
                    var candidate = 100;
                    while (this.getProduct(candidate) != null) {
                        candidate++;
                    }
                    return candidate;
                };
                return Model;
            }());
            /***/ 
        }),
        /***/ "./src/app/structure.directive.ts": 
        /*!****************************************!*\
          !*** ./src/app/structure.directive.ts ***!
          \****************************************/
        /*! exports provided: PaStructureDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaStructureDirective", function () { return PaStructureDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaStructureDirective = /** @class */ (function () {
                function PaStructureDirective(
                /* Represents a container where one or more views can be attached to a component.
            Can contain host views (created by instantiating a component with the createComponent() method),
            and embedded views (created by instantiating a TemplateRef with the createEmbeddedView() method). */
                container, 
                /* Represents an embedded template that can be used to instantiate embedded views.
                To instantiate embedded views based on a template, use the ViewContainerRef
                method createEmbeddedView().
            
            Access a TemplateRef instance by placing a directive on an <ng-template> element
            (or directive prefixed with *).
            The TemplateRef for the embedded view is injected into the constructor of the directive,
            using the TemplateRef token.
            You can also use a Query to find a TemplateRef associated with a component or a directive. */
                template) {
                    this.container = container;
                    this.template = template;
                }
                /* Represents a basic change from a previous to a new value for a single property on a directive instance.
                Passed as a value in a {@link SimpleChanges} object to the ngOnChanges hook. */
                PaStructureDirective.prototype.ngOnChanges = function (changes) {
                    var change = changes["expressionResult"];
                    if (!change.isFirstChange() && !change.currentValue) {
                        this.container.clear();
                    }
                    else if (change.currentValue) {
                        // Instantiates an embedded view and inserts it into this container.
                        this.container.createEmbeddedView(this.template);
                    }
                };
                return PaStructureDirective;
            }());
            PaStructureDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("paIf")
            ], PaStructureDirective.prototype, "expressionResult", void 0);
            PaStructureDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[paIf]"
                })
            ], PaStructureDirective);
            /***/ 
        }),
        /***/ "./src/app/toggleView.component.ts": 
        /*!*****************************************!*\
          !*** ./src/app/toggleView.component.ts ***!
          \*****************************************/
        /*! exports provided: PaToggleView */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaToggleView", function () { return PaToggleView; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaToggleView = /** @class */ (function () {
                function PaToggleView() {
                    this.showContent = true;
                }
                return PaToggleView;
            }());
            PaToggleView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "paToggleView",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggleView.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toggleView.component.html")).default
                })
            ], PaToggleView);
            /***/ 
        }),
        /***/ "./src/app/twoway.directive.ts": 
        /*!*************************************!*\
          !*** ./src/app/twoway.directive.ts ***!
          \*************************************/
        /*! exports provided: PaModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaModel", function () { return PaModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* The exportAs property of the @Directive decorator specifies a name that will be used to refer to the directive in template variables.
            This example uses paModel as the value for the exportAs property, and you
            should try to use names that make it clear which directive is providing the functionality. */
            var PaModel = /** @class */ (function () {
                /* The exportAs property of the @Directive decorator specifies a name that will be used to refer to the directive in template variables.
                This example uses paModel as the value for the exportAs property, and you
                should try to use names that make it clear which directive is providing the functionality. */
                function PaModel() {
                    this.direction = "None";
                    this.fieldValue = "";
                    /* Decorator that marks a class field as an output property and
                    supplies configuration metadata.
                    The DOM property bound to the output property is automatically
                    updated during change detection. */
                    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                PaModel.prototype.ngOnChanges = function (changes) {
                    var change = changes["modelProperty"];
                    if (change.currentValue != this.fieldValue) {
                        this.fieldValue = changes["modelProperty"].currentValue || "";
                        this.direction = "Model";
                    }
                };
                /* The first argument to the @HostListener decorator specifies
              the name of the event that will be handled by the listener.
              The second argument is an array that will be used to provide the decorated
              methods with arguments. */
                PaModel.prototype.updateValue = function (newValue) {
                    this.fieldValue = newValue;
                    this.update.emit(newValue);
                    this.direction = "Element";
                };
                return PaModel;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("paModel")
            ], PaModel.prototype, "modelProperty", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("value")
            ], PaModel.prototype, "fieldValue", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("paModelChange")
            ], PaModel.prototype, "update", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("input", ["$event.target.value"])
            ], PaModel.prototype, "updateValue", null);
            PaModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "input[paModel]",
                    exportAs: "paModelDirective"
                })
            ], PaModel);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Ggg\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap19-Using-Services\intro1-Using-Services\example\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map