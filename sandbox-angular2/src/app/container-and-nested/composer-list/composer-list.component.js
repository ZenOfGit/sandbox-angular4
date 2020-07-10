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
exports.ComposerListComponent = void 0;
var core_1 = require("@angular/core");
var ComposerListComponent = /** @class */ (function () {
    function ComposerListComponent() {
        this.selectedComposerCountRadioButton = 'All';
        this.composers = [
            { code: 'comp101', name: 'Bach', gender: 'Male', annualSalary: 700, dateOfBirth: '3/31/1685' },
            { code: 'comp102', name: 'Beethoven', gender: 'Male', annualSalary: 2500, dateOfBirth: '12/17/1770' },
            { code: 'comp103', name: 'Tchaikovsky', gender: 'Male', annualSalary: 100, dateOfBirth: '5/7/1840' },
            { code: 'comp104', name: 'Mozart', gender: 'Male', annualSalary: 2500, dateOfBirth: '1/27/1756' },
            { code: 'comp105', name: 'Vivaldi', gender: 'Male', annualSalary: 250, dateOfBirth: '3/4/1678' },
            { code: 'comp106', name: 'Schumann', gender: 'Female', annualSalary: 800, dateOfBirth: '11/13/1819' }
        ];
    }
    ComposerListComponent.prototype.onComposerCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedComposerCountRadioButton = selectedRadioButtonValue;
    };
    ComposerListComponent.prototype.getTotalComposersCount = function () {
        return this.composers.length;
    };
    ComposerListComponent.prototype.getTotalMaleComposersCount = function () {
        return this.composers.filter(function (c) { return c.gender === 'Male'; }).length; // c is a composer object
    };
    ComposerListComponent.prototype.getTotalFemaleComposersCount = function () {
        return this.composers.filter(function (c) { return c.gender === 'Female'; }).length; // c is a composer object
    };
    ComposerListComponent.prototype.ngOnInit = function () {
    };
    ComposerListComponent = __decorate([
        core_1.Component({
            selector: 'app-composer-list',
            templateUrl: './composer-list.component.html',
            styleUrls: ['./composer-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ComposerListComponent);
    return ComposerListComponent;
}());
exports.ComposerListComponent = ComposerListComponent;
//# sourceMappingURL=composer-list.component.js.map