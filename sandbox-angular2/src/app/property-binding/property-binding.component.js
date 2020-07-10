"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyBindingComponent = void 0;
var core_1 = require("@angular/core");
var PropertyBindingComponent = /** @class */ (function () {
    function PropertyBindingComponent() {
        this.myImage = {
            id: 1,
            name: 'cBoat',
            description: 'C Scow in Action',
            url: 'https://www.harken.com/uploadedImages/Tech_Corner/Deck_Layouts/One_Design/c-scow_boat-photo_750x280.jpg?n=7082'
        };
        this.isDisabled = false;
        this.pageHeader = 'This is a header';
        this.badHtml = 'Hello <script>alert("hacked");</script> World';
        this.firstName = 'Buddy';
        this.lastName = 'Melges';
        this.gender = 'Male';
        this.dob = new Date('1971/01/26');
        this.age = this.calculateAge(this.dob);
    }
    PropertyBindingComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    ;
    PropertyBindingComponent.prototype.calculateAge = function (dateOfBirth) {
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
    PropertyBindingComponent.prototype.toggleTheButton = function () {
        this.isDisabled = !this.isDisabled;
    };
    ;
    PropertyBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-property-binding',
            templateUrl: 'app/property-binding/property-binding.component.html',
            styleUrls: ['app/property-binding/property-binding.component.css']
        })
    ], PropertyBindingComponent);
    return PropertyBindingComponent;
}());
exports.PropertyBindingComponent = PropertyBindingComponent;
//# sourceMappingURL=property-binding.component.js.map