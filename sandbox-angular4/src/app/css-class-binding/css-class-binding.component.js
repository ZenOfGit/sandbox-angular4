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
exports.CssClassBindingComponent = void 0;
var core_1 = require("@angular/core");
var CssClassBindingComponent = /** @class */ (function () {
    function CssClassBindingComponent() {
        this.classesToApply = 'italicsClass boldClass';
        this.makeItBlue = 'blueClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = true;
        this.isBold = true;
        this.isItalic = true;
        this.fontSize = 30;
    }
    CssClassBindingComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    };
    CssClassBindingComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    };
    CssClassBindingComponent.prototype.ngOnInit = function () {
    };
    CssClassBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-css-class-binding',
            templateUrl: './css-class-binding.component.html',
            styleUrls: ['./css-class-binding.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CssClassBindingComponent);
    return CssClassBindingComponent;
}());
exports.CssClassBindingComponent = CssClassBindingComponent;
//# sourceMappingURL=css-class-binding.component.js.map