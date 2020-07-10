"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectionPagesComponent = void 0;
var core_1 = require("@angular/core");
var InjectionPagesComponent = /** @class */ (function () {
    function InjectionPagesComponent() {
        this.isShowDependencyInjectionOneComponent = false;
        this.isShowDependencyInjectionTwoComponent = false;
    }
    InjectionPagesComponent.prototype.toggleDependencyInjectionOneComponent = function () {
        this.isShowDependencyInjectionOneComponent = !this.isShowDependencyInjectionOneComponent;
    };
    InjectionPagesComponent.prototype.toggleDependencyInjectionTwoComponent = function () {
        this.isShowDependencyInjectionTwoComponent = !this.isShowDependencyInjectionTwoComponent;
    };
    InjectionPagesComponent.prototype.ngOnInit = function () {
    };
    InjectionPagesComponent = __decorate([
        core_1.Component({
            selector: 'app-injection-pages',
            templateUrl: './injection-pages.component.html',
            styleUrls: ['./injection-pages.component.css']
        })
    ], InjectionPagesComponent);
    return InjectionPagesComponent;
}());
exports.InjectionPagesComponent = InjectionPagesComponent;
//# sourceMappingURL=injection-pages.component.js.map