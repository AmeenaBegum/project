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

/***/ "./src/app/all/all.component.css":
/*!***************************************!*\
  !*** ./src/app/all/all.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-left: 40px;\r\n    margin-top: 20px;\r\n   \r\n    \r\n}\r\n.col-3{\r\n    margin-bottom: 20px;\r\n    width: 120px;\r\n}"

/***/ }),

/***/ "./src/app/all/all.component.html":
/*!****************************************!*\
  !*** ./src/app/all/all.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n         <ng-container *ngFor=\"let list of lists; let i=index\">\n                <div class=\"col-3\">\n                    <div class=\"card\" style=\"width: 15rem;\">\n                        <img class=\"card-img-top\" [attr.src]= \"'http://localhost:8082/productapi/downloadFile?fileName='+list.imageName\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">{{list.imageName}}</h4>\n        \n                            <a href=\"productdetails\" class=\"btn btn-primary\">View</a>\n                        </div>\n                    </div>\n                </div>\n        </ng-container>        \n        <div *ngIf=\"(i+1) % 2 === 0\" class=\"w-100\"></div>\n        \n      \n </div>"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/*!**************************************!*\
  !*** ./src/app/all/all.component.ts ***!
  \**************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllComponent = /** @class */ (function () {
    // selectedRow: number;
    // showEdit : Boolean = false;
    function AllComponent(listService, router) {
        this.listService = listService;
        this.router = router;
        this.imageId = "";
        this.imageName = "";
        this.imageUrl = "";
        this.imagePath = "";
    }
    //   public getSantizeUrl(url : string) {
    //     return this.sanitizer.bypassSecurityTrustUrl(url);
    // }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.getData().subscribe(function (data) {
            _this.lists = data;
        });
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllComponent);
    return AllComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all/all.component */ "./src/app/all/all.component.ts");
/* harmony import */ var _displayproducts_displayproducts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayproducts/displayproducts.component */ "./src/app/displayproducts/displayproducts.component.ts");
/* harmony import */ var _deployproduct_deployproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deployproduct/deployproduct.component */ "./src/app/deployproduct/deployproduct.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'all',
        component: _all_all_component__WEBPACK_IMPORTED_MODULE_7__["AllComponent"]
    },
    {
        path: 'displayproducts',
        component: _displayproducts_displayproducts_component__WEBPACK_IMPORTED_MODULE_8__["DisplayproductsComponent"]
    },
    {
        path: 'deployproduct',
        component: _deployproduct_deployproduct_component__WEBPACK_IMPORTED_MODULE_9__["DeployproductComponent"]
    },
    {
        path: 'productdetails',
        component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__["ProductdetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

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
        this.title = 'User-UI-Angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all/all.component */ "./src/app/all/all.component.ts");
/* harmony import */ var _deployproduct_deployproduct_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deployproduct/deployproduct.component */ "./src/app/deployproduct/deployproduct.component.ts");
/* harmony import */ var _displayproducts_displayproducts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./displayproducts/displayproducts.component */ "./src/app/displayproducts/displayproducts.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _all_all_component__WEBPACK_IMPORTED_MODULE_13__["AllComponent"],
                _deployproduct_deployproduct_component__WEBPACK_IMPORTED_MODULE_14__["DeployproductComponent"],
                _displayproducts_displayproducts_component__WEBPACK_IMPORTED_MODULE_15__["DisplayproductsComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_16__["ProductdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_10__["Ng2CarouselamosModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/deployproduct/deployproduct.component.css":
/*!***********************************************************!*\
  !*** ./src/app/deployproduct/deployproduct.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deployproduct/deployproduct.component.html":
/*!************************************************************!*\
  !*** ./src/app/deployproduct/deployproduct.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div id=\"heading\">\n <h3>Deploy&nbsp;Products</h3>\n</div>\n\n<br>\n\n<div id=\"SelectField\">\n  <select class=\"form-control form-control-lg\">\n    <option value=\"\" selected disabled>Select to Deploy Product/Products</option>\n    <option (click)=\"Single()\">Deploy Single Product</option>\n    <option (click)=\"Multiple()\">Deploy Multiple Products</option>\n  </select>\n      \n</div>\n\n<br><br>\n<hr>\n<br>\n<div id=\"Form\" *ngIf=\"showSingle\">\n    <br>\n    <label>Image&nbsp;Upload<span id=\"required\">*</span></label>     \n    <br><br>\n    <div *ngIf=\"currentFileUpload\" class=\"progress\">\n      <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n        aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n        {{progress.percentage}}%</div>\n    </div>\n    <label class=\"btn btn-default\"> \n      <input type=\"file\" (change)=\"selectFile($event)\">\n    </label>\n    <button id=\"buttonUpload\" class=\"btn btn-info\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n    <br>\n    <form method=\"POST\" [formGroup]=\"deployProducts\" (ngSubmit)=\"deployProduct()\">\n      <div class=\"form-group\">\n        <label>Product&nbsp;Name<span id=\"required\">*</span></label>\n        <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"productName\" placeholder=\"Enter Product Name\" [(ngModel)]=\"product.productName\" formControlName='productName' />\n        <div *ngIf=\"deployProducts.controls['productName'].touched && !deployProducts.controls['productName'].valid\">\n          <div *ngIf=\"deployProducts.controls['productName'].hasError('required')\" id=\"alertDeploy\">\n            <span id=\"required\">Product Name is Required!</span>\n          </div>\n          <div *ngIf=\"deployProducts.controls['productName'].hasError('pattern')\" id=\"alertDeploy\">\n            <span id=\"required\">Invalid Product Name!</span>\n          </div>  \n        </div>\n      </div>\n      <br><br><br><br>\n  \n      <div class=\"form-group\">\n        <label>Product&nbsp;Type<span id=\"required\">*</span></label>\n        <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"productType\" placeholder=\"Enter Product Type\" [(ngModel)]=\"product.productType\" formControlName='productType'/>\n        <div *ngIf=\"deployProducts.controls['productType'].touched && !deployProducts.controls['productType'].valid\">\n          <div *ngIf=\"deployProducts.controls['productType'].hasError('required')\" id=\"alertDeploy\">\n            <span id=\"required\">Product Type is Required!</span>\n          </div>\n          <div *ngIf=\"deployProducts.controls['productType'].hasError('pattern')\" id=\"alertDeploy\">\n            <span id=\"required\">Invalid Product Type!</span>\n          </div>  \n        </div>\n      </div>\n      <br><br><br><br>\n\n      <div class=\"form-group\">\n          <label>Availability&nbsp;Location<span id=\"required\">*</span></label>\n          <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"availabilityLocation\" placeholder=\"Enter Availability Location of Product\" [(ngModel)]=\"product.availabilityLocation\" formControlName='availabilityLocation'/>\n          <div *ngIf=\"deployProducts.controls['availabilityLocation'].touched && !deployProducts.controls['availabilityLocation'].valid\">\n            <div *ngIf=\"deployProducts.controls['availabilityLocation'].hasError('required')\" id=\"alertDeploy\">\n              <span id=\"required\">Availability Location is Required!</span>\n            </div>\n            <div *ngIf=\"deployProducts.controls['availabilityLocation'].hasError('pattern')\" id=\"alertDeploy\">\n              <span id=\"required\">Invalid Availability Location!</span>\n            </div>  \n          </div>\n      </div>\n      <br><br><br><br>\n\n      <div class=\"form-group\">\n          <label>Description</label>\n          <textarea id=\"Fields_TextArea\" class=\"form-control\" name=\"productDescription\" rows=\"3\" placeholder=\"Enter Description of Product with minimum 150 characters\" [(ngModel)]=\"product.productDescription\" formControlName='productDescription'></textarea>\n          <div *ngIf=\"deployProducts.controls['productDescription'].touched && !deployProducts.controls['productDescription'].valid\">\n            <div *ngIf=\"deployProducts.controls['productDescription'].hasError('maxLength')\" id=\"alertDeploy\">\n              <span id=\"required\">Only 150 characters are allowed!</span>\n            </div>\n<!--             <div *ngIf=\"deployProducts.controls['productDescription'].hasError('pattern')\" id=\"alertDeploy\">\n              <span id=\"required\">Invalid Description!</span>\n            </div> -->  \n          </div>\n      </div>\n      <br><br><br><br><br><br>\n \n        <!-- <label>Image&nbsp;Upload<span id=\"required\">*</span></label>     \n          <br><br> -->\n          <!-- <image-upload [max]=\"1\" [buttonCaption]=\"'Select Image'\" [dropBoxMessage]=\"'Drop your image here!'\"\n          [clearButtonCaption]=\"'Remove'\" [class]=\"'customClass'\">\n          <input type=\"file\" class=\"form-control-file\" name=\"imageUpload\" accept=\"image/*\" [(ngModel)]=\"deployproduct.imageUpload\" formControlName='imageUpload'/>\n          <div *ngIf=\"deployProducts.controls['imageUpload'].touched && !deployProducts.controls['imageUpload'].valid\">\n            <div *ngIf=\"deployProducts.controls['imageUpload'].hasError('required')\" id=\"alertDeploy\">\n              <span id=\"required\">Product Image is Required!</span>\n            </div>\n          </div> \n          </image-upload>\n        <br> -->\n        <button id=\"button\" type=\"submit\" class=\"btn btn-success\" [disabled]='!deployProducts.valid'>Deploy</button>\n      </form>\n</div>\n\n<br>\n\n<!-- <div *ngIf=\"showMultiple\">\n  <form id=\"Form\" method=\"POST\" [formGroup]=\"deployProducts\" (ngSubmit)=\"deployProduct()\">\n      <div class=\"form-group\">\n          <label>Image&nbsp;Upload<span id=\"required\">*</span></label>     \n            <br><br>\n            <image-upload [max]=\"100\" [buttonCaption]=\"'Select Images'\" [dropBoxMessage]=\"'Drop your images here!'\"\n            [clearButtonCaption]=\"'Remove'\" [class]=\"'customClass'\">\n            <input type=\"file\" class=\"form-control-file\" name=\"imageUpload\" accept=\"image/*\"\n            [(ngModel)]=\"deployproduct.imageUpload\" formControlName='imageUpload'/>\n            <div *ngIf=\"deployProducts.controls['imageUpload'].touched && !deployProducts.controls['imageUpload'].valid\">\n              <div *ngIf=\"deployProducts.controls['imageUpload'].hasError('required')\" id=\"alert\">\n                <span id=\"required\">Product Image is Required!</span>\n              </div>\n            </div>\n            </image-upload>\n            <br>\n            <button id=\"button\" type=\"submit\" class=\"btn btn-success\" (click)=\"MultipleForm()\" >Upload</button> --><!-- [disabled]='!deployProducts.valid' -->   \n<!--       </div>\n  </form>\n</div>\n<br>\n<div *ngIf=\"showMultipleForm\">\n  <form>\n  <table class=\"table table-striped\">\n  <thead>          \n  <tr>\n  <th>#</th>\n  <th>Product&nbsp;Name</th>\n  <th>Product&nbsp;Type</th>\n  <th>Availability&nbsp;Location</th>\n  <th>Description</th>\n  <th>Image</th>\n  </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let i=index\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>\n          <input type=\"text\" name=\"productName\" placeholder=\"Enter Product Name\" />\n        </td>\n        <td>\n            <input type=\"text\" name=\"productName\" placeholder=\"Enter Product Name\" />\n        </td>\n        <td>\n            <input type=\"text\" name=\"productName\" placeholder=\"Enter Product Name\" />\n        </td>\n        <td>\n            <input type=\"text\" name=\"productName\" placeholder=\"Enter Product Name\" />\n        </td>\n        <td>\n            <input type=\"text\" name=\"productName\" placeholder=\"Enter Product Name\" />\n        </td>\n        <td>\n          <div class=\"img-ul-img\" style=\"background-image: url()\" ng-reflect-ng-style=\"[object Object]\">\n\n          </div>\n        </td>\n    </tr>\n  </tbody>\n  </table>\n  </form>\n</div>          \n<br> -->"

/***/ }),

/***/ "./src/app/deployproduct/deployproduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/deployproduct/deployproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: DeployproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployproductComponent", function() { return DeployproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/product */ "./src/app/shared/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeployproductComponent = /** @class */ (function () {
    function DeployproductComponent(formBuilder, router, deployProductService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.deployProductService = deployProductService;
        this.productName = "";
        this.productType = "";
        this.availabilityLocation = "";
        this.productDescription = "";
        this.progress = { percentage: 0 };
        this.showSingle = false;
        this.showMultiple = false;
        this.showMultipleForm = false;
        this.product = new _shared_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.deployProducts = formBuilder.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z][a-zA-Z]+')])],
            productType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z][a-zA-Z]+')])],
            availabilityLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z][a-zA-Z]+')])],
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150)])) /* ,Validators.pattern('[a-zA-Z][a-zA-Z.,!"\s]+') */
        });
    }
    DeployproductComponent.prototype.ngOnInit = function () {
    };
    DeployproductComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    DeployproductComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.deployProductService.fileUpload(this.currentFileUpload).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    };
    DeployproductComponent.prototype.Single = function () {
        this.showSingle = true;
        this.showMultiple = false;
        this.showMultipleForm = false;
    };
    DeployproductComponent.prototype.Multiple = function () {
        this.showMultiple = true;
        this.showSingle = false;
        this.showMultipleForm = false;
    };
    DeployproductComponent.prototype.MultipleForm = function () {
        this.showMultipleForm = true;
    };
    DeployproductComponent.prototype.deployProduct = function () {
        this.deployProductService.insertProduct(this.product)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        this.product = new _shared_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
    };
    DeployproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deployproduct',
            template: __webpack_require__(/*! ./deployproduct.component.html */ "./src/app/deployproduct/deployproduct.component.html"),
            styles: [__webpack_require__(/*! ./deployproduct.component.css */ "./src/app/deployproduct/deployproduct.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], DeployproductComponent);
    return DeployproductComponent;
}());



/***/ }),

/***/ "./src/app/displayproducts/displayproducts.component.css":
/*!***************************************************************!*\
  !*** ./src/app/displayproducts/displayproducts.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/displayproducts/displayproducts.component.html":
/*!****************************************************************!*\
  !*** ./src/app/displayproducts/displayproducts.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>ID</th>\n      <th>Image</th>\n      <th>Name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let list of lists; let i=index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{list.imageId}}</td>\n      <td>\n        <img [attr.src]= \"'http://localhost:8082/productapi/downloadFile?fileName='+list.imageName\" class=\"img-thumbnail\" style=\"height:100px;width: 200px\" />\n      </td>\n      <td>{{list.imageName}}</td>\n      <td>\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"onEdit(i,list,list.imageId)\">Edit</button>\n      </td>\n      <td>   \n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(i,vendor.vendorId)\">Delete</button>         \n      </td>\n</tr>\n</tbody>\n</table>\n          \n\n\n\n\n<!-- <div id=\"Form\" *ngIf=\"showEdit\">\n  <form name=\"Product_Update\" method=\"PUT\" [formGroup]=\"productUpdate\" (ngSubmit)=\"updateProduct(vendor.vendorId,vendor)\">\n    <div class=\"form-group\">\n      <label>imageName<span id=\"required\">*</span></label>\n      <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"vendorName\"  placeholder=\"Enter Vendor Name\" [(ngModel)]=\"vendor.imageName\" formControlName='imageName'/>\n      <div *ngIf=\"vendorRegistration.controls['vendorName'].touched && !vendorRegistration.controls['imageName'].valid\">\n        <div *ngIf=\"vendorRegistration.controls['vendorName'].hasError('required')\" id=\"alert\">\n          <span id=\"required\">Image Name is Required!</span>\n        </div>\n        <div *ngIf=\"vendorRegistration.controls['vendorName'].hasError('pattern')\" id=\"alert\">\n          <span id=\"required\">Invalid Name!</span>\n        </div>  \n      </div>\n    </div> \n    <br><br><br><br>\n\n      <div id=\"search_buttons\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]='!vendorRegistration.valid'>Update</button>\n        &nbsp;&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n      </div>\n    </form>\n</div>   -->"

/***/ }),

/***/ "./src/app/displayproducts/displayproducts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/displayproducts/displayproducts.component.ts ***!
  \**************************************************************/
/*! exports provided: DisplayproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayproductsComponent", function() { return DisplayproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayproductsComponent = /** @class */ (function () {
    function DisplayproductsComponent(listService, router, sanitizer) {
        this.listService = listService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.imageId = "";
        this.imageName = "";
        this.imageUrl = "";
        this.imagePath = "";
        this.showEdit = false;
    }
    DisplayproductsComponent.prototype.getSantizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    DisplayproductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.getData().subscribe(function (data) {
            _this.lists = data;
        });
    };
    DisplayproductsComponent.prototype.onEdit = function (index, list, imageId) {
        this.showEdit = true;
        this.selectedRow = index;
        this.list = list;
        this.list.imageId = imageId;
    };
    DisplayproductsComponent.prototype.editImage = function (imageId, list) {
        var _this = this;
        this.imageId = imageId;
        this.list = list;
        this.listService.editOneProduct(imageId, list)
            .subscribe(function (data) {
            _this.router.navigate(['/displayproducts', data]);
        }, function (error) { return console.log(error); });
    };
    DisplayproductsComponent.prototype.onDelete = function (index, imageId) {
        var _this = this;
        this.listService.deleteOneProduct(imageId)
            .subscribe(function () {
            _this.lists.splice(index, 1);
            console.log(imageId);
        });
    };
    DisplayproductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-displayproducts',
            template: __webpack_require__(/*! ./displayproducts.component.html */ "./src/app/displayproducts/displayproducts.component.html"),
            styles: [__webpack_require__(/*! ./displayproducts.component.css */ "./src/app/displayproducts/displayproducts.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], DisplayproductsComponent);
    return DisplayproductsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer>\r\n    <div id=\"footer-info\">\r\n     <p>Copyright 2018 CompanyName. All rights reserved. &nbsp;&nbsp;&nbsp;&nbsp;<a href=\"#\">Terms of Service</a> I <a href=\"#\">Privacy</a></p>\r\n    </div>\r\n</footer> -->\r\n\r\n\r\n<!-- Footer -->\r\n<footer class=\"page-footer font-small stylish-color-dark pt-4\">\r\n\r\n    <!-- Footer Links -->\r\n    <div class=\"container text-center text-md-left\">\r\n\r\n      <!-- Grid row -->\r\n      <div class=\"row\">\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-4 mx-auto\">\r\n\r\n          <!-- Content -->\r\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">About Us</h5>\r\n          <p>We provide our customers 100% pure and unique recipes and things made with locally\r\n            sourced produce. The authentic hometown flavours of our products\r\n        help our customers connect emotionally with their products. With our products people \r\n        don’t have to wait to visit the places to experience their unique offerings.</p>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <hr class=\"clearfix w-100 d-md-none\">\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mx-auto\">\r\n\r\n          <!-- Links -->\r\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\r\n\r\n          <ul class=\"list-unstyled\">\r\n            <li>\r\n              <a [routerLink]=\"['']\">Home</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['deployproduct']\">DeployProducts</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['displayproduct']\">Products</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#!\">Contact</a>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <hr class=\"clearfix w-100 d-md-none\">\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mx-auto\">\r\n\r\n          <!-- Links -->\r\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\r\n\r\n          <ul class=\"list-unstyled\">\r\n            <li>\r\n              <a [routerLink]=\"['register']\">VendorRegistration</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['placeregister']\">PlaceRegistration</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['foodregister']\">FoodRegistration</a>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <hr class=\"clearfix w-100 d-md-none\">\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mx-auto\">\r\n\r\n          <!-- Links -->\r\n          <h5 class=\"font-weight-bold text-uppercase mt-3 mb-4\">Links</h5>\r\n\r\n          <ul class=\"list-unstyled\">\r\n            <li>\r\n              <a [routerLink]=\"['search']\">VendorData</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['searchplace']\">PlaceData</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['searchfood']\">FoodData</a>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n      </div>\r\n      <!-- Grid row -->\r\n\r\n    </div>\r\n    <!-- Footer Links -->\r\n\r\n    <hr>\r\n\r\n    <!-- Call to action -->\r\n    <ul class=\"list-unstyled list-inline text-center py-2\">\r\n      <li class=\"list-inline-item\">\r\n        <h5 class=\"mb-1\">Register for free</h5>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a href=\"#!\" class=\"btn btn-danger btn-rounded\">Sign up!</a>\r\n      </li>\r\n    </ul>\r\n    <!-- Call to action -->\r\n\r\n    <hr>\r\n\r\n    <!-- Social buttons -->\r\n    <ul class=\"list-unstyled list-inline text-center\">\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"btn-floating btn-fb mx-1\">\r\n          <i class=\"fa fa-facebook\"> </i>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"btn-floating btn-tw mx-1\">\r\n          <i class=\"fa fa-twitter\"> </i>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"btn-floating btn-gplus mx-1\">\r\n          <i class=\"fa fa-google-plus\"> </i>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"btn-floating btn-li mx-1\">\r\n          <i class=\"fa fa-linkedin\"> </i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <!-- Social buttons -->\r\n\r\n    <!-- Copyright -->\r\n    <div id=\"Copyright\" class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n      <a href=\"http://localhost:4200/\"> NativeFood.com</a>\r\n    </div>\r\n    <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-light .navbar-nav .nav-link{\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img id=\"image\" alt=\"BackGroundImage\" src=\"/assets/images/BackgroundImage2.jpg\">\n</div>\n<!-- <div>\n    <img id=\"imageHeader\" alt=\"BackGroundImage\" src=\"/assets/images/cropped-1349-280-454233.jpg\">\n</div> -->    \n<div id=\"headerimage\">\n  <div class=\"wrapper\">\n    <h1>Native Food</h1>\n  </div>\n</div>\n<header>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <!-- <a class=\"navbar-brand\">NativeFood</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button> -->\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li ngbDropdown class=\"nav-item dropdown\">\n                <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Categories\n                </a>\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" [routerLink]=\"['all']\">all</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['sweets']\">Sweets</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['bakery']\">Bakery</a>\n                </div>\n              </li>\n\n         \n          <!-- <li ngbDropdown class=\"nav-item dropdown\">\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Vendor Configuration\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" [routerLink]=\"['vendoregister']\">Vendor Register</a>\n              <a class=\"dropdown-item\" [routerLink]=\"['placeregister']\">Place Register</a>\n              <a class=\"dropdown-item\" [routerLink]=\"['foodregister']\">Food Register</a>\n            </div>\n          </li> -->\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n         \n          <!-- <li ngbDropdown class=\"nav-item dropdown\">\n              <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                View Data\n              </a>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item\" [routerLink]=\"['search']\">Vendor Data</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['searchplace']\">Place Data</a>\n                <a class=\"dropdown-item\" [routerLink]=\"['searchfood']\">Food Data</a>\n              </div>\n          </li> -->\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['deployproduct']\">DeployProducts</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['displayproducts']\">Products</a>\n          </li> \n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['signup']\">SignUp</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\n          </li>\n          \n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n      </div>\n</nav>\n</header>"

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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    width: 100%;\r\n    margin: 5em auto;\r\n    padding: 0;\r\n    background:#ECF0F1;\r\n}\r\n\r\n.items {\r\n    max-width: 100%;\r\n    height:450px;\r\n    background:#ECECEC;\r\n}\r\n\r\n#left, #right { \r\n    margin: 30px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div ng2-carouselamos class=\"slides-wrapper\"\r\n          [items]=\"items\"\r\n          [width]=\"900\"\r\n          [$prev]=\"prev\"\r\n          [$next]=\"next\"\r\n          [$item]=\"item\"\r\n        >\r\n        <ng-template #prev>\r\n          <img src=\"../../assets/images/if_nav-arrow-left_383101.png\" id=\"left\" />\r\n        </ng-template>\r\n        <ng-template #next>\r\n          <img src=\"../../assets/images/if_nav-arrow-right_383100.png\" id=\"right\" />\r\n        </ng-template>\r\n        <ng-template #item let-item let-i=\"index\">      \r\n          <div class=\"items\">\r\n            <img src=\"{{ item.name }}\">\r\n          </div>\r\n        </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

/* import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
 */
var HomeComponent = /** @class */ (function () {
    /* form: FormGroup;
    orders = [
      { id: 100, name: 'order 1' },
      { id: 200, name: 'order 2' },
      { id: 300, name: 'order 3' },
      { id: 400, name: 'order 4' }
    ]; */
    function HomeComponent() {
        this.items = [];
        /* const controls = this.orders.map(c => new FormControl(false));
        controls[0].setValue(true);
    
        this.form = this.formBuilder.group({
          orders: new FormArray(controls, minSelectedCheckboxes(1))
        }); */
        this.items = [
            { name: '../../assets/images/1.jpeg' },
            { name: '../../assets/images/2.jpeg' },
            { name: '../../assets/images/3.jpeg' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

/* function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
} */ 


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\r\n    vertical-align: middle;\r\n     height: 50px;\r\n    border-radius: 50%;\r\n    width:200px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n  <h2 id=\"heading\">LOGIN</h2> \n  </div>\n<div id=\"Form\">\n  <form name=\"login_Form\" method=\"POST\" [formGroup]=\"loginForm\" (ngSubmit)=\"saveLogin()\">\n    <label>Email<span id=\"required\">*</span></label>\n      <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"userEmail\" placeholder=\"Enter User Email\" [(ngModel)]=\"ulogin.userEmail\" formControlName='userEmail' />\n      <div *ngIf=\"loginForm.controls['userEmail'].touched && !loginForm.controls['userEmail'].valid\">\n      <div *ngIf=\"loginForm.controls['userEmail'].hasError('required')\" id=\"alert\">\n      <span id=\"required\">Email is Required!</span>\n      </div>\n      <div *ngIf=\"loginForm.controls['userEmail'].hasError('pattern')\" id=\"alert\">\n      <span id=\"required\">Invalid Email!</span>\n      </div>\n \n      </div>\n      <br><br>\n           \n      <div class=\"form-group\">\n      <label>Password<span id=\"required\">*</span></label>\n      <input id=\"Fields\" class=\"form-control\" type=\"password\" name=\"userPassword\" placeholder=\"Enter Password\" [(ngModel)]=\"ulogin.userPassword\" formControlName='userPassword' />\n      <div *ngIf=\"loginForm.controls['userPassword'].touched && !loginForm.controls['userPassword'].valid\">\n      <div *ngIf=\"loginForm.controls['userPassword'].hasError('required')\" id=\"alert\">\n      <span id=\"required\">Password is Required!</span>\n      </div>\n      <div *ngIf=\"loginForm.controls['userPassword'].hasError('pattern')\" id=\"alert\">\n      <span id=\"required\">Invalid Password!</span>\n      </div>\n      </div>\n      </div>\n      <br><br>  \n\n\n      \n    <div class=\"form-group\">\n      <label>User Type<span id=\"required\">*</span></label>\n      <select id=\"Fields\" class=\"form-control\" name=\"userType\" [(ngModel)]=\"ulogin.userType\" formControlName='userType'>\n        <option value=\"\" selected disabled>Select</option>\n        <option value=\"user\">user</option>\n        <option value=\"admin\">admin</option>\n      </select>\n      <div *ngIf=\"loginForm.controls['userType'].touched && !loginForm.controls['userType'].valid\">\n        <div *ngIf=\"loginForm.controls['userType'].hasError('required')\" id=\"alert\">\n          <span id=\"required\">User Type is Required!</span>\n        </div>\n      </div>\n    </div>\n    <br><br><br>\n\n      <nav>\n          <a [routerLink]=\"['/success']\"> \n          <button id=\"button\" class=\"btn btn-primary\" type=\"submit\">Submit</button></a>\n          </nav>\n    \n              <!-- <button class=\"btn btn-primary\" >Submit</button></a> -->\n              <!-- <button id=\"button\" type=\"submit\" [disabled]='!loginForm.valid'>Submit</button>     -->\n    </form>\n    </div>\n    <br>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_ulogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/ulogin.service */ "./src/app/shared/services/ulogin.service.ts");
/* harmony import */ var _shared_ulogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ulogin */ "./src/app/shared/ulogin.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(frmbuilder, router, uloginService) {
        this.frmbuilder = frmbuilder;
        this.router = router;
        this.uloginService = uloginService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
        this.ulogin = new _shared_ulogin__WEBPACK_IMPORTED_MODULE_4__["Ulogin"]();
        this.MSCredentials = { userEmail: '', userPassword: '', userType: '' };
        this.loginForm = frmbuilder.group({
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])],
            userPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //   saveLogin()
    //   {
    //     this.uloginService.create(this.ulogin)
    //     .subscribe(data =>
    //       {
    //         this.router.navigate(['/success',data]);
    //       }, error => console.log(error));
    //     this.ulogin = new Ulogin(); 
    //   }
    // }
    LoginComponent.prototype.saveLogin = function () {
        var _this = this;
        this.app.authenticate(this.credentials, function () {
            _this.router.navigateByUrl('/');
        });
        false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_ulogin_service__WEBPACK_IMPORTED_MODULE_3__["UloginService"]])
    ], LoginComponent);
    return LoginComponent;
}());

// saveLogin()
// if(this.uloginService.userEmail, this.ulogin.userPassword) {
//   this.loading = true;
//   this.userService.login(this.user.userEmail, this.user.userPassword)
//   .subscribe((res: any) =>  {
//            this.loader = false;
//            //check your condition here and redirect to 
//       },
//        (error) => {
//           this.loader = false; 
//     });
//     }
//  }


/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  margin-top: 20px\r\n}\r\n.product-description{\r\n    margin-left: 120%;\r\n    display: inline-block\r\n}\r\n.cart-dropdown{\r\n   margin-left: 100%;\r\n}\r\n.card-img-top{\r\n  padding-left: 50px;\r\n  width: 70%;\r\n  height: 80%;\r\n  \r\n}"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n        <h3>product-description</h3>\n      </div>\n      <hr>\n      <br>\n      <div class=\"carts-body-container row\">\n        <div class=\"cart-product-container container row\" *ngFor=\"let list of lists; let i=index\">\n          <div class=\"col-md-5\">\n                <img class=\"card-img-top\" [attr.src]= \"http://localhost:8082/productapi/products/59c0f9cf-17e2-47ec-9e02-1993c8832ae9\" alt=\"Card image cap\">\n            \n          </div>\n          <div class=\"product-desc col-md-3\">\n                <h4 class=\"card-title\">{{list.imageName}}</h4> \n            \n          </div>\n          \n        </div> \n      </div>\n      \n     \n      \n      \n      \n      \n\n\n\n\n\n<!-- <div class=\"col-3\">  \n    <ng-container *ngFor=\"let list of lists; let i=index\">\n  <div class=\"card\" style=\"width: 15rem;\">\n      <img class=\"card-img-top\" [attr.src]= \"'http://localhost:8082/productapi/downloadFile?fileName='+list.imageName\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n          <h4 class=\"card-title\">{{list.imageName}}</h4> \n          <div class=\"product-description\">\n            <p>ddbdjdvbnvbdvbhvfddddddddbbbbbbbbbbbbbbbbbbbbbddddsddddddd\n               dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n               dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\n               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n            </p>\n          </div>\n          \n      </div>\n      \n  </div>\n  </ng-container>\n  <br>\n  <div>\n  <a href=\"\" class=\"btn btn-primary\">Add to bag</a>\n  </div>\n  <br>\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent(listService, router) {
        this.listService = listService;
        this.router = router;
        this.imageId = "";
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.findByImageId(this.imageId).subscribe(function (data) {
            _this.lists = data;
        });
    };
    ProductdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/product.ts":
/*!***********************************!*\
  !*** ./src/app/shared/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = '//localhost:8082/productapi/';
    }
    ProductService.prototype.fileUpload = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.baseUrl + 'post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    ProductService.prototype.insertProduct = function (product) {
        return this.http.post(this.baseUrl + "/products/create", product);
    };
    // getAllProducts():Observable<any> {
    //   return this.http.get(this.baseUrl+'products');
    // }
    // getOneProduct(productId: string){
    //   return this.http.get(this.baseUrl+'products/'+productId);
    // }
    ProductService.prototype.findByImageId = function (imageId) {
        console.log(imageId);
        return this.http.get(this.baseUrl + 'products/' + imageId);
    };
    ProductService.prototype.editOneProduct = function (productId, product) {
        return this.http.put(this.baseUrl + 'products/' + productId, product);
    };
    ProductService.prototype.deleteOneProduct = function (productId) {
        return this.http.delete(this.baseUrl + 'products/' + productId);
    };
    ProductService.prototype.deleteAllProducts = function () {
        return this.http.delete(this.baseUrl + 'products/delete');
    };
    ProductService.prototype.getData = function () {
        return this.http.get(this.baseUrl + 'getData');
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/ulogin.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/ulogin.service.ts ***!
  \***************************************************/
/*! exports provided: UloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UloginService", function() { return UloginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UloginService = /** @class */ (function () {
    function UloginService(http) {
        this.http = http;
        this.baseUrl = '//localhost:8091/userapp';
    }
    UloginService.prototype.create = function (ulogin) {
        return this.http.post(this.baseUrl + "/login/create", ulogin);
    };
    UloginService.prototype.userLogin = function (ulogin) {
        return this.http.post(this.baseUrl + "/login/userLogin", ulogin);
    };
    UloginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UloginService);
    return UloginService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = '//localhost:8091/userapi/';
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.baseUrl + "user/create", user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/ulogin.ts":
/*!**********************************!*\
  !*** ./src/app/shared/ulogin.ts ***!
  \**********************************/
/*! exports provided: Ulogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ulogin", function() { return Ulogin; });
var Ulogin = /** @class */ (function () {
    function Ulogin() {
    }
    return Ulogin;
}());



/***/ }),

/***/ "./src/app/shared/user.ts":
/*!********************************!*\
  !*** ./src/app/shared/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n    <h2 id=\"heading\">REGISTRATION</h2> \n</div>\n<div id=\"Form\">\n    <form name=\"user_Registration\" method=\"POST\" [formGroup]=\"userRegistration\" (ngSubmit)=\"saveUser()\">\n <div class=\"form-group\">\n    <label>Fisrt Name<span id=\"required\">*</span></label>\n    <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"firstName\" placeholder=\"Enter First Name\" [(ngModel)]=\"user.firstName\" formControlName='firstName'/>\n <div *ngIf=\"userRegistration.controls['firstName'].touched && !userRegistration.controls['firstName'].valid\">\n  <div *ngIf=\"userRegistration.controls['firstName'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">First Name is Required!</span>\n  </div>\n  <div *ngIf=\"userRegistration.controls['firstName'].hasError('pattern')\" id=\"alert\">\n    <span id=\"required\">Invalid First Name!</span>\n</div> \n    </div>\n    </div> \n    <br>\n    \n    <div class=\"form-group\">\n    <label>Last Name<span id=\"required\">*</span></label>\n    <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"lastName\" placeholder=\"Enter last Name\" [(ngModel)]=\"user.lastName\" formControlName='lastName'/>\n    <div *ngIf=\"userRegistration.controls['lastName'].touched && !userRegistration.controls['lastName'].valid\">\n    <div *ngIf=\"userRegistration.controls['lastName'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">Last Name is Required!</span>\n    </div>\n    <div *ngIf=\"userRegistration.controls['lastName'].hasError('pattern')\" id=\"alert\">\n    <span id=\"required\">Invalid Last Name!</span>\n    </div>\n    </div>\n    </div>\n    <br>\n    <!-- \n    <div class=\"form-group\">\n    <label>City<span id=\"required\">*</span></label>\n    <select id=\"Fields\" class=\"form-control\" name=\"vendorStoreCity\" [(ngModel)]=\"vendor.vendorStoreCity\" formControlName='vendorStoreCity'>\n    <option value=\"\" selected disabled>Select City</option>\n    <option value=\"Hyderabad\">Hyderabad</option>\n    <option value=\"Warangal\">Warangal</option>\n    <option value=\"Karimnagar\">Karimnagar</option>\n    <option value=\"Nizamabad\">Nizamabad</option>\n    </select>\n    <div *ngIf=\"vendorRegistration.controls['vendorStoreCity'].touched && !vendorRegistration.controls['vendorStoreCity'].valid\">\n    <div *ngIf=\"vendorRegistration.controls['vendorStoreCity'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">City is Required!</span>\n    </div>\n    </div>\n    </div>\n    <br><br><br><br>\n    --> \n    <div class=\"form-group\">\n    <label>Email<span id=\"required\">*</span></label>\n    <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"userEmail\" placeholder=\"Enter User Email\" [(ngModel)]=\"user.userEmail\" formControlName='userEmail' />\n    <div *ngIf=\"userRegistration.controls['userEmail'].touched && !userRegistration.controls['userEmail'].valid\">\n    <div *ngIf=\"userRegistration.controls['userEmail'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">Email is Required!</span>\n    </div>\n    <div *ngIf=\"userRegistration.controls['userEmail'].hasError('pattern')\" id=\"alert\">\n    <span id=\"required\">Invalid Email!</span>\n    </div>\n    </div>\n    </div>\n    <br>\n    \n    \n    <div class=\"form-group\">\n    <label>Password<span id=\"required\">*</span></label>\n    <input id=\"Fields\" class=\"form-control\" type=\"password\" name=\"userPassword\" placeholder=\"Enter Password\" [(ngModel)]=\"user.userPassword\" formControlName='userPassword' />\n    <div *ngIf=\"userRegistration.controls['userPassword'].touched && !userRegistration.controls['userPassword'].valid\">\n    <div *ngIf=\"userRegistration.controls['userPassword'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">Password is Required!</span>\n    </div>\n    <div *ngIf=\"userRegistration.controls['userPassword'].hasError('pattern')\" id=\"alert\">\n    <span id=\"required\">Invalid Password!</span>\n    </div>\n    </div>\n    </div>\n    <br>\n\n    <div class=\"form-group\">\n        <label>User Type<span id=\"required\">*</span></label>\n        <select id=\"Fields\" class=\"form-control\" name=\"userType\" [(ngModel)]=\"user.userType\" formControlName='userType'>\n          <option value=\"\" selected disabled>Select</option>\n          <option value=\"user\">user</option>\n          <option value=\"admin\">admin</option>\n        </select>\n        <div *ngIf=\"userRegistration.controls['userType'].touched && !userRegistration.controls['userType'].valid\">\n          <div *ngIf=\"userRegistration.controls['userType'].hasError('required')\" id=\"alert\">\n            <span id=\"required\">User Type is Required!</span>\n          </div>\n        </div>\n      </div>\n      <br>\n \n    <!-- <div class=\"form-group\">\n    <label>User Type<span id=\"required\">*</span></label>\n    <select id=\"Fields\" class=\"form-control\"  name=\"userType\" [(ngModel)]=\"user.userType\" formControlName='userType'>\n          <option>User</option>\n          <option>Admin</option>\n    </select>\n        <div *ngIf=\"userRegistration.controls['userType'].touched && !userType.controls['userType'].valid\">\n          <div *ngIf=\"userRegistration.controls['userType'].hasError('required')\" id=\"alert\">\n            <span id=\"required\">User Type is Required!</span>\n          </div>\n        </div>\n      </div>\n      <br><br><br><br>\n               -->\n\n\n\n\n\n    \n    \n    <div class=\"form-group\">\n    <label>Mobile <span id=\"required\">*</span></label>\n    <!-- <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"firstName\" placeholder=\"Enter First Name\" [(ngModel)]=\"user.firstName\" formControlName='firstName'/> -->\n    <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"userMobile\" placeholder=\"Enter Mobile Number\" [(ngModel)]=\"user.userMobile\" formControlName='userMobile'/>\n    <div *ngIf=\"userRegistration.controls['userMobile'].touched && !userRegistration.controls['userMobile'].valid\">\n    <div *ngIf=\"userRegistration.controls['userMobile'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">Mobile Number is Required!</span>\n    </div>\n    <div *ngIf=\"userRegistration.controls['userMobile'].hasError('pattern')\" id=\"alert\">\n    <span id=\"required\">Invalid Moblie Number!</span>\n    </div>\n    </div>\n    </div>\n    <br>\n          \n    <div class=\"form-group\">\n    <label>DOB <span id=\"required\">*</span></label>\n    <input id=\"Fields\" class=\"form-control\" type=\"text\" name=\"userDob\" placeholder=\"Enter Date of Birth\" [(ngModel)]=\"user.userDob\" formControlName='userDob' />\n    <div *ngIf=\"userRegistration.controls['userDob'].touched && !userRegistration.controls['userDob'].valid\">\n    <div *ngIf=\"userRegistration.controls['userDob'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">Date of Birth Number is Required!</span>\n    </div>\n    <div *ngIf=\"userRegistration.controls['userDob'].hasError('pattern')\" id=\"alert\">\n    <span id=\"required\">Invalid Date of Birth!</span>\n    </div>\n    </div>\n    </div>\n    <br>\n    \n    \n    \n    \n    <!--\n    <div class=\"form-group\">\n    <label>Services<span id=\"required\">*</span></label> \n    <div *ngIf=\"vendorRegistration.controls['services'].touched && !vendorRegistration.controls['services'].valid\">\n    <div *ngIf=\"vendorRegistration.controls['services'].hasError('required')\" id=\"alert\">\n    <span id=\"required\">Atleast One Service is Required!</span>\n    </div>\n    </div>\n    <div id=\"divcheckbox\"> \n    <div id=\"checkbox\"><input type=\"checkbox\" name=\"services\" value=\"Breakfast\" formControlName='services'/>&nbsp;Breakfast</div>\n    <div id=\"checkbox\"><input type=\"checkbox\" name=\"services\" value=\"Lunch/Dinner\" formControlName='services'/>&nbsp;Lunch/Dinner</div>\n    <div id=\"checkbox\"><input type=\"checkbox\" name=\"services\" value=\"Bakery\" formControlName='services'/>&nbsp;Bakery</div>\n    <div id=\"checkbox\"><input type=\"checkbox\" name=\"services\" value=\"Sweets\" formControlName='services'/>&nbsp;Sweets</div> \n    </div>\n    </div> \n    <br><br><br><br>\n    \n    <div class=\"form-group\">\n    <div class=\"form-check\" *ngFor=\"let servicetype of servicetypes; let i = index;\">\n    <label class=\"form-check-label\" for=\"servicetype{{servicetype.value}}\">\n    <input class=\"form-input-check\" type=\"checkbox\"\n    id=\"servicetype{{servicetype.value}}\"\n    name=\"servicetypeOptions\"\n    (change)=\"changeCheckbox(i)\"\n    [checked]=\"servicetype.checked\">\n    {{servicetype.name}}\n    </label>\n    </div>\n    </div>\n    \n    <div class=\"form-group\">\n    <label>Services<span id=\"required\">*</span></label>\n    <p *ngFor=\"let servicetype of viewData.servicetypes\">\n    <input type=\"checkbox\" \n    [checked]=\"services.servicetypes.includes(servicetype)\" \n    (change)=\"changeServiceTypes(servicetype)\"> {{ servicetype.name }}\n    </p>\n    </div>\n    --> \n    <button id=\"button\" type=\"submit\" [disabled]='!userRegistration.valid'>Submit</button>\n    \n    </form>\n    </div>\n    <br>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user */ "./src/app/shared/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(frmbuilder, router, userService) {
        this.frmbuilder = frmbuilder;
        this.router = router;
        this.userService = userService;
        this.firstName = "";
        this.lastName = "";
        this.userEmail = "";
        this.userPassword = "";
        this.userType = "";
        this.userMobile = "";
        this.userDob = "";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.userRegistration = frmbuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ][a-zA-Z ]+')])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ][a-zA-Z ]+')])],
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])],
            userPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            userMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            userDob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            /* servicetypes: new FormArray(this.services.servicetypes.map(servicetype => new FormControl(servicetype)),Validators.minLength(1))
            */ 
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    /* changeServiceTypes(servicetype: any) {
    var currentServiceTypeControls: FormArray = this.vendorRegistration.get('servicetype') as FormArray;
    var index = currentServiceTypeControls.value.indexOf(servicetype);
    if(index > -1) currentServiceTypeControls.removeAt(index) //If the user currently uses this schedule, remove it.
    else currentServiceTypeControls.push(new FormControl(servicetype)); //Otherwise add this schedule.
    } */
    SignupComponent.prototype.saveUser = function () {
        var _this = this;
        this.userService.create(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['/search', data]);
        }, function (error) { return console.log(error); });
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularMicroServices\User-UI-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map