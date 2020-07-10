"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePagesComponent = void 0;
var core_1 = require("@angular/core");
var ServicePagesComponent = /** @class */ (function () {
    function ServicePagesComponent() {
    }
    ServicePagesComponent.prototype.ngOnInit = function () {
    };
    ServicePagesComponent = __decorate([
        core_1.Component({
            selector: 'app-service-pages',
            templateUrl: './service-pages.component.html',
            styleUrls: ['./service-pages.component.css']
        })
    ], ServicePagesComponent);
    return ServicePagesComponent;
}());
exports.ServicePagesComponent = ServicePagesComponent;
//# sourceMappingURL=routing-page.component.js.map