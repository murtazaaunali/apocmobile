webpackJsonp([0],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu__ = __webpack_require__(462);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opportunities_opportunities__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(272);
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
        this.settings = [];
        this.username = '';
    }
    SidemenuPage.prototype.ionViewWillEnter = function () {
        if (this.authProvider.isAdmin()) {
            this.pages = [
                { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */], icon: 'dashboard-icon.png' },
                { title: 'Accounts', component: __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__["a" /* AccountsPage */], icon: 'accounts-icon.png' },
                { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__["a" /* ContactsPage */], icon: 'contacts-icon.png' },
                { title: 'Opportunities', component: __WEBPACK_IMPORTED_MODULE_6__opportunities_opportunities__["a" /* OpportunitiesPage */], icon: 'opportunities-icon.png' },
                { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_3__activities_activities__["a" /* ActivitiesPage */], icon: 'activities-icon.png' },
                { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["a" /* CalendarPage */], icon: 'calendar-icon.png' }
            ];
            this.settings = [
                { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */], icon: 'settings-icon.png' },
                { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__["a" /* AccountsPage */], icon: 'help-icon.png' },
                { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__["a" /* ContactsPage */], icon: 'logout-icon.png' }
            ];
            this.openPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
        }
        else {
            this.pages = [
                { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */], icon: 'dashboard-icon.png' },
                { title: 'Accounts', component: __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__["a" /* AccountsPage */], icon: 'accounts-icon.png' },
                { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__["a" /* ContactsPage */], icon: 'contacts-icon.png' },
                { title: 'Opportunities', component: __WEBPACK_IMPORTED_MODULE_6__opportunities_opportunities__["a" /* OpportunitiesPage */], icon: 'opportunities-icon.png' },
                { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_3__activities_activities__["a" /* ActivitiesPage */], icon: 'activities-icon.png' },
                { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["a" /* CalendarPage */], icon: 'calendar-icon.png' }
            ];
            this.settings = [
                { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */], icon: 'settings-icon.png' },
                { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_5__accounts_accounts__["a" /* AccountsPage */], icon: 'help-icon.png' },
                { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__["a" /* ContactsPage */], icon: 'logout-icon.png' }
            ];
            this.openPage(__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* DashboardPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\sidemenu\sidemenu.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item class="profile-section">\n\n        <img src="../../assets/imgs/default-profile-inner.png" class="profile-image">\n\n        <h1 class="username">{{username}}</h1>\n\n        <h5 class="instance">APOC - Stage</h5>\n\n      </ion-item>\n\n      <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.component)">\n\n        <ion-img src="../../assets/imgs/{{p.icon}}" class="menu-icon"></ion-img>\n\n        <div class="text-menu-btn">{{ p.title }}</div>\n\n      </button>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-group>\n\n      <ion-item-divider color="light"></ion-item-divider>\n\n      <button ion-item detail-none block menuClose *ngFor="let s of settings" (click)="openPage(s.component)">\n\n        <ion-img src="../../assets/imgs/{{s.icon}}" class="menu-icon"></ion-img>\n\n        <div class="text-menu-btn"> {{ s.title }}</div>\n\n      </button>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          {{ username }}\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button full clear icon-left (click)="logout()">\n\n            <ion-icon name="sign-out">\n\n            </ion-icon>\n\n            Logout\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav #content main [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], SidemenuPage);
    return SidemenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ })

});
//# sourceMappingURL=0.js.map