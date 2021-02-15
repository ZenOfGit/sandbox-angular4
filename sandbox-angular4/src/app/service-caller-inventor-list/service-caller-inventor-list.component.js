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
exports.ServiceCallerInventorListComponent = void 0;
var core_1 = require("@angular/core");
var inventor_service_1 = require("../services/inventor.service");
var ServiceCallerInventorListComponent = /** @class */ (function () {
    function ServiceCallerInventorListComponent(_inventorService) {
        this._inventorService = _inventorService;
    }
    ServiceCallerInventorListComponent.prototype.ngOnInit = function () {
        this.inventors = this._inventorService.getInventors();
    };
    ServiceCallerInventorListComponent = __decorate([
        core_1.Component({
            selector: 'app-service-caller-inventor-list',
            templateUrl: './service-caller-inventor-list.component.html',
            styleUrls: ['./service-caller-inventor-list.component.css'],
            providers: [inventor_service_1.InventorService]
        }),
        __metadata("design:paramtypes", [inventor_service_1.InventorService])
    ], ServiceCallerInventorListComponent);
    return ServiceCallerInventorListComponent;
}());
exports.ServiceCallerInventorListComponent = ServiceCallerInventorListComponent;
//# sourceMappingURL=service-caller-inventor-list.component.js.map