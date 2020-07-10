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
exports.HttpServiceCallerProgrammerListPromiseComponent = void 0;
var core_1 = require("@angular/core");
var programmer_http_promise_service_1 = require("../services/programmer-http-promise.service.");
var HttpServiceCallerProgrammerListPromiseComponent = /** @class */ (function () {
    function HttpServiceCallerProgrammerListPromiseComponent(_programmerHttpPromiseService) {
        this._programmerHttpPromiseService = _programmerHttpPromiseService;
        this.statusMessage = 'Loading data, please wait...';
    }
    HttpServiceCallerProgrammerListPromiseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._programmerHttpPromiseService.getProgrammers()
            .subscribe(function (programmerData) { return _this.programmers = programmerData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please wait a few minutes and try again.';
            console.error(error);
        });
    };
    HttpServiceCallerProgrammerListPromiseComponent = __decorate([
        core_1.Component({
            selector: 'app-http-service-caller-programmer-list-promise',
            templateUrl: './http-service-caller-programmer-list-promise.component.html',
            styleUrls: ['./http-service-caller-programmer-list-promise.component.css'],
        }),
        __metadata("design:paramtypes", [programmer_http_promise_service_1.ProgrammerHttpPromiseService])
    ], HttpServiceCallerProgrammerListPromiseComponent);
    return HttpServiceCallerProgrammerListPromiseComponent;
}());
exports.HttpServiceCallerProgrammerListPromiseComponent = HttpServiceCallerProgrammerListPromiseComponent;
//# sourceMappingURL=http-service-caller-programmer-list-promise.component.js.map