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
exports.EventBindingComponent = void 0;
var core_1 = require("@angular/core");
var EventBindingComponent = /** @class */ (function () {
    function EventBindingComponent() {
        this.columnSpan = 2;
        this.firstName = 'Kelly';
        this.lastName = 'Slater';
        this.gender = 'Male';
        this.dob = new Date('1972/02/11');
        this.age = this.calculateAge(this.dob);
        this.showDetails = false;
    }
    EventBindingComponent.prototype.calculateAge = function (dateOfBirth) {
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
    EventBindingComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EventBindingComponent.prototype.onClickOne = function () {
        console.log('Button One Clicked');
    };
    EventBindingComponent.prototype.onClickTwo = function () {
        console.log('Button Two Clicked');
    };
    EventBindingComponent.prototype.ngOnInit = function () {
    };
    EventBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-event-binding',
            templateUrl: './event-binding.component.html',
            styleUrls: ['./event-binding.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EventBindingComponent);
    return EventBindingComponent;
}());
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=event-binding.component.js.map