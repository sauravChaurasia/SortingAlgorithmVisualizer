(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection-sort/selection-sort.component */ "./src/app/selection-sort/selection-sort.component.ts");
/* harmony import */ var _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble-sort/bubble-sort.component */ "./src/app/bubble-sort/bubble-sort.component.ts");
/* harmony import */ var _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertion-sort/insertion-sort.component */ "./src/app/insertion-sort/insertion-sort.component.ts");





class AppComponent {
    constructor() {
        this.title = "SortingAlgorithm";
        this.a = 8;
    }
    ngOnInit() {
        const arrOfNum = [];
        for (let i = 0; i < 77; i++) {
            arrOfNum.push(this.randomIntFromInterval(5, 500));
        }
        this.sendData = arrOfNum;
        this.sendData1 = arrOfNum;
        this.sendData2 = arrOfNum;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 3, consts: [[1, "row"], [1, "col-md-4", "offset-4"], [2, "text-align", "center"], [1, "row", "center"], [3, "arrayToBeSorted"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sorting Visualizer\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Selection Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bubble Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Insertion Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-selection-sort", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-bubble-sort", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-insertion-sort", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayToBeSorted", ctx.sendData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayToBeSorted", ctx.sendData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayToBeSorted", ctx.sendData2);
    } }, directives: [_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_1__["SelectionSortComponent"], _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_2__["BubbleSortComponent"], _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_3__["InsertionSortComponent"]], styles: [".bar[_ngcontent-%COMP%]{\r\n    width:2px;\r\n    background-color: blue ;\r\n    display:inline-block;\r\n    position: relative;\r\n    margin-top: 5px;\r\n    margin-left:1px;\r\n    padding-left: 1px;\r\n    \r\n}\r\n.red-bar[_ngcontent-%COMP%] {\r\n    background-color: red ;\r\n  }\r\n.green-bar[_ngcontent-%COMP%] {\r\n    background-color: green ;\r\n  }\r\n.red-font[_ngcontent-%COMP%]{\r\n    color:red;\r\n  }\r\n.green-font[_ngcontent-%COMP%]{\r\n    color:green;\r\n  }\r\n\r\nth[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      text-align: center;\r\n      border:black solid 2px;\r\n  }\r\ntd[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      border: black solid 2px;\r\n  }\r\n.center[_ngcontent-%COMP%]{\r\n    margin-left: 3%;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNIOzs7O0dBSUc7QUFDSDtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFHQTtJQUNJLHNCQUFzQjtFQUN4QjtBQUVGO0lBQ0ksd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNBOztLQUVHO0FBQ0g7TUFDSSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHNCQUFzQjtFQUMxQjtBQUNBO01BQ0ksWUFBWTtNQUNaLHVCQUF1QjtFQUMzQjtBQUNBO0lBQ0UsZUFBZTs7RUFFakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNjaGFydHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbn0gKi9cclxuLyogLmNvbnRhaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSAqL1xyXG4uYmFye1xyXG4gICAgd2lkdGg6MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgXHJcbn0gXHJcblxyXG5cclxuLnJlZC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIDtcclxuICB9XHJcbiAgXHJcbi5ncmVlbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gO1xyXG4gIH1cclxuICAucmVkLWZvbnR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfSBcclxuICAuZ3JlZW4tZm9udHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gIH0gXHJcbiAgLyogdGFibGV7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICB9ICovXHJcbiAgdGh7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXI6YmxhY2sgc29saWQgMnB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICB9XHJcbiAgLmNlbnRlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIFxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble-sort/bubble-sort.component */ "./src/app/bubble-sort/bubble-sort.component.ts");
/* harmony import */ var _selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection-sort/selection-sort.component */ "./src/app/selection-sort/selection-sort.component.ts");
/* harmony import */ var _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insertion-sort/insertion-sort.component */ "./src/app/insertion-sort/insertion-sort.component.ts");
/* harmony import */ var _merge_sort_merge_sort_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge-sort/merge-sort.component */ "./src/app/merge-sort/merge-sort.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_4__["BubbleSortComponent"],
        _selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_5__["SelectionSortComponent"],
        _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_6__["InsertionSortComponent"],
        _merge_sort_merge_sort_component__WEBPACK_IMPORTED_MODULE_7__["MergeSortComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_4__["BubbleSortComponent"],
                    _selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_5__["SelectionSortComponent"],
                    _insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_6__["InsertionSortComponent"],
                    _merge_sort_merge_sort_component__WEBPACK_IMPORTED_MODULE_7__["MergeSortComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bubble-sort/bubble-sort.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bubble-sort/bubble-sort.component.ts ***!
  \******************************************************/
/*! exports provided: BubbleSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleSortComponent", function() { return BubbleSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { height: a0 }; };
const _c1 = function (a0, a1) { return { "red-bar": a0, "green-bar": a1 }; };
function BubbleSortComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const siz_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const j_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, siz_r3 * 0.8 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, i_r5 == ctx_r2.activeIndex1, j_r6 == ctx_r2.activeIndex2));
} }
function BubbleSortComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BubbleSortComponent_div_0_div_1_Template, 1, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.numarr)("ngForOf", ctx_r0.numarr);
} }
function BubbleSortComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const siz_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, siz_r8 * 0.8 + "px"));
} }
function BubbleSortComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BubbleSortComponent_div_1_div_1_Template, 1, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.rawData);
} }
class BubbleSortComponent {
    constructor() {
        this.simple = [];
        this.title = 'SortingAlgorithm';
        this.rawData = [];
        this.numarr = [];
        this.activeIndex2 = 0;
        this.activeIndex1 = 0;
        this.sorted = false; // stores the status whether the array is sorted or not 
        this.count = 0; //counter while checking for equallity
    }
    ngOnInit() {
        this.simple = this.arrayToBeSorted;
        console.log("Array :" + this.simple);
        this.sort(this.setValue());
    }
    setValue() {
        const arrOfNum = [];
        for (let i = 0; i < 77; i++) {
            arrOfNum.push(this.randomIntFromInterval(5, 500));
        }
        return arrOfNum;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    sort(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.numarr = data;
            for (let i = 0; i < this.numarr.length; i++) {
                for (let j = 0; j < this.numarr.length - i - 1; j++) {
                    if (this.numarr[j] > this.numarr[j + 1]) {
                        // this.compareLeft = j;
                        this.activeIndex1 = j + 2; //this is compared to others
                        this.activeIndex2 = j + 1;
                        let temp;
                        temp = this.numarr[j];
                        this.numarr[j] = this.numarr[j + 1];
                        this.numarr[j + 1] = temp;
                        this.sortedArray = this.numarr;
                        this.rawData = this.numarr;
                        // console.log(this.sortedArray);
                    }
                    yield new Promise(r => setTimeout(r, 25));
                }
            }
            this.isSorted(data);
            return this.sortedArray;
        });
    }
    isSorted(data) {
        this.iSorted = data.sort((n1, n2) => n1 - n2);
        if (this.iSorted.length == this.sortedArray.length) {
            for (let i = 0; i < this.sortedArray.length; i++) {
                if (this.iSorted[i] == this.sortedArray[i]) {
                    this.count++;
                }
            }
            if (this.count == this.sortedArray.length) {
                this.sorted = true;
            }
        }
        // console.log(this.sorted)
        // console.log(this.iSorted);
    }
}
BubbleSortComponent.ɵfac = function BubbleSortComponent_Factory(t) { return new (t || BubbleSortComponent)(); };
BubbleSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BubbleSortComponent, selectors: [["app-bubble-sort"]], inputs: { arrayToBeSorted: "arrayToBeSorted" }, decls: 22, vars: 2, consts: [[4, "ngIf"], ["align", "bottom", 1, "row"], [1, "col-md-8", "offset-md-2"], ["align", "center", 1, "text-align-center"], ["colspan", "3"], ["class", "bar", "id", "chan", "style", "width: 5px;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["id", "chan", 1, "bar", 2, "width", "5px", 3, "ngStyle", "ngClass"], ["class", "bar", "style", "width: 5px;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "bar", 2, "width", "5px", 3, "ngStyle"]], template: function BubbleSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BubbleSortComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BubbleSortComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Time Complexity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Best Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Average Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Worst Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u03A9(n) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u03B8(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " O(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sorted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sorted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".bar[_ngcontent-%COMP%]{\r\n    width:2px;\r\n    background-color: blue ;\r\n    display:inline-block;\r\n    position: relative;\r\n    margin-top: 5px;\r\n    margin-left:1px;\r\n    padding-left: 1px;\r\n    \r\n}\r\n.red-bar[_ngcontent-%COMP%] {\r\n    background-color: red ;\r\n  }\r\n.green-bar[_ngcontent-%COMP%] {\r\n    background-color: green ;\r\n  }\r\n.red-font[_ngcontent-%COMP%]{\r\n    color:red;\r\n  }\r\n.green-font[_ngcontent-%COMP%]{\r\n    color:green;\r\n  }\r\n\r\nth[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      text-align: center;\r\n      border:black solid 2px;\r\n  }\r\ntd[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      border: black solid 2px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnViYmxlLXNvcnQvYnViYmxlLXNvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7Ozs7R0FJRztBQUNIO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUdBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBRUY7SUFDSSx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7O0tBRUc7QUFDSDtNQUNJLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsc0JBQXNCO0VBQzFCO0FBQ0E7TUFDSSxZQUFZO01BQ1osdUJBQXVCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvYnViYmxlLXNvcnQvYnViYmxlLXNvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNjaGFydHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbn0gKi9cclxuLyogLmNvbnRhaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSAqL1xyXG4uYmFye1xyXG4gICAgd2lkdGg6MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgXHJcbn0gXHJcblxyXG5cclxuLnJlZC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIDtcclxuICB9XHJcbiAgXHJcbi5ncmVlbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gO1xyXG4gIH1cclxuICAucmVkLWZvbnR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfSBcclxuICAuZ3JlZW4tZm9udHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gIH0gXHJcbiAgLyogdGFibGV7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICB9ICovXHJcbiAgdGh7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXI6YmxhY2sgc29saWQgMnB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BubbleSortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bubble-sort',
                templateUrl: './bubble-sort.component.html',
                styleUrls: ['./bubble-sort.component.css']
            }]
    }], null, { arrayToBeSorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/insertion-sort/insertion-sort.component.ts":
/*!************************************************************!*\
  !*** ./src/app/insertion-sort/insertion-sort.component.ts ***!
  \************************************************************/
/*! exports provided: InsertionSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionSortComponent", function() { return InsertionSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { height: a0 }; };
const _c1 = function (a0, a1) { return { "red-bar": a0, "green-bar": a1 }; };
function InsertionSortComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const siz_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const j_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, siz_r3 * 0.8 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, i_r5 == ctx_r2.activeIndex1, j_r6 == ctx_r2.activeIndex2));
} }
function InsertionSortComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InsertionSortComponent_div_0_div_1_Template, 1, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.numarr)("ngForOf", ctx_r0.numarr);
} }
function InsertionSortComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const siz_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, siz_r8 * 0.8 + "px"));
} }
function InsertionSortComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InsertionSortComponent_div_1_div_1_Template, 1, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.rawData);
} }
class InsertionSortComponent {
    constructor() {
        this.title = 'SortingAlgorithm';
        this.rawData = [];
        this.numarr = [];
        this.activeIndex2 = 0;
        this.activeIndex1 = 0;
        this.sorted = false; // stores the status whether the array is sorted or not 
        this.count = 0; //counter while checking for equallity
    }
    ngOnInit() {
        this.simple = this.arrayToBeSorted;
        console.log("Array :" + this.simple);
        this.sort(this.setValue());
    }
    setValue() {
        const arrOfNum = [];
        for (let i = 0; i < 77; i++) {
            arrOfNum.push(this.randomIntFromInterval(5, 500));
        }
        return arrOfNum;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    sort(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.numarr = data;
            for (let i = 1; i < this.numarr.length; i++) {
                let key = this.numarr[i];
                let j = i - 1;
                while (j >= 0 && this.numarr[j] > key) {
                    this.activeIndex1 = key; //this is compared to others
                    this.activeIndex2 = j;
                    this.numarr[j + 1] = this.numarr[j];
                    j--;
                }
                yield new Promise(r => setTimeout(r, 25));
                this.numarr[j + 1] = key;
                // this.sortedArray=this.numarr;
            }
            this.sortedArray = this.numarr;
            this.isSorted(data);
            this.rawData = this.sortedArray;
            console.log("Insertion Size: " + this.sortedArray);
            return this.sortedArray;
        });
    }
    isSorted(data) {
        this.iSorted = data.sort((n1, n2) => n1 - n2);
        if (this.iSorted.length == this.sortedArray.length) {
            for (let i = 0; i < this.sortedArray.length; i++) {
                if (this.iSorted[i] == this.sortedArray[i]) {
                    this.count++;
                }
            }
            if (this.count == this.sortedArray.length) {
                this.sorted = true;
            }
        }
        console.log("Inserion" + this.sorted);
        console.log(this.iSorted);
    }
}
InsertionSortComponent.ɵfac = function InsertionSortComponent_Factory(t) { return new (t || InsertionSortComponent)(); };
InsertionSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InsertionSortComponent, selectors: [["app-insertion-sort"]], inputs: { arrayToBeSorted: "arrayToBeSorted" }, decls: 22, vars: 2, consts: [[4, "ngIf"], ["align", "bottom", 1, "row"], [1, "col-md-8", "offset-md-2"], ["align", "center", 1, "text-align-center"], ["colspan", "3"], ["class", "bar", "id", "chan", "style", "width: 5px;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["id", "chan", 1, "bar", 2, "width", "5px", 3, "ngStyle", "ngClass"], ["class", "bar", "style", "width: 5px;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "bar", 2, "width", "5px", 3, "ngStyle"]], template: function InsertionSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InsertionSortComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InsertionSortComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Time Complexity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Best Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Average Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Worst Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u03A9(n) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u03B8(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u03B8(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sorted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sorted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".bar[_ngcontent-%COMP%]{\r\n    width:2px;\r\n    background-color: blue ;\r\n    display:inline-block;\r\n    position: relative;\r\n    margin-top: 5px;\r\n    margin-left:1px;\r\n    padding-left: 1px;\r\n    \r\n}\r\n.red-bar[_ngcontent-%COMP%] {\r\n    background-color: red ;\r\n  }\r\n.green-bar[_ngcontent-%COMP%] {\r\n    background-color: green ;\r\n  }\r\n.red-font[_ngcontent-%COMP%]{\r\n    color:red;\r\n  }\r\n.green-font[_ngcontent-%COMP%]{\r\n    color:green;\r\n  }\r\n\r\nth[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      text-align: center;\r\n      border:black solid 2px;\r\n  }\r\ntd[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      border: black solid 2px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJ0aW9uLXNvcnQvaW5zZXJ0aW9uLXNvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7Ozs7R0FJRztBQUNIO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUdBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBRUY7SUFDSSx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7O0tBRUc7QUFDSDtNQUNJLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsc0JBQXNCO0VBQzFCO0FBQ0E7TUFDSSxZQUFZO01BQ1osdUJBQXVCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvaW5zZXJ0aW9uLXNvcnQvaW5zZXJ0aW9uLXNvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNjaGFydHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbn0gKi9cclxuLyogLmNvbnRhaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSAqL1xyXG4uYmFye1xyXG4gICAgd2lkdGg6MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgXHJcbn0gXHJcblxyXG5cclxuLnJlZC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIDtcclxuICB9XHJcbiAgXHJcbi5ncmVlbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gO1xyXG4gIH1cclxuICAucmVkLWZvbnR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfSBcclxuICAuZ3JlZW4tZm9udHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gIH0gXHJcbiAgLyogdGFibGV7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICB9ICovXHJcbiAgdGh7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXI6YmxhY2sgc29saWQgMnB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InsertionSortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-insertion-sort',
                templateUrl: './insertion-sort.component.html',
                styleUrls: ['./insertion-sort.component.css']
            }]
    }], null, { arrayToBeSorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/merge-sort/merge-sort.component.ts":
/*!****************************************************!*\
  !*** ./src/app/merge-sort/merge-sort.component.ts ***!
  \****************************************************/
/*! exports provided: MergeSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeSortComponent", function() { return MergeSortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MergeSortComponent {
    constructor() { }
    ngOnInit() {
    }
}
MergeSortComponent.ɵfac = function MergeSortComponent_Factory(t) { return new (t || MergeSortComponent)(); };
MergeSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MergeSortComponent, selectors: [["app-merge-sort"]], decls: 2, vars: 0, template: function MergeSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "merger-sort works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lcmdlLXNvcnQvbWVyZ2Utc29ydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MergeSortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-merge-sort',
                templateUrl: './merge-sort.component.html',
                styleUrls: ['./merge-sort.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/selection-sort/selection-sort.component.ts":
/*!************************************************************!*\
  !*** ./src/app/selection-sort/selection-sort.component.ts ***!
  \************************************************************/
/*! exports provided: SelectionSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSortComponent", function() { return SelectionSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { height: a0 }; };
const _c1 = function (a0, a1) { return { "red-bar": a0, "green-bar": a1 }; };
function SelectionSortComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const siz_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const j_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, siz_r3 * 0.8 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, i_r5 == ctx_r2.activeIndex1, j_r6 == ctx_r2.activeIndex2));
} }
function SelectionSortComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectionSortComponent_div_0_div_1_Template, 1, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.numarr)("ngForOf", ctx_r0.numarr);
} }
function SelectionSortComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const siz_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, siz_r8 * 0.8 + "px"));
} }
function SelectionSortComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectionSortComponent_div_1_div_1_Template, 1, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.rawData);
} }
class SelectionSortComponent {
    constructor() {
        this.rawData = [];
        this.numarr = [];
        this.activeIndex2 = 0;
        this.activeIndex1 = 0;
        this.sorted = false; // stores the status whether the array is sorted or not 
        this.count = 0; //counter while checking for equallity
    }
    ngOnInit() {
        this.simple = this.arrayToBeSorted;
        console.log("Array :" + this.simple);
        this.sort(this.setValue());
    }
    setValue() {
        const arrOfNum = [];
        for (let i = 0; i < 77; i++) {
            arrOfNum.push(this.randomIntFromInterval(5, 500));
        }
        return arrOfNum;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    sort(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.numarr = data;
            for (let i = 0; i < this.numarr.length; i++) {
                this.min_ind = i;
                for (let j = i + 1; j < this.numarr.length; j++) {
                    if (this.numarr[j] < this.numarr[this.min_ind]) {
                        // this.compareLeft = j;
                        this.activeIndex1 = i; //this is compared to others
                        this.activeIndex2 = j;
                        this.min_ind = j;
                    }
                    yield new Promise(r => setTimeout(r, 25));
                    // console.log("Selection: "+this.sortedArray);
                }
                let temp;
                temp = this.numarr[i];
                this.numarr[i] = this.numarr[this.min_ind];
                this.numarr[this.min_ind] = temp;
                this.sortedArray = this.numarr;
                this.rawData = this.numarr;
            }
            console.log("Selection3: " + this.sortedArray);
            this.isSorted(data);
            return this.sortedArray;
        });
    }
    isSorted(data) {
        this.iSorted = data.sort((n1, n2) => n1 - n2);
        console.log("Selection check 4:" + this.iSorted);
        if (this.iSorted.length == this.sortedArray.length) {
            for (let i = 0; i < this.sortedArray.length; i++) {
                if (this.iSorted[i] == this.sortedArray[i]) {
                    this.count++;
                }
            }
            if (this.count == this.sortedArray.length) {
                this.sorted = true;
            }
        }
        console.log("Selection check1: " + this.sorted);
        console.log("Selection check 2:" + this.iSorted);
    }
}
SelectionSortComponent.ɵfac = function SelectionSortComponent_Factory(t) { return new (t || SelectionSortComponent)(); };
SelectionSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectionSortComponent, selectors: [["app-selection-sort"]], inputs: { arrayToBeSorted: "arrayToBeSorted" }, decls: 22, vars: 2, consts: [[4, "ngIf"], ["align", "bottom", 1, "row"], [1, "col-md-8", "offset-md-2"], ["align", "center", 1, "text-align-center"], ["colspan", "3"], ["class", "bar", "id", "chan", "style", "width: 5px;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["id", "chan", 1, "bar", 2, "width", "5px", 3, "ngStyle", "ngClass"], ["class", "bar", "style", "width: 5px;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "bar", 2, "width", "5px", 3, "ngStyle"]], template: function SelectionSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SelectionSortComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectionSortComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Time Complexity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Best Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Average Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Worst Case ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u03A9(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u03B8(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " O(n^2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sorted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sorted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".bar[_ngcontent-%COMP%]{\r\n    width:2px;\r\n    background-color: blue ;\r\n    display:inline-block;\r\n    position: relative;\r\n    margin-top: 5px;\r\n    margin-left:1px;\r\n    padding-left: 1px;\r\n    \r\n}\r\n.red-bar[_ngcontent-%COMP%] {\r\n    background-color: red ;\r\n  }\r\n.green-bar[_ngcontent-%COMP%] {\r\n    background-color: green ;\r\n  }\r\n.red-font[_ngcontent-%COMP%]{\r\n    color:red;\r\n  }\r\n.green-font[_ngcontent-%COMP%]{\r\n    color:green;\r\n  }\r\n\r\nth[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      text-align: center;\r\n      border:black solid 2px;\r\n  }\r\ntd[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n      border: black solid 2px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0aW9uLXNvcnQvc2VsZWN0aW9uLXNvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7Ozs7R0FJRztBQUNIO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUdBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBRUY7SUFDSSx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7O0tBRUc7QUFDSDtNQUNJLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsc0JBQXNCO0VBQzFCO0FBQ0E7TUFDSSxZQUFZO01BQ1osdUJBQXVCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0aW9uLXNvcnQvc2VsZWN0aW9uLXNvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNjaGFydHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbn0gKi9cclxuLyogLmNvbnRhaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSAqL1xyXG4uYmFye1xyXG4gICAgd2lkdGg6MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgXHJcbn0gXHJcblxyXG5cclxuLnJlZC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIDtcclxuICB9XHJcbiAgXHJcbi5ncmVlbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gO1xyXG4gIH1cclxuICAucmVkLWZvbnR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfSBcclxuICAuZ3JlZW4tZm9udHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gIH0gXHJcbiAgLyogdGFibGV7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICB9ICovXHJcbiAgdGh7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXI6YmxhY2sgc29saWQgMnB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectionSortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-selection-sort',
                templateUrl: './selection-sort.component.html',
                styleUrls: ['./selection-sort.component.css']
            }]
    }], null, { arrayToBeSorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular projects\SortingAlgorithm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map