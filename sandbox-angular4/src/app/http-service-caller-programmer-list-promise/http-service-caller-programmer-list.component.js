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
exports.HttpServiceCallerProgrammerListComponent = void 0;
var core_1 = require("@angular/core");
var programmer_http_service_1 = require("../services/programmer-http.service");
var HttpServiceCallerProgrammerListComponent = /** @class */ (function () {
    function HttpServiceCallerProgrammerListComponent(_programmerHttpService) {
        this._programmerHttpService = _programmerHttpService;
        this.statusMessage = 'Loading data, please wait...';
    }
    HttpServiceCallerProgrammerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._programmerHttpService.getProgrammers()
            .subscribe(function (programmerData) { return _this.programmers = programmerData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please wait a few minutes and try again.';
            console.error(error);
        });
    };
    HttpServiceCallerProgrammerListComponent = __decorate([
        core_1.Component({
            selector: 'app-http-service-caller-programmer-list',
            templateUrl: './http-service-caller-programmer-list.component.html',
            styleUrls: ['./http-service-caller-programmer-list.component.css'],
        }),
        __metadata("design:paramtypes", [programmer_http_service_1.ProgrammerHttpService])
    ], HttpServiceCallerProgrammerListComponent);
    return HttpServiceCallerProgrammerListComponent;
}());
exports.HttpServiceCallerProgrammerListComponent = HttpServiceCallerProgrammerListComponent;
//# sourceMappingURL=http-service-caller-programmer-list.component.js.map