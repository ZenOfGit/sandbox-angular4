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
exports.RoutingExampleProgrammersComponent = void 0;
var core_1 = require("@angular/core");
var programmer_http_service_1 = require("../services/programmer-http.service");
var RoutingExampleProgrammersComponent = /** @class */ (function () {
    function RoutingExampleProgrammersComponent(_programmerHttpService) {
        this._programmerHttpService = _programmerHttpService;
        this.statusMessage = 'Loading data, please wait...';
    }
    RoutingExampleProgrammersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._programmerHttpService.getProgrammers()
            .subscribe(function (programmerData) { return _this.programmers = programmerData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please wait a few minutes and try again.';
            console.error(error);
        });
    };
    RoutingExampleProgrammersComponent = __decorate([
        core_1.Component({
            selector: 'app-routing-example-programmers',
            templateUrl: './routing-example-programmers.component.html',
            styleUrls: ['./routing-example-programmers.component.css'],
            providers: [programmer_http_service_1.ProgrammerHttpService]
        }),
        __metadata("design:paramtypes", [programmer_http_service_1.ProgrammerHttpService])
    ], RoutingExampleProgrammersComponent);
    return RoutingExampleProgrammersComponent;
}());
exports.RoutingExampleProgrammersComponent = RoutingExampleProgrammersComponent;
//# sourceMappingURL=routing-example.component.js.map