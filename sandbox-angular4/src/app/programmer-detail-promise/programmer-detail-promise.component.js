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
exports.ProgrammerDetailPromiseComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var programmer_http_promise_service_1 = require("../services/programmer-http-promise.service.");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var ProgrammerDetailPromiseComponent = /** @class */ (function () {
    function ProgrammerDetailPromiseComponent(_programmerHttpPromiseService, _activatedRoute, _router) {
        this._programmerHttpPromiseService = _programmerHttpPromiseService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data, please wait...';
    }
    ProgrammerDetailPromiseComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/promisesObservables']);
    };
    ProgrammerDetailPromiseComponent.prototype.onCancelButtonClick = function () {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    };
    ProgrammerDetailPromiseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var progCode = this._activatedRoute.snapshot.params['code'];
        this._programmerHttpPromiseService.getProgrammerByCode(progCode)
            .then(function (programmerData) {
            if (programmerData == null) {
                _this.statusMessage = 'Programmer with the specified code does not exist.';
            }
            else {
                _this.programmer = programmerData;
            }
        }).catch(function (error) {
            _this.statusMessage = 'Problem with the service. Please try again later.';
            console.log(error);
        });
    };
    ProgrammerDetailPromiseComponent = __decorate([
        core_1.Component({
            selector: 'app-programmer-detail-promise',
            templateUrl: './programmer-detail-promise.component.html',
            styleUrls: ['./programmer-detail-promise.component.css']
        }),
        __metadata("design:paramtypes", [programmer_http_promise_service_1.ProgrammerHttpPromiseService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProgrammerDetailPromiseComponent);
    return ProgrammerDetailPromiseComponent;
}());
exports.ProgrammerDetailPromiseComponent = ProgrammerDetailPromiseComponent;
//# sourceMappingURL=programmer-detail-promise.component.js.map