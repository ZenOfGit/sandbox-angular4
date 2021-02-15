"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromisesAndObservablesComponent = void 0;
var core_1 = require("@angular/core");
var PromisesAndObservablesComponent = /** @class */ (function () {
    function PromisesAndObservablesComponent() {
        this.isShowPromises = false;
        this.isShowObservables = false;
    }
    PromisesAndObservablesComponent.prototype.togglePromises = function () {
        this.isShowPromises = !this.isShowPromises;
    };
    PromisesAndObservablesComponent.prototype.toggleObservables = function () {
        this.isShowObservables = !this.isShowObservables;
    };
    PromisesAndObservablesComponent.prototype.ngOnInit = function () {
    };
    PromisesAndObservablesComponent = __decorate([
        core_1.Component({
            selector: 'app-promises-and-observables',
            templateUrl: './promises-and-observables.component.html',
            styleUrls: ['./promises-and-observables.component.css']
        })
    ], PromisesAndObservablesComponent);
    return PromisesAndObservablesComponent;
}());
exports.PromisesAndObservablesComponent = PromisesAndObservablesComponent;
//# sourceMappingURL=promises-and-observables.component.js.map