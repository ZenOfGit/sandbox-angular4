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
exports.LifecycleHooksComponent = void 0;
var core_1 = require("@angular/core");
var LifecycleHooksComponent = /** @class */ (function () {
    function LifecycleHooksComponent() {
    }
    LifecycleHooksComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.currentValue);
            var previous = JSON.stringify(change.previousValue);
            //console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
            console.log(propertyName + ": currentValue = " + current + ", previousValue = " + previous);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LifecycleHooksComponent.prototype, "simpleInput", void 0);
    LifecycleHooksComponent = __decorate([
        core_1.Component({
            selector: 'app-lifecycle-hooks',
            templateUrl: './lifecycle-hooks.component.html',
            styleUrls: ['./lifecycle-hooks.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], LifecycleHooksComponent);
    return LifecycleHooksComponent;
}());
exports.LifecycleHooksComponent = LifecycleHooksComponent;
//# sourceMappingURL=lifecycle-hooks.component.js.map