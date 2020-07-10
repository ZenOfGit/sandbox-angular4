"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservablesComponent = void 0;
var core_1 = require("@angular/core");
var ObservablesComponent = /** @class */ (function () {
    function ObservablesComponent() {
        this.thing = {
            name: 'Thing One',
            description: 'The first thing'
        };
    }
    ObservablesComponent.prototype.ngOnInit = function () {
    };
    ObservablesComponent = __decorate([
        core_1.Component({
            selector: 'app-observables',
            templateUrl: './observables.component.html',
            styleUrls: ['./observables.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ObservablesComponent);
    return ObservablesComponent;
}());
exports.ObservablesComponent = ObservablesComponent;
//# sourceMappingURL=observables.component.js.map