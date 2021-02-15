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
exports.DependencyInjectionTwoComponent = void 0;
var core_1 = require("@angular/core");
var user_preferences_service_1 = require("../services/user-preferences.service");
var DependencyInjectionTwoComponent = /** @class */ (function () {
    function DependencyInjectionTwoComponent(_userPreferencesService) {
        this._userPreferencesService = _userPreferencesService;
    }
    Object.defineProperty(DependencyInjectionTwoComponent.prototype, "color", {
        get: function () {
            return this._userPreferencesService.colorPreference;
        },
        set: function (value) {
            this._userPreferencesService.colorPreference = value;
        },
        enumerable: false,
        configurable: true
    });
    DependencyInjectionTwoComponent.prototype.ngOnInit = function () {
    };
    DependencyInjectionTwoComponent = __decorate([
        core_1.Component({
            selector: 'app-dependency-injection-two',
            templateUrl: './dependency-injection-two.component.html',
            styleUrls: ['./dependency-injection-two.component.css']
        }),
        __metadata("design:paramtypes", [user_preferences_service_1.UserPreferenceService])
    ], DependencyInjectionTwoComponent);
    return DependencyInjectionTwoComponent;
}());
exports.DependencyInjectionTwoComponent = DependencyInjectionTwoComponent;
//# sourceMappingURL=dependency-injection.component.js.map