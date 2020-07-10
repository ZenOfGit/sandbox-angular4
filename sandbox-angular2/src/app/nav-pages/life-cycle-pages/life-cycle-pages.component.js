"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeCycleHookPagesComponent = void 0;
var core_1 = require("@angular/core");
var LifeCycleHookPagesComponent = /** @class */ (function () {
    function LifeCycleHookPagesComponent() {
        this.isShowLifecycleHooks = false;
    }
    LifeCycleHookPagesComponent.prototype.toggleLifecycleHooks = function () {
        this.isShowLifecycleHooks = !this.isShowLifecycleHooks;
    };
    LifeCycleHookPagesComponent.prototype.ngOnInit = function () {
    };
    LifeCycleHookPagesComponent = __decorate([
        core_1.Component({
            selector: 'app-life-cycle-pages',
            templateUrl: './life-cycle-pages.component.html',
            styleUrls: ['./life-cycle-pages.component.css']
        })
    ], LifeCycleHookPagesComponent);
    return LifeCycleHookPagesComponent;
}());
exports.LifeCycleHookPagesComponent = LifeCycleHookPagesComponent;
//# sourceMappingURL=life-cycle-pages.component.js.map