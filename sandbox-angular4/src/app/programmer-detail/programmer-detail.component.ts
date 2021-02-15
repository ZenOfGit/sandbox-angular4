import { Component, OnInit } from '@angular/core';
import { IProgrammer } from '../interfaces/programmer';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgrammerHttpService } from '../services/programmer-http.service';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';


@Component({
    selector: 'app-programmer-detail',
    templateUrl: './programmer-detail.component.html',
    styleUrls: ['./programmer-detail.component.css']
})
export class ProgrammerDetailComponent implements OnInit {

    programmer: IProgrammer;
    subscription: ISubscription;
    statusMessage: string = 'Loading data, please wait...';


    constructor(
        private _programmerHttpService: ProgrammerHttpService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) { }

    onBackButtonClick(): void {
        this._router.navigate(['/routingExampleProgrammers']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        let progCode: string = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._programmerHttpService.getProgrammerByCode(progCode)
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying... Attempt # ' + retryCount;
                        return retryCount
                    } else {
                        throw (err)
                    }
                }, 0).delay(1000)
            })
            .subscribe(
                (programmerData) => {
                    if (programmerData == null) {
                        this.statusMessage = 'Programmer with the specified code does not exist.';
                    } else {
                        this.programmer = programmerData;
                    }
                },
                (error) => {
                    this.statusMessage = 'Problem with the service.  Please try again later.';
                    console.log(error);
                }
            );
    }

}
