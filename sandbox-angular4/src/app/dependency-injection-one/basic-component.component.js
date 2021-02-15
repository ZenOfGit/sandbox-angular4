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
exports.BasicComponentComponent = void 0;
var core_1 = require("@angular/core");
var BasicComponentComponent = /** @class */ (function () {
    function BasicComponentComponent() {
        this.thing = {
            name: 'Thing One',
            description: 'The first thing'
        };
    }
    BasicComponentComponent.prototype.ngOnInit = function () {
    };
    BasicComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-basic-component',
            templateUrl: './basic-component.component.html',
            styleUrls: ['./basic-component.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], BasicComponentComponent);
    return BasicComponentComponent;
}());
exports.BasicComponentComponent = BasicComponentComponent;
//# sourceMappingURL=basic-component.component.js.map