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
exports.InjectionComponent = void 0;
var core_1 = require("@angular/core");
var user_preferences_service_1 = require("../services/user-preferences.service");
var InjectionComponent = /** @class */ (function () {
    function InjectionComponent(_userPreferencesService) {
        this._userPreferencesService = _userPreferencesService;
    }
    Object.defineProperty(InjectionComponent.prototype, "color", {
        get: function () {
            return this._userPreferencesService.colorPreference;
        },
        set: function (value) {
            this._userPreferencesService.colorPreference = value;
        },
        enumerable: false,
        configurable: true
    });
    InjectionComponent.prototype.ngOnInit = function () {
    };
    InjectionComponent = __decorate([
        core_1.Component({
            selector: 'app-injection',
            templateUrl: './injection.component.html',
            styleUrls: ['./injection.component.css']
        }),
        __metadata("design:paramtypes", [user_preferences_service_1.UserPreferenceService])
    ], InjectionComponent);
    return InjectionComponent;
}());
exports.InjectionComponent = InjectionComponent;
//# sourceMappingURL=injection.component.js.map