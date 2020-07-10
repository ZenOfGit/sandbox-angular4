"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindingPagesComponent = void 0;
var core_1 = require("@angular/core");
var BindingPagesComponent = /** @class */ (function () {
    function BindingPagesComponent() {
        this.isShowAttributeBinding = false;
        this.isShowInterpolation = false;
        this.isShowPropertyBinding = false;
        this.isShowEventBinding = false;
        this.isShowTwoWayDataBinding = false;
    }
    BindingPagesComponent.prototype.toggleAttributeBinding = function () {
        this.isShowAttributeBinding = !this.isShowAttributeBinding;
    };
    BindingPagesComponent.prototype.toggleInterpolation = function () {
        this.isShowInterpolation = !this.isShowInterpolation;
    };
    BindingPagesComponent.prototype.togglePropertyBinding = function () {
        this.isShowPropertyBinding = !this.isShowPropertyBinding;
    };
    BindingPagesComponent.prototype.toggleEventBinding = function () {
        this.isShowEventBinding = !this.isShowEventBinding;
    };
    BindingPagesComponent.prototype.toggleTwoWayDataBinding = function () {
        this.isShowTwoWayDataBinding = !this.isShowTwoWayDataBinding;
    };
    BindingPagesComponent.prototype.ngOnInit = function () {
    };
    BindingPagesComponent = __decorate([
        core_1.Component({
            selector: 'app-binding-pages',
            templateUrl: './binding-pages.component.html',
            styleUrls: ['./binding-pages.component.css']
        })
    ], BindingPagesComponent);
    return BindingPagesComponent;
}());
exports.BindingPagesComponent = BindingPagesComponent;
//# sourceMappingURL=binding-pages.component.js.map