import { Component, OnInit } from '@angular/core';
import { IProgrammer } from '../interfaces/programmer';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgrammerHttpPromiseService } from '../services/programmer-http-promise.service';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';


@Component({
    selector: 'app-programmer-detail-promise',
    templateUrl: './programmer-detail-promise.component.html',
    styleUrls: ['./programmer-detail-promise.component.css']
})
export class ProgrammerDetailPromiseComponent implements OnInit {

    programmer: IProgrammer;
    subscription: ISubscription;
    statusMessage: string = 'Loading data, please wait...';


    constructor(
        private _programmerHttpPromiseService: ProgrammerHttpPromiseService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) { }

    onBackButtonClick(): void {
        this._router.navigate(['/promisesObservables']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        let progCode: string = this._activatedRoute.snapshot.params['code'];
        this._programmerHttpPromiseService.getProgrammerByCode(progCode)
            .then(
                (programmerData) => {
                    if (programmerData == null) {
                        this.statusMessage = 'Programmer with the specified code does not exist.';
                    } else {
                        this.programmer = programmerData;
                    }
                    }
                    ).catch((error) => {
                        this.statusMessage = 'Problem with the service. Please try again later.';
                        console.log(error);
                }
            );
    }

    //ngOnInit(): void {
    //    let progCode: string = this._activatedRoute.snapshot.params['code'];
    //    this._programmerHttpPromiseService.getProgrammerByCode(progCode)
    //        .then(
    //        (programmerData) => {
    //            if (programmerData == null) {
    //                this.statusMessage = 'Programmer with the specified code does not exist.';
    //            } else {
    //                this.programmer = programmerData;
    //            }
    //        //}
    //    //).catch((error) => {
    //    //    this.statusMessage = 'Problem with the service. Please try again later.';
    //    //    console.log(error);
    //        //could use the above for promise
    //        },
    //        (error) => {
    //            this.statusMessage = 'Problem with the service.  Please try again later.';
    //            console.log(error);
    //        }
    //    );
    //}

}
