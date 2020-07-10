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
exports.ProgrammerDetailComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var programmer_http_service_1 = require("../services/programmer-http.service");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var ProgrammerDetailComponent = /** @class */ (function () {
    function ProgrammerDetailComponent(_programmerHttpService, _activatedRoute, _router) {
        this._programmerHttpService = _programmerHttpService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data, please wait...';
    }
    ProgrammerDetailComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/routingExampleProgrammers']);
    };
    ProgrammerDetailComponent.prototype.onCancelButtonClick = function () {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    };
    ProgrammerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var progCode = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._programmerHttpService.getProgrammerByCode(progCode)
            .retryWhen(function (err) {
            return err.scan(function (retryCount) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'Retrying... Attempt # ' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0).delay(1000);
        })
            .subscribe(function (programmerData) {
            if (programmerData == null) {
                _this.statusMessage = 'Programmer with the specified code does not exist.';
            }
            else {
                _this.programmer = programmerData;
            }
        }, function (error) {
            _this.statusMessage = 'Problem with the service.  Please try again later.';
            console.log(error);
        });
    };
    ProgrammerDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-programmer-detail',
            templateUrl: './programmer-detail.component.html',
            styleUrls: ['./programmer-detail.component.css']
        }),
        __metadata("design:paramtypes", [programmer_http_service_1.ProgrammerHttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProgrammerDetailComponent);
    return ProgrammerDetailComponent;
}());
exports.ProgrammerDetailComponent = ProgrammerDetailComponent;
//# sourceMappingURL=programmer-detail.component.js.map