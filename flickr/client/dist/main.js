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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav ul{\n    list-style: none;\n    padding-left: 5px;\n    display: flex;\n}\nnav ul li{\n    float: left;\n    width: 10%;\n    padding: 0;\n    text-transform: capitalize;\n    background: darkturquoise;\n    text-align: center;\n    margin: 5px;\n}\nnav ul li a{\n    text-decoration: none;\n    color:white;\n    display: block;\n    padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0NBQ2hCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5uYXYgdWwgbGl7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGJhY2tncm91bmQ6IGRhcmt0dXJxdW9pc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xufVxubmF2IHVsIGxpIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav>\n        <ul>\n          <li><a (click)=\"reload('/')\" routerLink=\"/\">flickr API</a></li>\n          <li><a (click)=\"reload('/dogs')\" routerLink=\"/dogs\">dogs API</a></li>\n        </ul>\n    </nav>\n  </header>\n\n<router-outlet></router-outlet>\n\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_module_route_module_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-module/route-module-routing.module */ "./src/app/route-module/route-module-routing.module.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(routerM) {
        this.routerM = routerM;
    }
    //reload function when clicked on same Nav item
    AppComponent.prototype.reload = function (uri) {
        this.routerM.redirectTo(uri);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_route_module_route_module_routing_module__WEBPACK_IMPORTED_MODULE_2__["RouteModuleRoutingModule"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.service */ "./src/app/feed.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _dogs_dogs_comp_dogs_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dogs/dogs-comp/dogs-comp.component */ "./src/app/dogs/dogs-comp/dogs-comp.component.ts");
/* harmony import */ var _route_module_route_module_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./route-module/route-module-routing.module */ "./src/app/route-module/route-module-routing.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _dogs_dogs_comp_dogs_comp_component__WEBPACK_IMPORTED_MODULE_8__["DogsCompComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _route_module_route_module_routing_module__WEBPACK_IMPORTED_MODULE_9__["RouteModuleRoutingModule"]
            ],
            providers: [_feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dogs/dogs-comp/dogs-comp.component.css":
/*!********************************************************!*\
  !*** ./src/app/dogs/dogs-comp/dogs-comp.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-wrapper{\n    max-width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n}\n.feed-wrapper--inner{\n    max-width: 25%;\n    margin:10px;\n    float: left;\n}\n.feed-wrapper--inner img{\n    max-width: 100%;\n}\n.dogFeed-button{\n    width:100%;\n}\n.dogFeed-wrapper button{\n    font-size: 1rem;\n    text-transform: capitalize;\n    margin: 5px;\n    cursor: pointer;\n}\n.feed-wrapper--descriptor{\n    margin-bottom: 10px;\n    margin-left: 5px;\n}\n#listView{\n    font-size: 1rem;\n}\n.loader{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kb2dzL2RvZ3MtY29tcC9kb2dzLWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoiYXBwL2RvZ3MvZG9ncy1jb21wL2RvZ3MtY29tcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtd3JhcHBlcntcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmVlZC13cmFwcGVyLS1pbm5lcntcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5mZWVkLXdyYXBwZXItLWlubmVyIGltZ3tcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZG9nRmVlZC1idXR0b257XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuLmRvZ0ZlZWQtd3JhcHBlciBidXR0b257XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mZWVkLXdyYXBwZXItLWRlc2NyaXB0b3J7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuI2xpc3RWaWV3e1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5sb2FkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dogs/dogs-comp/dogs-comp.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dogs/dogs-comp/dogs-comp.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'dogFeed-wrapper':show}\">\n  <div *ngIf=\"show\">\n      <div class=\"feed-wrapper--descriptor\">\n          <h3>Dogs API</h3>\n          <small><a href=\"https://dog.ceo/dog-api/\">from Dog Ceo</a></small>\n      </div>\n      <button *ngFor=\"let item of list; let i= index\" id='{{\"item\"+i}}' \n      [attr.data-pull]=\"item.ref\" (click)=clickPull(item.ref,item.entry)>\n        {{item.entry}}\n      </button>\n    </div>\n  <div *ngIf=\"show2\" class=\"feed-wrapper\">\n      <div class=\"feed-wrapper--descriptor\">\n          <h3>{{setTitle}} Images</h3>\n          <small><a href=\"https://dog.ceo/dog-api/\">from Dog Ceo</a></small>\n        </div>\n    <div class=\"dogFeed-button\">\n      \n        <input type=\"button\" id=\"listView\" value=\"Show List View\" (click)=\"reload()\" >\n      \n    </div>\n    <div *ngFor=\"let img of images;let i = index\" id=\"{{'img'+i}}\" class=\"feed-wrapper--inner\">\n      <img  src=\"{{img}}\">\n    </div>\n  </div>\n  <div class=\"loader\" *ngIf=\"loading\">\n      <img src='https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif'/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dogs/dogs-comp/dogs-comp.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dogs/dogs-comp/dogs-comp.component.ts ***!
  \*******************************************************/
/*! exports provided: DogsCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogsCompComponent", function() { return DogsCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../feed.service */ "./src/app/feed.service.ts");



var DogsCompComponent = /** @class */ (function () {
    function DogsCompComponent(feed) {
        this.feed = feed;
        this.list = [];
        this.show = true;
        this.show2 = false;
        this.setTitle = '';
        this.loading = false;
        this.images = [];
    }
    DogsCompComponent.prototype.enterList = function (el) {
        this.list.push(el);
    };
    DogsCompComponent.prototype.ngOnInit = function (key) {
        var _this = this;
        if (key === void 0) { key = ''; }
        this.loading = true;
        this.feed.getDogFeed(key).subscribe(function (post) {
            _this.list = [];
            var _loop_1 = function (key_1, value) {
                var build = {};
                if (value != '') {
                    var valMap = new Map(Object.entries(value));
                    valMap.forEach(function (el) {
                        var inner = {};
                        inner.entry = el + " " + key_1;
                        inner.ref = key_1 + "-" + el;
                        _this.enterList(inner);
                    });
                }
                else {
                    build.entry = "" + key_1;
                    build.ref = key_1;
                    _this.enterList(build);
                }
            };
            //console.log(post);
            for (var _i = 0, _a = Object.entries(post.message); _i < _a.length; _i++) {
                var _b = _a[_i], key_1 = _b[0], value = _b[1];
                _loop_1(key_1, value);
            }
            _this.loading = false;
        });
    };
    DogsCompComponent.prototype.clickPull = function (key, title) {
        var _this = this;
        if (key === void 0) { key = ''; }
        if (title === void 0) { title = ''; }
        this.setTitle = title.toUpperCase();
        this.loading = true;
        this.feed.getDogFeed(key).subscribe(function (post) {
            post.message.forEach(function (element) {
                _this.images.push(element);
            });
        }, function () { }, function () {
            _this.show2 = true;
            _this.loading = false;
        });
        this.show = false;
    };
    //reload page
    DogsCompComponent.prototype.reload = function () {
        location.reload();
    };
    DogsCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dogs-comp',
            template: __webpack_require__(/*! ./dogs-comp.component.html */ "./src/app/dogs/dogs-comp/dogs-comp.component.html"),
            styles: [__webpack_require__(/*! ./dogs-comp.component.css */ "./src/app/dogs/dogs-comp/dogs-comp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"]])
    ], DogsCompComponent);
    return DogsCompComponent;
}());



/***/ }),

/***/ "./src/app/feed.service.ts":
/*!*********************************!*\
  !*** ./src/app/feed.service.ts ***!
  \*********************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");







var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.getPosts = function (key) {
        if (key === void 0) { key = ''; }
        var url;
        // included localhost:3000 for running/testing sole Angular 6 app
        if (key) {
            url = "/app/tasks/flickr/" + key;
        }
        else {
            url = "/app/tasks/flickr";
        }
        return this.http.get(url)
            // Call map on the response observable to get the parsed object
            .map(function (res) { return res.json(); });
    };
    ;
    FeedService.prototype.getDogFeed = function (key) {
        if (key === void 0) { key = ''; }
        var url;
        // included localhost:3000 for running/testing sole Angular 6 app
        if (key) {
            url = "/app/tasks/dogs?key=" + key;
        }
        else {
            url = "/app/tasks/dogs";
        }
        return this.http.get(url)
            // Call map on the response observable to get the parsed object
            .map(function (res) { return res.json(); });
    };
    FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/app/route-module/route-module-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/route-module/route-module-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RouteModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModuleRoutingModule", function() { return RouteModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dogs_dogs_comp_dogs_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dogs/dogs-comp/dogs-comp.component */ "./src/app/dogs/dogs-comp/dogs-comp.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "./src/app/search/search.component.ts");






var routes = [
    { path: 'reload', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'dogs', component: _dogs_dogs_comp_dogs_comp_component__WEBPACK_IMPORTED_MODULE_3__["DogsCompComponent"] },
];
var RouteModuleRoutingModule = /** @class */ (function () {
    function RouteModuleRoutingModule(router) {
        this.router = router;
    }
    //redirect function when Nav item clicked when on same page
    RouteModuleRoutingModule.prototype.redirectTo = function (uri) {
        var _this = this;
        this.router.navigateByUrl('/reload', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([uri]);
        });
    };
    RouteModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload" })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteModuleRoutingModule);
    return RouteModuleRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form *{\n    font-size:1.5rem; \n}\n.feed-wrapper{\n    max-width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n}\n.feed-wrapper--inner{\n    max-width: 25%;\n    margin:10px;\n    float: left;\n}\n.feed-wrapper--descriptor{\n    margin-bottom: 10px;\n    margin-left: 5px;\n}\n.loader{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6ImFwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0gKntcbiAgICBmb250LXNpemU6MS41cmVtOyBcbn1cbi5mZWVkLXdyYXBwZXJ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZlZWQtd3JhcHBlci0taW5uZXJ7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uZmVlZC13cmFwcGVyLS1kZXNjcmlwdG9ye1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5sb2FkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-wrapper--descriptor\">\n    <h3>Flickr API</h3>\n    <small><a href=\"https://www.flickr.com/services/feeds/docs/photos_public/\">from Flickr</a></small>\n  </div>\n<form class=\"search-form\" (ngSubmit)=\"onSubmit()\" >\n  <label for=\"srch\">Search Keywords</label>\n  <input type=\"text\" id=\"srch\" name=\"srch\" [(ngModel)]=\"srch.key\">\n  <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n</form>\n<div class=\"loader\" *ngIf=\"loading\">\n    <img src='https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif'/>\n</div>\n<div class=\"feed-wrapper\" *ngIf=\"!loading\">\n    <div *ngFor=\"let item of build; let i= index\" id='{{\"item\"+i}}' class=\"feed-wrapper--inner\">\n      <img  class=\"feed-wrapper--inner--img\" src='{{item.media.m}}'/>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feed.service */ "./src/app/feed.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(feed) {
        this.feed = feed;
        this.srch = { key: '' };
        this.title = 'Feed Service';
        this.build = [];
        this.loading = false;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    SearchComponent.prototype.ngOnInit = function (key) {
        var _this = this;
        if (key === void 0) { key = ''; }
        this.loading = true;
        this.feed.getPosts(key).subscribe(function (post) {
            _this.build = [];
            post.items.forEach(function (elem) {
                _this.build.push(elem);
            });
            // console.log(this.build);
            _this.loading = false;
        });
    };
    SearchComponent.prototype.onSubmit = function () {
        if (this.srch.key !== '') {
            this.ngOnInit(this.srch.key);
        }
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"]])
    ], SearchComponent);
    return SearchComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jack/project/flickv7/flickr/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map