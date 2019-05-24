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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quotes{\r\n\twidth: 50%;\r\n\ttext-align: center;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\np\r\n{\r\n\tfont-family: firasanz;\r\n  src: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n}\r\n.ten-1{\r\n\tcolor: #B5CDB9;\r\n\tmargin-top: 0px;\r\n\tmargin-bottom: 0px;\r\n\tfont-size: 40px;\r\n\tfont-style: italic bold;\r\n}\r\n.name{\r\n\tfont-size: 25px;\r\n}\r\n.photo{\r\n\theight: 150px;\r\n\t\r\n}\r\n.carosuel{\r\n\theight: 100px;\r\n\t\r\n}\r\n.carosuel p {\r\n\tfont-size: 22px;\r\n\tfont-family: firasanz!important;\r\n  \tsrc: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n  \tfont-style: italic;\r\n\r\n}\r\n.carousel-item {\r\n  /* Force to always be block */\r\n  display: block !important;\r\n  z-index: 1;\r\n  position: absolute;\r\n  -webkit-transform: translateX(100%);\r\n          transform: translateX(100%);\r\n  opacity: 0;\r\n  transition:all  0.2s;\r\n  visibility: hidden;\r\n}\r\n::ng-deep .carousel-item {\r\n  display: block !important;\r\n  position: absolute;\r\n  -webkit-transform: translateY(100%);\r\n          transform: translateY(100%);\r\n  opacity: 0;\r\n  transition:all  1s;\r\n}\r\n::ng-deep .carousel-indicators li {\r\n  background-color:black;\r\n  width: 5px;\r\n   height:  5px;\r\n   border-top-left-radius: 50% 50%;\r\n  border-top-right-radius: 50% 50%;\r\n  border-bottom-right-radius: 50% 50%;\r\n  border-bottom-left-radius: 50% 50%;\r\n}\r\n::ng-deep .carousel-item.active {\r\n  position: relative;\r\n  -webkit-transform: translateY(0);\r\n          transform: translateY(0);\r\n  opacity: 1;\r\n  top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjtBQUNBOztDQUVDLHFCQUFxQjtFQUNwQix5RUFBMkM7QUFDN0M7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGFBQWE7O0FBRWQ7QUFFQTtDQUNDLGFBQWE7O0FBRWQ7QUFDQTtDQUNDLGVBQWU7Q0FDZiwrQkFBK0I7R0FDN0IseUVBQTJDO0dBQzNDLGtCQUFrQjs7QUFFckI7QUFJQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7R0FDVCxZQUFZO0dBQ1osK0JBQStCO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsTUFBTTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZXN7XHJcblx0d2lkdGg6IDUwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbnBcclxue1xyXG5cdGZvbnQtZmFtaWx5OiBmaXJhc2FuejtcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9GaXJhU2Fucy1FeHRyYUxpZ2h0Lm90ZicpO1xyXG59XHJcbi50ZW4tMXtcclxuXHRjb2xvcjogI0I1Q0RCOTtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWMgYm9sZDtcclxufVxyXG4ubmFtZXtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5waG90b3tcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFxyXG59XHJcblxyXG4uY2Fyb3N1ZWx7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHRcclxufVxyXG4uY2Fyb3N1ZWwgcCB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdGZvbnQtZmFtaWx5OiBmaXJhc2FueiFpbXBvcnRhbnQ7XHJcbiAgXHRzcmM6IHVybCgnL2Fzc2V0cy9GaXJhU2Fucy1FeHRyYUxpZ2h0Lm90ZicpO1xyXG4gIFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgLyogRm9yY2UgdG8gYWx3YXlzIGJlIGJsb2NrICovXHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOmFsbCAgMC4ycztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjphbGwgIDFzO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgd2lkdGg6IDVweDtcclxuICAgaGVpZ2h0OiAgNXB4O1xyXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCUgNTAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCUgNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCUgNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJSA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0b3A6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"quotes\">\n\n\t<img src=\"assets/photo.png\" class=\"photo\" alt=\"Imagen\">\n\n\t<p class=\"name\">VERÓNICA GUTIERREZ</p>\n\n\t<p>Originally from Venezuela, now Halifax located. Veronica Gutierrez is a Professional Photography graduated from Nova Scotia Community College and with a Bachelor degree in Philosophy in University of Zulia. Her specialization is Boudoir Photography and Editorial. Her personal work touch topics such as life in transgender communities and the inevitable transformation of the being.\n\t</p>\n\t<p>Veronica has had two solo shows, “Panta Rei” at the Museum of Beauty Arts and “Hyperreality” at Lia Bermudez Center of Arts, both in Maracaibo, Venezuela.</p>     \n\t<p>Along with her Philosophy and literature background making her ideas visual is a most in her work.</p>                            \n\n<p class=\"ten-1\" >10 THINGS</p>\n<p ><b>YOU SHOULD KNOW ABOUT ME</b></p>\n\n  <ngb-carousel class=\"carosuel\" [showNavigationArrows] = \"false\">\n    <ng-template ngbSlide>\n      <p>Veronica never stops thinking about fried chicken.</p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>Veronica doesn’t discriminate with TV or movies, watching everything from independent foreign films to Jersey Shore.</p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>Veronica works in a bar and likes to show memes to her customers while they drink.\n      </p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>Veronica has a very strong connection with her family.</p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>When Veronica was a kid, she spent a lot of time under the table looking at people’s feet.\n      </p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>Most of Veronica’s inspiration comes from egon schiele, andrei tarkovsky and toulouse-Lautrec.</p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>Veronica travelled alone in the Argentinian jungle to visit the house of one of her favourite poets. </p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>When Veronica was young, she used to stick a film camera in people’s faces and demand to know about their day.</p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>Veronica hates machines and technology (even though she’s a photographer).</p>\n    </ng-template>\n    <ng-template ngbSlide>\n      <p>When she was sixteen, Veronica tried to make an animal shelter in her own home. (Her mom was not very happy about it.)</p>\n    </ng-template>\n  </ngb-carousel>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "./src/app/portafolio/portafolio.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/packages/packages.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");







var routes = [
    { path: '', component: _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__["PortafolioComponent"] },
    { path: 'packages', component: _packages_packages_component__WEBPACK_IMPORTED_MODULE_4__["PackagesComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vg-site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "./src/app/portafolio/portafolio.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/packages/packages.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"],
                _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__["PortafolioComponent"],
                _packages_packages_component__WEBPACK_IMPORTED_MODULE_9__["PackagesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borde {\r\n\tpadding-top: 20px;\t\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tborder:solid 1px black;\r\n\tpadding-left: 50px;\r\n\tmargin-top: 30px;\r\n}\r\n.borde2 {\r\n\tpadding-top: 20px;\t\r\n\twidth: 100%;\r\n\theight: 150px;\r\n\tborder:solid 1px black;\r\n\tpadding-left: 50px;\r\n\tmargin-top: 30px;\r\n\r\n}\r\n.buttona{\r\n\tmargin-top: 20px;\r\n\tpadding-top: 5px;\r\n\theight: 35px;\r\n\twidth: 25%;\r\n\tborder:solid 1px black;\r\n\tmargin-left: auto;\r\n  \tmargin-right: auto;\r\n  \ttext-align: center;\r\n}\r\n.buttona:hover  a { \r\n   color:white;\r\n\r\n}\r\n.buttona:hover { \r\n  background-color: black;\r\n  color:white;\r\n   cursor: pointer;  \r\n  \r\n}\r\n.form{\r\n\twidth: 60%;\r\n\tmargin-right: auto;\r\n\tmargin-left: auto;\r\n\t\r\n\tfont-family: firasanz!important;\r\n  src: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n\r\n}\r\n.input{\r\n\t background-color: white;\r\n  border: none;\r\n  width: 80%;\r\n  margin-right: auto;\r\n\tmargin-left: auto;\r\n\t -webkit-transform: translateY(-50%);\r\n\t         transform: translateY(-50%);\t\r\n\t -webkit-appearance: none;\r\n}\r\n.input2{\r\n\t background-color: white;\r\n  border: none;\r\n  width: 80%;\r\n  margin-right: auto;\r\n\tmargin-left: auto;\r\n\t -webkit-transform: translateY(-10%);\r\n\t         transform: translateY(-10%);\t\r\n\t -webkit-appearance: none;\r\n}\r\n.input:focus{\r\n\t border: none;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixnQkFBZ0I7O0FBRWpCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGlCQUFpQjtHQUNmLGtCQUFrQjtHQUNsQixrQkFBa0I7QUFDckI7QUFFQTtHQUNHLFdBQVc7O0FBRWQ7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0dBQ1YsZUFBZTs7QUFFbEI7QUFFQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsaUJBQWlCOztDQUVqQiwrQkFBK0I7RUFDOUIseUVBQTJDOztBQUU3QztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25CLGlCQUFpQjtFQUNoQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25CLGlCQUFpQjtFQUNoQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlIHtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcdFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRib3JkZXI6c29saWQgMXB4IGJsYWNrO1xyXG5cdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5ib3JkZTIge1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1x0XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHRib3JkZXI6c29saWQgMXB4IGJsYWNrO1xyXG5cdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbmF7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRwYWRkaW5nLXRvcDogNXB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHR3aWR0aDogMjUlO1xyXG5cdGJvcmRlcjpzb2xpZCAxcHggYmxhY2s7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25hOmhvdmVyICBhIHsgXHJcbiAgIGNvbG9yOndoaXRlO1xyXG5cclxufVxyXG4uYnV0dG9uYTpob3ZlciB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7ICBcclxuICBcclxufVxyXG5cclxuLmZvcm17XHJcblx0d2lkdGg6IDYwJTtcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHJcblx0Zm9udC1mYW1pbHk6IGZpcmFzYW56IWltcG9ydGFudDtcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9GaXJhU2Fucy1FeHRyYUxpZ2h0Lm90ZicpO1xyXG5cclxufVxyXG4uaW5wdXR7XHJcblx0IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1x0XHJcblx0IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0MntcclxuXHQgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XHRcclxuXHQgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5pbnB1dDpmb2N1c3tcclxuXHQgYm9yZGVyOiBub25lO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n    <div class=\"borde\">\n    \t<input type=\"text\" class=\"input\" placeholder=\"NAME\">\n    </div>\n     <div class=\"borde\">\n    \t<input type=\"text\" class=\"input\" placeholder=\"EMAIL\">\n    </div>\n    <div class=\"borde2\">\n    \t<textarea class=\"input2\" placeholder=\"YOUR MESSAGE\" cols=\"30\" rows=\"5\"></textarea>\n    </div>\n\n    <div class=\"buttona\">\n          \n            SEND\n         \n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-center{\r\nmax-height: 200px;\r\n display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 40px;\r\n}\r\n.container-image{\r\n\theight: 20%;\r\n\twidth: 100vw;\r\n}\r\n.icons{\r\n\r\n\tdisplay:scroll;\r\n    position:fixed;\r\n    top:10%;\r\n        right:50px;\r\n  \r\n\t\r\n}\r\n.icon{\r\n\tmax-width: 30px;\r\n\tmargin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCO0NBQ2hCLGNBQWM7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUVBOztDQUVDLGNBQWM7SUFDWCxjQUFjO0lBQ2QsT0FBTztRQUNILFVBQVU7OztBQUdsQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2VudGVye1xyXG5tYXgtaGVpZ2h0OiAyMDBweDtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5jb250YWluZXItaW1hZ2V7XHJcblx0aGVpZ2h0OiAyMCU7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uaWNvbnN7XHJcblxyXG5cdGRpc3BsYXk6c2Nyb2xsO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MTAlO1xyXG4gICAgICAgIHJpZ2h0OjUwcHg7XHJcbiAgXHJcblx0XHJcbn1cclxuLmljb257XHJcblx0bWF4LXdpZHRoOiAzMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-image\">\n\t\t<div class=\"center-image\">\n\t\t<img src=\"assets/file-icon.png\" class=\"img-center\" alt=\"aqui va el icono\">\n\t</div>\n\t<div class=\"icons\">\n\t\t<img src=\"assets/instagram-icon.jpg\" alt=\"icons-instagram\" class=\"icon\">\n\t\t<img src=\"assets/facebook-icon.jpg\" alt=\"icons-facebook\" class=\"icon\">\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/packages/packages.component.css":
/*!*************************************************!*\
  !*** ./src/app/packages/packages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-image{\r\n\twidth: 60%;\r\n\tmargin-left: auto;\r\n  \tmargin-right: auto;\r\n  \ttext-align: center;\r\n}\r\np{\r\n\r\n\tfont-family: firasanz!important;\r\n  src: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n\r\n}\r\na{\r\n\r\n\tfont-family: firasanz!important;\r\n  src: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n\r\n}\r\n.borde {\r\n\tpadding-top: 20px;\r\n\theight: 350px;\r\n\twidth: 100%;\r\n\tborder:solid 1px black;\r\n\r\n}\r\n.textop {\r\n\tfont-size: 22px;\r\n\ttext-decoration: underline;\r\n\r\n\tfont-family: firasanz!important;\r\n  src: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n\r\n}\r\n.textod{\r\n\tfont-size: 28px;\r\n}\r\n.buttona{\r\n\theight: 25px;\r\n\twidth: 70%;\r\n\tborder:solid 1px black;\r\n\tmargin-left: auto;\r\n  \tmargin-right: auto;\r\n}\r\n.buttona{\r\n\ttext-align: center;\r\n\tposition:absolute;\r\n\tbottom: 20px;\r\n\theight: 35px;\r\n\twidth: 70%;\r\n\tborder:solid 1px black;\r\n\tmargin-left: auto;\r\n  \tmargin-right: auto;  \r\n  \t -webkit-transform: translateX(15%);  \r\n  \t         transform: translateX(15%);\t\r\n}\r\n.buttona a{\r\n\r\n\tcolor:black;\r\n\ttext-decoration: none;\r\n}\r\n.buttona:hover  a { \r\n   color:white;  \r\n}\r\n.buttona:hover { \r\n  background-color: black;\r\n  color:white;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFja2FnZXMvcGFja2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7R0FDZixrQkFBa0I7R0FDbEIsa0JBQWtCO0FBQ3JCO0FBQ0E7O0NBRUMsK0JBQStCO0VBQzlCLHlFQUEyQzs7QUFFN0M7QUFDQTs7Q0FFQywrQkFBK0I7RUFDOUIseUVBQTJDOztBQUU3QztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsc0JBQXNCOztBQUV2QjtBQUNBO0NBQ0MsZUFBZTtDQUNmLDBCQUEwQjs7Q0FFMUIsK0JBQStCO0VBQzlCLHlFQUEyQzs7QUFFN0M7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFlBQVk7Q0FDWixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGlCQUFpQjtHQUNmLGtCQUFrQjtBQUNyQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osWUFBWTtDQUNaLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsaUJBQWlCO0dBQ2Ysa0JBQWtCO0lBQ2pCLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCO0FBQ0E7R0FDRyxXQUFXO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvcGFja2FnZXMvcGFja2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaW1hZ2V7XHJcblx0d2lkdGg6IDYwJTtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuICBcdG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5we1xyXG5cclxuXHRmb250LWZhbWlseTogZmlyYXNhbnohaW1wb3J0YW50O1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL0ZpcmFTYW5zLUV4dHJhTGlnaHQub3RmJyk7XHJcblxyXG59XHJcbmF7XHJcblxyXG5cdGZvbnQtZmFtaWx5OiBmaXJhc2FueiFpbXBvcnRhbnQ7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvRmlyYVNhbnMtRXh0cmFMaWdodC5vdGYnKTtcclxuXHJcbn1cclxuXHJcbi5ib3JkZSB7XHJcblx0cGFkZGluZy10b3A6IDIwcHg7XHJcblx0aGVpZ2h0OiAzNTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXI6c29saWQgMXB4IGJsYWNrO1xyXG5cclxufVxyXG4udGV4dG9wIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG5cdGZvbnQtZmFtaWx5OiBmaXJhc2FueiFpbXBvcnRhbnQ7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvRmlyYVNhbnMtRXh0cmFMaWdodC5vdGYnKTtcclxuXHJcbn1cclxuLnRleHRvZHtcclxuXHRmb250LXNpemU6IDI4cHg7XHJcbn1cclxuLmJ1dHRvbmF7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0Ym9yZGVyOnNvbGlkIDFweCBibGFjaztcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuICBcdG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbmF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGJvdHRvbTogMjBweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0d2lkdGg6IDcwJTtcclxuXHRib3JkZXI6c29saWQgMXB4IGJsYWNrO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIFx0bWFyZ2luLXJpZ2h0OiBhdXRvOyAgXHJcbiAgXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1JSk7XHRcclxufVxyXG4uYnV0dG9uYSBhe1xyXG5cclxuXHRjb2xvcjpibGFjaztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmJ1dHRvbmE6aG92ZXIgIGEgeyBcclxuICAgY29sb3I6d2hpdGU7ICBcclxufVxyXG4uYnV0dG9uYTpob3ZlciB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/packages/packages.component.html":
/*!**************************************************!*\
  !*** ./src/app/packages/packages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-image\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"borde\">\n        <span class=\"textop\">PREMIUM</span>\n        <br>\n        <p>\n        </p>\n        <br>\n        <p>\n          <span class=\"textod\">$300</span>\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n        <div class=\"buttona\">\n          <a href=\"about\">\n            CONTACT ME\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"borde\">\n        <span class=\"textop\">BASIC</span>\n        <br>\n        <p>\n        </p>\n        <br>\n        <p>\n          <span class=\"textod\">$200</span>\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n        \n        <div class=\"buttona\">\n          <a href=\"about\">\n            CONTACT ME\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"borde\">\n        <span class=\"textop\">SMALL</span>\n        <br>\n        <p>\n        </p>\n        <br>\n        <p>\n          <span class=\"textod\">$100</span>\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n        <p>\n          THIS\n        </p>\n       \n        <div class=\"buttona\">\n          <a href=\"about\">\n            CONTACT ME\n          </a>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/packages/packages.component.ts":
/*!************************************************!*\
  !*** ./src/app/packages/packages.component.ts ***!
  \************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PackagesComponent = /** @class */ (function () {
    function PackagesComponent() {
    }
    PackagesComponent.prototype.ngOnInit = function () {
    };
    PackagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__(/*! ./packages.component.html */ "./src/app/packages/packages.component.html"),
            styles: [__webpack_require__(/*! ./packages.component.css */ "./src/app/packages/packages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "./src/app/portafolio/portafolio.component.css":
/*!*****************************************************!*\
  !*** ./src/app/portafolio/portafolio.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-columns {\r\n  @include media-breakpoint-only(lg) {\r\n    -webkit-column-count: 4;\r\n       -moz-column-count: 4;\r\n            column-count: 4;\r\n  }\r\n  @include media-breakpoint-only(xl) {\r\n    -webkit-column-count: 5;\r\n       -moz-column-count: 5;\r\n            column-count: 5;\r\n  }\r\n}\r\n.card\r\n{\r\n\tborder: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUFlO09BQWYsb0JBQWU7WUFBZixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBZTtPQUFmLG9CQUFlO1lBQWYsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7O0NBRUMsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb2x1bW5zIHtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkobGcpIHtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KHhsKSB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgfVxyXG59XHJcbi5jYXJkXHJcbntcclxuXHRib3JkZXI6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/portafolio/portafolio.component.html":
/*!******************************************************!*\
  !*** ./src/app/portafolio/portafolio.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-columns\">\n    <div class=\"card\" *ngFor=\"let item of list\">\n      <img class=\"card-img-top img-fluid\" [src]=\"item.src\" alt=\"Imagen\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portafolio/portafolio.component.ts":
/*!****************************************************!*\
  !*** ./src/app/portafolio/portafolio.component.ts ***!
  \****************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortafolioComponent = /** @class */ (function () {
    function PortafolioComponent() {
        this.list = [];
    }
    PortafolioComponent.prototype.ngOnInit = function () {
        this.list.push({ src: 'assets/1.jpg' });
        this.list.push({ src: 'assets/2.jpg' });
        this.list.push({ src: 'assets/3.jpg' });
        this.list.push({ src: 'assets/4.jpg' });
        this.list.push({ src: 'assets/5.jpg' });
        this.list.push({ src: 'assets/6.jpg' });
    };
    PortafolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portafolio',
            template: __webpack_require__(/*! ./portafolio.component.html */ "./src/app/portafolio/portafolio.component.html"),
            styles: [__webpack_require__(/*! ./portafolio.component.css */ "./src/app/portafolio/portafolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortafolioComponent);
    return PortafolioComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{\r\n\t display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  text-align: center;\r\n list-style: none;\r\n  padding-top: 20px;\r\n padding-bottom: 35px\r\n}\r\n\r\nli a {\r\n\r\n\tfont-family: firasanz!important;\r\n  src: url('https://vgc-site.herokuapp.com/assets/FiraSans-ExtraLight.otf');\r\n\r\n font-size: 11px;\r\n text-decoration: none;\r\n color:#000000;\r\n padding-right: 40px;\r\n padding-left: 40px;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkIsZ0JBQWdCO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7O0FBRUE7O0NBRUMsK0JBQStCO0VBQzlCLHlFQUEyQzs7Q0FFNUMsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjs7RUFFakIiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51e1xyXG5cdCBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuIHBhZGRpbmctYm90dG9tOiAzNXB4XHJcbn1cclxuXHJcbmxpIGEge1xyXG5cclxuXHRmb250LWZhbWlseTogZmlyYXNhbnohaW1wb3J0YW50O1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL0ZpcmFTYW5zLUV4dHJhTGlnaHQub3RmJyk7XHJcblxyXG4gZm9udC1zaXplOiAxMXB4O1xyXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gY29sb3I6IzAwMDAwMDtcclxuIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcblxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n    <li class=\"dropdown\">\n    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\">\n        PORTFOLIO\n    </a>\n    <ul class=\"dropdown-menu\">\n        <li><a href=\"#\">PEOPLE</a></li>\n        <li><a href=\"#\">TRAVEL</a></li>\n        <li><a href=\"#\">CORPUS</a></li>\n        <li><a href=\"#\">STILL</a></li>\n    </ul>\n     <a href=\"packages\">\n        PACKAGES\n    </a>\n     <a href=\"about\">\n        ABOUT\n    </a>\n     <a href=\"contact\">\n        CONTACT\n    </a>\n    \n</li>\n\n</div>"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luis_mendez\Desktop\Silvia\vg-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map