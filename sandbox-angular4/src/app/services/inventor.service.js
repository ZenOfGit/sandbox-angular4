"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorService = void 0;
var core_1 = require("@angular/core");
var InventorService = /** @class */ (function () {
    function InventorService() {
    }
    InventorService.prototype.getInventors = function () {
        return [
            { code: 'inv101', firstName: 'Leonardo', lastName: 'da Vinci', gender: 'Male', knownFor: 'Renaissance', dateOfBirth: '4/15/1452' },
            { code: 'inv102', firstName: 'Henry', lastName: 'Ford', gender: 'Male', knownFor: 'Ford Motor Company', dateOfBirth: '7/30/1863' },
            { code: 'inv103', firstName: 'Nikola', lastName: 'Tesla', gender: 'Male', knownFor: 'Alternating Current', dateOfBirth: '7/10/1856' },
            { code: 'inv104', firstName: 'Hedy', lastName: 'Lamarr', gender: 'Female', knownFor: 'Frequency-Hopping Spread Spectrum', dateOfBirth: '11/9/1914' },
            { code: 'inv105', firstName: 'Louis', lastName: 'Pasteur', gender: 'Male', knownFor: 'Vaccines and Pasteurization', dateOfBirth: '11/27/1822' },
            { code: 'inv106', firstName: 'Stephanie', lastName: 'Kwolek', gender: 'Female', knownFor: 'Kevlar', dateOfBirth: '6/31/1923' },
            { code: 'inv107', firstName: 'Charles', lastName: 'Babbage', gender: 'Male', knownFor: 'Digital Computers', dateOfBirth: '12/26/1971' },
            { code: 'inv108', firstName: 'Benjamin', lastName: 'Franklin', gender: 'Male', knownFor: 'America, Kite and Key, Bifocals, etc.', dateOfBirth: '1/17/1706' }
        ];
    };
    InventorService = __decorate([
        core_1.Injectable()
    ], InventorService);
    return InventorService;
}());
exports.InventorService = InventorService;
//# sourceMappingURL=inventor.service.js.map