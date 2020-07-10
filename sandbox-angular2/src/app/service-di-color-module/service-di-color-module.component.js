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
exports.ServiceDependencyInjectionColorModuleComponent = void 0;
var core_1 = require("@angular/core");
var color_service_1 = require("../services/color.service");
var ServiceDependencyInjectionColorModuleComponent = /** @class */ (function () {
    function ServiceDependencyInjectionColorModuleComponent(_colorService) {
        this._colorService = _colorService;
    }
    Object.defineProperty(ServiceDependencyInjectionColorModuleComponent.prototype, "color", {
        get: function () {
            return this._colorService.currentColor;
        },
        set: function (value) {
            this._colorService.currentColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDependencyInjectionColorModuleComponent.prototype.ngOnInit = function () {
    };
    ServiceDependencyInjectionColorModuleComponent = __decorate([
        core_1.Component({
            selector: 'app-service-di-color-module',
            templateUrl: './service-di-color-module.component.html',
            styleUrls: ['./service-di-color-module.component.css']
        }),
        __metadata("design:paramtypes", [color_service_1.ColorService])
    ], ServiceDependencyInjectionColorModuleComponent);
    return ServiceDependencyInjectionColorModuleComponent;
}());
exports.ServiceDependencyInjectionColorModuleComponent = ServiceDependencyInjectionColorModuleComponent;
//# sourceMappingURL=service-di-color-module.component.js.map