"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundamentalsComponent = void 0;
var core_1 = require("@angular/core");
var FundamentalsComponent = /** @class */ (function () {
    function FundamentalsComponent() {
        this.isShowBasicComponent = false;
        this.isShowAttributeVsProperty = false;
        this.isShowNgForDirective = false;
        this.isShowContainerAndNested = false;
    }
    FundamentalsComponent.prototype.toggleBasicComponent = function () {
        this.isShowBasicComponent = !this.isShowBasicComponent;
    };
    FundamentalsComponent.prototype.toggleAttributeVsProperty = function () {
        this.isShowAttributeVsProperty = !this.isShowAttributeVsProperty;
    };
    FundamentalsComponent.prototype.toggleNgForDirective = function () {
        this.isShowNgForDirective = !this.isShowNgForDirective;
    };
    FundamentalsComponent.prototype.toggleContainerAndNested = function () {
        this.isShowContainerAndNested = !this.isShowContainerAndNested;
    };
    FundamentalsComponent.prototype.ngOnInit = function () {
    };
    FundamentalsComponent = __decorate([
        core_1.Component({
            selector: 'app-fundamentals',
            templateUrl: './fundamentals.component.html',
            styleUrls: ['./fundamentals.component.css']
        })
    ], FundamentalsComponent);
    return FundamentalsComponent;
}());
exports.FundamentalsComponent = FundamentalsComponent;
//# sourceMappingURL=fundamentals.component.js.map