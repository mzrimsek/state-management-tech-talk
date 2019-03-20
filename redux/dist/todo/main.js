(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/counter/counter.component */ "./src/app/features/counter/counter.component.ts");
/* harmony import */ var _features_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/todo/todo.component */ "./src/app/features/todo/todo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'todo',
        component: _features_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]
    },
    {
        path: 'counter',
        component: _features_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"]
    },
    {
        path: '**',
        redirectTo: '/todo',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _features_counter_counter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/counter/counter.module */ "./src/app/features/counter/counter.module.ts");
/* harmony import */ var _features_todo_todo_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/todo/todo.module */ "./src/app/features/todo/todo.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reducers/root.reducer */ "./src/app/reducers/root.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _features_todo_todo_module__WEBPACK_IMPORTED_MODULE_9__["TodoModule"],
                _features_counter_counter_module__WEBPACK_IMPORTED_MODULE_8__["CounterModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_12__["reducers"]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot({
                    stateKey: 'router'
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]),
            ],
            providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStateSerializer"], useClass: _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_12__["CustomRouterStateSerializer"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <ul>\n    <li *ngFor=\"let route of routes\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: route.exact }\">\n      <a [routerLink]=\"route.router\">{{ route.caption }}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.routes = [
            {
                caption: 'Todos',
                router: ['todo'],
                exact: true
            },
            {
                caption: 'Counter',
                router: ['counter'],
                exact: true
            }
        ];
    }
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/features/counter/actions/count.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/counter/actions/count.actions.ts ***!
  \***********************************************************/
/*! exports provided: INCREMENT, Increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Increment", function() { return Increment; });
var INCREMENT = '[Count] Increment';
var Increment = /** @class */ (function () {
    function Increment() {
        this.type = INCREMENT;
    }
    return Increment;
}());



/***/ }),

/***/ "./src/app/features/counter/counter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/counter/counter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"counter\">\n  <button (click)=\"increment()\">CLICK ME</button>\n  {{ count$ | async }}\n</div>\n"

/***/ }),

/***/ "./src/app/features/counter/counter.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/features/counter/counter.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/counter/counter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/counter/counter.component.ts ***!
  \*******************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_count_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/count.actions */ "./src/app/features/counter/actions/count.actions.ts");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/root.reducer */ "./src/app/features/counter/reducers/root.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CounterComponent = /** @class */ (function () {
    function CounterComponent(store) {
        this.store = store;
        this.count$ = this.store.select(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"].count);
    }
    CounterComponent.prototype.increment = function () {
        this.store.dispatch(new _actions_count_actions__WEBPACK_IMPORTED_MODULE_2__["Increment"]());
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/features/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.scss */ "./src/app/features/counter/counter.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/features/counter/counter.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/counter/counter.module.ts ***!
  \****************************************************/
/*! exports provided: CounterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterModule", function() { return CounterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.component */ "./src/app/features/counter/counter.component.ts");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/root.reducer */ "./src/app/features/counter/reducers/root.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CounterModule = /** @class */ (function () {
    function CounterModule() {
    }
    CounterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('counter', _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_4__["reducers"])
            ]
        })
    ], CounterModule);
    return CounterModule;
}());



/***/ }),

/***/ "./src/app/features/counter/reducers/count.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/features/counter/reducers/count.reducer.ts ***!
  \************************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_count_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/count.actions */ "./src/app/features/counter/actions/count.actions.ts");

var initialState = {
    count: 0
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_count_actions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]: {
            return {
                count: state.count + 1
            };
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/features/counter/reducers/root.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/counter/reducers/root.reducer.ts ***!
  \***********************************************************/
/*! exports provided: reducers, _selectCounterState, _selectCount, _selectCurrentCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectCounterState", function() { return _selectCounterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectCount", function() { return _selectCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectCurrentCount", function() { return _selectCurrentCount; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _count_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count.reducer */ "./src/app/features/counter/reducers/count.reducer.ts");


var reducers = {
    count: _count_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var _selectCounterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('counter');
var _selectCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_selectCounterState, function (state) { return state.count; });
var _selectCurrentCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_selectCount, function (count) { return count.count; });
var counterSelectors = {
    count: _selectCurrentCount
};
/* harmony default export */ __webpack_exports__["default"] = (counterSelectors);


/***/ }),

/***/ "./src/app/features/todo/actions/todo.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/todo/actions/todo.actions.ts ***!
  \*******************************************************/
/*! exports provided: ADD_TODO, AddTodo, REMOVE_TODO, RemoveTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TODO", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTodo", function() { return RemoveTodo; });
var ADD_TODO = '[Todo] Add Todo';
var AddTodo = /** @class */ (function () {
    function AddTodo(text) {
        this.text = text;
        this.type = ADD_TODO;
    }
    return AddTodo;
}());

var REMOVE_TODO = '[Todo] Remove Todo';
var RemoveTodo = /** @class */ (function () {
    function RemoveTodo(id) {
        this.id = id;
        this.type = REMOVE_TODO;
    }
    return RemoveTodo;
}());



/***/ }),

/***/ "./src/app/features/todo/components/add-item/add-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/todo/components/add-item/add-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-item\">\n  <input type=\"text\"\n         placeholder=\"New Todo\"\n         #text>\n  <button (click)=\"emitAddItem(text)\">Add</button>\n</div>\n"

/***/ }),

/***/ "./src/app/features/todo/components/add-item/add-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/features/todo/components/add-item/add-item.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3RvZG8vY29tcG9uZW50cy9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/todo/components/add-item/add-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/todo/components/add-item/add-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddItemComponent = /** @class */ (function () {
    function AddItemComponent() {
        this.addItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddItemComponent.prototype.emitAddItem = function (textInput) {
        var text = textInput.value;
        textInput.value = '';
        this.addItem.emit({ text: text });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddItemComponent.prototype, "addItem", void 0);
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/features/todo/components/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.scss */ "./src/app/features/todo/components/add-item/add-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/features/todo/components/item/item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/todo/components/item/item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n  {{ item.text }}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/todo/components/item/item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/features/todo/components/item/item.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3RvZG8vY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/todo/components/item/item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/todo/components/item/item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/features/todo/components/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/features/todo/components/item/item.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/features/todo/reducers/items.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/todo/reducers/items.reducer.ts ***!
  \*********************************************************/
/*! exports provided: adapter, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/todo.actions */ "./src/app/features/todo/actions/todo.actions.ts");


var id = 0;
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
var initialState = adapter.getInitialState();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO"]: {
            var newTodo = {
                id: id++,
                text: action.text
            };
            return adapter.addOne(newTodo, state);
        }
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_TODO"]: {
            return adapter.removeOne(action.id, state);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/features/todo/reducers/root.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/features/todo/reducers/root.reducer.ts ***!
  \********************************************************/
/*! exports provided: reducers, _selectTodoState, _selectAllItems, _selectTodoItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectTodoState", function() { return _selectTodoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectAllItems", function() { return _selectAllItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectTodoItems", function() { return _selectTodoItems; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _items_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.reducer */ "./src/app/features/todo/reducers/items.reducer.ts");


var reducers = {
    items: _items_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var _selectTodoState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('todo');
var _selectItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_selectTodoState, function (state) { return state.items; });
var _selectAllItems = _items_reducer__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors(_selectItems).selectAll;
var _selectTodoItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_selectAllItems, function (entities) { return entities.map(function (entity) { return entity; }); });
var todoSelectors = {
    todoItems: _selectTodoItems
};
/* harmony default export */ __webpack_exports__["default"] = (todoSelectors);


/***/ }),

/***/ "./src/app/features/todo/todo.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/todo/todo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-item (addItem)=\"addItem($event)\"></app-add-item>\n<ul class=\"todos\">\n  <li class=\"todo\"\n      *ngFor=\"let item of (items$ | async)\">\n    <app-todo-item [item]=\"item\"></app-todo-item>\n    <button (click)=\"removeItem(item.id)\">Done</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/features/todo/todo.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/todo/todo.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/todo/todo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/todo/todo.component.ts ***!
  \*************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/todo.actions */ "./src/app/features/todo/actions/todo.actions.ts");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/root.reducer */ "./src/app/features/todo/reducers/root.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        this.store = store;
        this.items$ = this.store.select(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"].todoItems);
    }
    TodoComponent.prototype.addItem = function (event) {
        this.store.dispatch(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__["AddTodo"](event.text));
    };
    TodoComponent.prototype.removeItem = function (id) {
        this.store.dispatch(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveTodo"](id));
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/features/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/features/todo/todo.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/features/todo/todo.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/todo/todo.module.ts ***!
  \**********************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "./src/app/features/todo/components/add-item/add-item.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/features/todo/components/item/item.component.ts");
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo.component */ "./src/app/features/todo/todo.component.ts");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/root.reducer */ "./src/app/features/todo/reducers/root.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"], _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_3__["AddItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('todo', _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_6__["reducers"])
            ]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "./src/app/reducers/root.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/root.reducer.ts ***!
  \******************************************/
/*! exports provided: reducers, CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");

var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
};
var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomRouterStateSerializer;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mike.zrimsek\Documents\Apps\state-mangagement-tech-talk\redux\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map