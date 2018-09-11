webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidemenuPageModule = /** @class */ (function () {
    function SidemenuPageModule() {
    }
    SidemenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */]),
            ],
        })
    ], SidemenuPageModule);
    return SidemenuPageModule;
}());

//# sourceMappingURL=sidemenu.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidemenuPage = /** @class */ (function () {
    function SidemenuPage(navCtrl, authProvider, appCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.appCtrl = appCtrl;
        this.pages = [];
        this.username = '';
    }
    SidemenuPage.prototype.ionViewWillEnter = function () {
        if (this.authProvider.isAdmin()) {
            this.pages = [
                { title: 'Admin Dashboard', page: 'HomePage', icon: 'home' },
                { title: 'Admin Second Page', page: 'HomePage', icon: 'planet' }
            ];
            this.openPage('HomePage');
        }
        else {
            this.pages = [
                { title: 'User Dashboard', page: 'HomePage', icon: 'home' },
                { title: 'User Second Page', page: 'HomePage', icon: 'planet' }
            ];
            this.openPage('HomePage');
        }
        this.username = this.authProvider.currentUser.name;
    };
    SidemenuPage.prototype.logout = function () {
        this.authProvider.logout();
        this.appCtrl.getRootNav().setRoot('LoginPage');
    };
    SidemenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    SidemenuPage.prototype.ionViewCanEnter = function () {
        return this.authProvider.isLoggedIn();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"E:\Hybrid\Salesforce\apocmobile\src\pages\sidemenu\sidemenu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n        <ion-icon item-start [name]="p.icon"></ion-icon>\n        {{ p.title }}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row align-items-center>\n        <ion-col>\n          {{ username }}\n        </ion-col>\n        <ion-col>\n          <button ion-button full clear icon-left (click)="logout()">\n            <ion-icon name="sign-out">\n            </ion-icon>\n            Logout\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #content main [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Hybrid\Salesforce\apocmobile\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], SidemenuPage);
    return SidemenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ })

});
//# sourceMappingURL=0.js.map