"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpolationComponent = void 0;
var core_1 = require("@angular/core");
var InterpolationComponent = /** @class */ (function () {
    function InterpolationComponent() {
        this.pageHeader = null;
        this.imagePath = 'https://vignette.wikia.nocookie.net/tardis/images/7/7f/Doctor_Who_logo_1.jpg/revision/latest/scale-to-width-down/350?cb=20120903003137';
        this.firstName = 'David';
        this.lastName = 'Tennant';
        this.gender = 'Male';
        this.dob = new Date('1971/04/18');
        this.age = this.calculateAge(this.dob);
    }
    InterpolationComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    InterpolationComponent.prototype.calculateAge = function (dateOfBirth) {
        var today = new Date();
        var birthDate = dateOfBirth;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    ;
    InterpolationComponent = __decorate([
        core_1.Component({
            selector: 'app-interpolation',
            templateUrl: 'app/interpolation/interpolation.component.html',
            styleUrls: ['app/interpolation/interpolation.component.css']
        })
    ], InterpolationComponent);
    return InterpolationComponent;
}());
exports.InterpolationComponent = InterpolationComponent;
//# sourceMappingURL=interpolation.component.js.map