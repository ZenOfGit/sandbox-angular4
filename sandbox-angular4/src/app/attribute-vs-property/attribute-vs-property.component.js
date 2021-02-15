"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeVsPropertyComponent = void 0;
var core_1 = require("@angular/core");
var AttributeVsPropertyComponent = /** @class */ (function () {
    function AttributeVsPropertyComponent() {
        this.isDisabled = false;
    }
    AttributeVsPropertyComponent.prototype.toggleTheButton = function () {
        this.isDisabled = !this.isDisabled;
    };
    AttributeVsPropertyComponent = __decorate([
        core_1.Component({
            selector: 'app-attribute-vs-property',
            templateUrl: 'app/attribute-vs-property/attribute-vs-property.component.html',
            styleUrls: ['app/attribute-vs-property/attribute-vs-property.component.css']
        })
    ], AttributeVsPropertyComponent);
    return AttributeVsPropertyComponent;
}());
exports.AttributeVsPropertyComponent = AttributeVsPropertyComponent;
//# sourceMappingURL=attribute-vs-property.component.js.map