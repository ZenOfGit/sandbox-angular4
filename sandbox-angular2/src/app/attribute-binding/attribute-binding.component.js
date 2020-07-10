"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeBindingComponent = void 0;
var core_1 = require("@angular/core");
var AttributeBindingComponent = /** @class */ (function () {
    function AttributeBindingComponent() {
        this.columnSpan = 2;
        this.imagePath = 'assets/images/pinkman.png';
        this.firstName = 'Jessie';
        this.lastName = 'Pinkman';
        this.gender = 'Male';
        this.age = 20;
    }
    AttributeBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-attribute-binding',
            templateUrl: 'app/attribute-binding/attribute-binding.component.html',
            styleUrls: ['app/attribute-binding/attribute-binding.component.css']
        })
    ], AttributeBindingComponent);
    return AttributeBindingComponent;
}());
exports.AttributeBindingComponent = AttributeBindingComponent;
//# sourceMappingURL=attribute-binding.component.js.map