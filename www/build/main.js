webpackJsonp([11],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_forcejs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_forcejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_forcejs__);
/*
Contact Service Provider for extracting and storing Contacts from Salesforce against User

@imports
Injectables from angular/core
DataService from forcejs

@variables
Service type any;

@Funtions

prettifyContact
@desc prettify contact details in provided map.
@param  contact
@return contact object

findAll
@desc Find All function to find all the contact
@param
@return queried map results

findById
@desc Find All function to find all the contact
@param id -> contact ID
@return queried map results
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactServiceProvider = /** @class */ (function () {
    function ContactServiceProvider() {
        this.service = __WEBPACK_IMPORTED_MODULE_1_forcejs__["DataService"].getInstance();
    }
    ContactServiceProvider.prototype.prettifyContact = function (contact) {
        return {
            id: contact.Id,
            name: contact.Name,
            job_title: contact.Title,
            department: contact.Department,
            account_name: contact.AccountName,
            phone: contact.Phone,
            mobile: contact.MobilePhone,
            email: contact.Email
        };
    };
    ContactServiceProvider.prototype.findAllContacts = function () {
        var _this = this;
        return this.service.query('SELECT Id, Name, Title, Department, Account.Name, Phone, MobilePhone, Email  FROM Contact ORDER BY name')
            .then(function (response) {
            _this.responseData = response.records.map(_this.prettifyContact);
            return _this.responseData;
        });
    };
    ContactServiceProvider.prototype.findById = function (id) {
        return this.service.retrieve('Contact', id, 'Id, Name, Title, Department, Phone, MobilePhone, Email').then(this.prettifyContact);
    };
    ContactServiceProvider.prototype.searchFilteredContacts = function (filters, contacts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /*this.responseData=contacts.filter(function (el) {
              return (el.name.toLowerCase() == filters.firstName.toLowerCase() ||
                el.job_title.toLowerCase() == filters.jobTitle.toLowerCase() ||
                el.department.toLowerCase() == filters.department.toLowerCase() ||
                el.phone == filters.phone||
                el.mobile == filters.mobile ||
                el.email == filters.email ||
                el.account_name.toLowerCase() == filters.accountName.toLowerCase());
            });*/
            _this.responseData = [];
            /* for (var property in filters) {
               if (filters.hasOwnProperty(property)) {
                 this.responseData.push(contacts.filter(item => JSON.stringify(item).toLowerCase().indexOf(filters.hasOwnProperty(property).toLowerCase()) !== -1));
               }
             }*/
            /*  Object.keys(filters).forEach(function(key,index) {
                // key: the name of the object key
                // index: the ordinal position of the key within the object
                this.responseData.push(contacts.filter(item => item.toLowerCase().indexOf(item[key].toLowerCase()) !== -1));
              });
        
              var filterKeys = Object.keys(filters);
              this.responseData=contacts.filter(function (eachObj){
                return filterKeys.every(function (eachKey) {
                  if (!filters[eachKey].length) {
                    return true;
                  }
                  return filters[eachKey].includes(eachObj[eachKey]);
                });
              });*/
            console.log(_this.responseData);
            if (_this.responseData.length > 0) {
                resolve(_this.responseData);
            }
            else {
                console.log("No Contacts Found");
                reject();
            }
        });
    };
    ContactServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContactServiceProvider);
    return ContactServiceProvider;
}());

//# sourceMappingURL=contact-service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthProvider = /** @class */ (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.register = function (username, pin) {
        return new Promise(function (resolve, reject) {
            if (username !== null && pin !== null) {
                // set username and pin in localStorage
            }
        });
    };
    AuthProvider.prototype.login = function (name, pin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (pin === '1234') {
                _this.currentUser = {
                    name: name,
                    role: 0
                };
                resolve(true);
            }
            else if (pin === '1234') {
                _this.currentUser = {
                    name: name,
                    role: 1
                };
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.currentUser != null;
    };
    AuthProvider.prototype.isAdmin = function () {
        return this.currentUser.role === 0;
    };
    AuthProvider.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsFilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactsFilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsFilterModalPage = /** @class */ (function () {
    function ContactsFilterModalPage(navCtrl, navParams, alertCtrl, contactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.contactService = contactService;
        this.filter = {
            firstName: '',
            lastName: '',
            jobTitle: '',
            department: '',
            phone: '',
            mobile: '',
            email: '',
            accountName: ''
        };
        this.SearchContacts = this.navParams.get("searchContacts");
    }
    ContactsFilterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsFilterModalPage');
    };
    ContactsFilterModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ContactsFilterModalPage.prototype.IsEmptyObject = function (o) {
        return Object.keys(o).every(function (x) {
            return o[x] === '' || o[x] === null; // or just "return o[x];" for falsy values
        });
    };
    ContactsFilterModalPage.prototype.FilterContact = function () {
        if (this.IsEmptyObject(this.filter)) {
            console.log("all empty");
            var alert_1 = this.alertCtrl.create({
                title: 'Warning',
                message: 'Please type on any field to search specific contact',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.closeModal();
            this.SearchContacts(this.filter);
        }
    };
    ContactsFilterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts-filter-modal',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\contacts-filter-modal\contacts-filter-modal.html"*/'<!--\n  Generated template for the ContactsFilterModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="padding-left: 10px">\n        <img src="../../assets/imgs/filter.png"/>\n        <h2 class="inline-label">Filters</h2>\n    </ion-title>\n    <ion-buttons end>\n      <button class="close-btn" ion-button icon-only (click)="closeModal()">\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n<br>\n<ion-row>\n  <ion-col>\n    <ion-item class="item-has-input filter-input">\n      <ion-input clearInput type="text" text-left [(ngModel)]="filter.firstName" placeholder="Search by first name" ></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col>\n    <ion-item class="item-has-input filter-input">\n      <ion-input clearInput type="text" text-left [(ngModel)]="filter.lastName" placeholder="Search by last name"></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.jobTitle" placeholder="Search by job title" ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.department" placeholder="Search by department"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.phone" placeholder="Search by phone number" ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.mobile" placeholder="Search by mobile number"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.email" placeholder="Search by email" ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.accountName" placeholder="Search by account name"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n<br>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <button ion-button class="btn-login search-btn center" round (click)="FilterContact()">SEARCH</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n<style>\n  .modal-wrapper{\n    height: 425px!important;\n  }\n</style>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\contacts-filter-modal\contacts-filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__["a" /* ContactServiceProvider */]])
    ], ContactsFilterModalPage);
    return ContactsFilterModalPage;
}());

//# sourceMappingURL=contacts-filter-modal.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewContactPage = /** @class */ (function () {
    function NewContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewContactPage');
    };
    NewContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-contact',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\new-contact\new-contact.html"*/'<!--\n\n  Generated template for the NewContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>newContact</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\new-contact\new-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NewContactPage);
    return NewContactPage;
}());

//# sourceMappingURL=new-contact.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accounts/accounts.module": [
		449,
		10
	],
	"../pages/activities/activities.module": [
		450,
		9
	],
	"../pages/calendar/calendar.module": [
		451,
		8
	],
	"../pages/contacts-filter-modal/contacts-filter-modal.module": [
		452,
		7
	],
	"../pages/contacts/contacts.module": [
		453,
		6
	],
	"../pages/dashboard/dashboard.module": [
		454,
		5
	],
	"../pages/login/login.module": [
		455,
		2
	],
	"../pages/new-contact/new-contact.module": [
		456,
		4
	],
	"../pages/opportunities/opportunities.module": [
		457,
		3
	],
	"../pages/register/register.module": [
		458,
		1
	],
	"../pages/sidemenu/sidemenu.module": [
		459,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the NamefilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NamefilterPipe = /** @class */ (function () {
    function NamefilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    NamefilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // To search values only of "name" variable of your object(item)
        //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        // To search in values of every variable of your object(item)
        return items.filter(function (item) { return JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
    };
    NamefilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'nameFilter',
            pure: true
        })
    ], NamefilterPipe);
    return NamefilterPipe;
}());

//# sourceMappingURL=namefilter.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = /** @class */ (function () {
    function AccountsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsPage');
    };
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accounts',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\accounts\accounts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>ACCOUNTS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\accounts\accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-activities',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\activities\activities.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>ACTIVITIES</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\activities\activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\calendar\calendar.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CALENDAR</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_filter_modal_contacts_filter_modal__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams, contactService, modalCtrl, loadingCtrl, filterCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactService = contactService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.filterCtrl = filterCtrl;
        this.searchFilter = '';
        this.temp = [];
        this.mode = 'table';
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.mode = 'table';
    }
    /*openContacts(contact) {
      this.navCtrl.push(ContactDetailsPage, contact);
    }*/
    ContactsPage.prototype.OpenFiltersModal = function () {
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */], { searchContacts: this.SearchContact.bind(this) });
        filterModal.present();
    };
    ContactsPage.prototype.AddNewContactModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__["a" /* NewContactPage */]);
    };
    ContactsPage.prototype.FilterTableRows = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    ContactsPage.prototype.SearchContact = function (filters) {
        var _this = this;
        console.log(filters);
        this.loader.present();
        this.contactService.searchFilteredContacts(filters, this.contacts).then(function (data) {
            _this.contacts = data;
            _this.loader.dismiss();
        });
    };
    ContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ContactsPage');
        this.loader.present();
        this.contactService.findAllContacts().then(function (data) {
            _this.contacts = data;
            _this.rows = _this.contacts;
            _this.temp = _this.rows;
            _this.loader.dismiss();
        });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\contacts\contacts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CONTACTS</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="OpenFiltersModal()">\n          <img src="../../assets/imgs/filter.png"/>\n          <div class="subheader-icon-txt">Filters</div>\n        </button>\n      </ion-col>\n      <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="AddNewContactModal()">\n          <img src="../../assets/imgs/new.png"/>\n          <div class="subheader-icon-txt">New</div>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item class="item-has-input search-filter"  *ngIf="mode==\'grid\'">\n          <ion-input clearInput type="text" [(ngModel)]="searchFilter" text-left placeholder="Search Contact"></ion-input>\n          <ion-label item-right class="align-right label-img"><ion-icon name="search"></ion-icon></ion-label>\n        </ion-item>\n\n        <ion-item class="item-has-input search-filter"  *ngIf="mode==\'table\'">\n          <ion-input clearInput type="text" (keyup)=\'FilterTableRows($event)\' text-left placeholder="Search Contact"></ion-input>\n          <ion-label item-right class="align-right label-img"><ion-icon name="search"></ion-icon></ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid *ngIf="false">\n    <ion-row>\n    <ion-col col-md-4 *ngFor="let con of contacts| nameFilter:searchFilter">\n      <ion-card>\n        <ion-card-header>\n          <h2><b>{{con.name}}</b></h2>\n          <p><span>{{con.job_title}}</span><span *ngIf="con.department!=null"> | {{con.department}}</span></p>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-12 *ngIf="con.email!=null"><ion-icon name="mail"></ion-icon><span class="contacts-content">{{con.email}}</span></ion-col>\n            <ion-col col-12 *ngIf="con.email==null"><ion-icon name="mail"></ion-icon><span class="contacts-content">N/A</span></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 *ngIf="con.phone!=null"><ion-icon name="call"></ion-icon><span class="contacts-content">{{con.phone}}</span></ion-col>\n            <ion-col col-12 *ngIf="con.phone==null"><ion-icon name="call"></ion-icon><span class="contacts-content">N/A</span></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 *ngIf="con.mobile!=null"><ion-icon name="call"></ion-icon><span class="contacts-content">{{con.mobile}}</span></ion-col>\n            <ion-col col-12 *ngIf="con.mobile==null"><ion-icon name="call"></ion-icon><span class="contacts-content">N/A</span></ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div>\n    <!--<ngx-datatable class="material"\n                   [columnMode]="\'force\'"\n                   [headerHeight]="50"\n                   [footerHeight]="50"\n                   [rowHeight]="\'auto\'"\n      [rows]="rows"\n      [columns]="columns">\n    </ngx-datatable>-->\n    <ngx-datatable  #table [rows]="rows" [limit]="10" [columnMode]="\'force\'"\n                   [headerHeight]="50"\n                   [footerHeight]="50"\n                   [rowHeight]="\'auto\'">\n\n    <ngx-datatable-column [sortable]="true" name="Name">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Name</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.name}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [sortable]="true" name="Job Title">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Job Title</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.job_title}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [sortable]="true" name="Department">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Department</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.department}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [sortable]="true" name="Account">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Account</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.account_name}}\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column [sortable]="true" name="Email">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Email</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.email}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column [sortable]="true" name="Mobile">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Mobile</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.mobile}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column [sortable]="true" name="Phone">\n        <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>\n          <span (click)="sort()">Phone</span>\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.phone}}\n        </ng-template>\n      </ngx-datatable-column>\n\n     <!-- <ngx-datatable-column>\n        <ng-template let-column="column" ngx-datatable-header-template>\n          Fax\n        </ng-template>\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.fax}}\n        </ng-template>\n      </ngx-datatable-column>-->\n\n    </ngx-datatable>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\contacts\contacts.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__["a" /* ContactServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>APOC Mobile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OpportunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpportunitiesPage = /** @class */ (function () {
    function OpportunitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpportunitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpportunitiesPage');
    };
    OpportunitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opportunities',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\opportunities\opportunities.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>OPPORTUNITIES</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\opportunities\opportunities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], OpportunitiesPage);
    return OpportunitiesPage;
}());

//# sourceMappingURL=opportunities.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_contact_service_contact_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contacts_filter_modal_contacts_filter_modal__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_contact_new_contact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_namefilter_namefilter__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_datatable__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_contact_new_contact__["a" /* NewContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_18__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts-filter-modal/contacts-filter-modal.module#ContactsFilterModalPageModule', name: 'ContactsFilterModalPage', segment: 'contacts-filter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-contact/new-contact.module#NewContactPageModule', name: 'NewContactPage', segment: 'new-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opportunities/opportunities.module#OpportunitiesPageModule', name: 'OpportunitiesPage', segment: 'opportunities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            exports: [__WEBPACK_IMPORTED_MODULE_17__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_contact_new_contact__["a" /* NewContactPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_namefilter_namefilter__["a" /* NamefilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__providers_contact_service_contact_service__["a" /* ContactServiceProvider */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_forcejs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_forcejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_forcejs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        var oauth = __WEBPACK_IMPORTED_MODULE_4_forcejs__["OAuth"].createInstance();
        oauth.login("3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa")
            .then(function (oauthData) {
            __WEBPACK_IMPORTED_MODULE_4_forcejs__["DataService"].createInstance(oauthData, { proxyURL: "https://apoc--stage2.cs96.my.salesforce.com/" });
        });
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\apocmobile\src\app\app.html"*/'<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        //this.loadUsers()
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projects\apocmobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle left color="primary" outline>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!-- <ion-title>APOC Mobile</ion-title> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Force Starter</h3>\n\n  <p>\n\n    If you get lost, you can pull the repo form the\n\n    <a href="https://murtazaaunali@bitbucket.org/murtazaaunali/ionic-sfdc-starter.git">Repository</a>.\n\n  </p>\n\n  <h3>Sample Users</h3>\n\n  <p>Fetching Users to check SalesforceMobileSDK Plugin Response</p>\n\n  <ion-list>\n\n    <ion-item *ngFor="let user of users">\n\n      {{user.Name}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projects\apocmobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[274]);
//# sourceMappingURL=main.js.map