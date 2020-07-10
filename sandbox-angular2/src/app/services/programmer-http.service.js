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
exports.ProgrammerHttpService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
var ProgrammerHttpService = /** @class */ (function () {
    function ProgrammerHttpService(_http) {
        this._http = _http;
    }
    // example for API URL: https://localhost:44399/api/programmers
    ProgrammerHttpService.prototype.getProgrammers = function () {
        return this._http.get("API URL goes here")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProgrammerHttpService.prototype.getProgrammerByCode = function (progCode) {
        return this._http.get("API URL goes here/" + progCode)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProgrammerHttpService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    ProgrammerHttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProgrammerHttpService);
    return ProgrammerHttpService;
}());
exports.ProgrammerHttpService = ProgrammerHttpService;
//# sourceMappingURL=programmer-http.service.js.map