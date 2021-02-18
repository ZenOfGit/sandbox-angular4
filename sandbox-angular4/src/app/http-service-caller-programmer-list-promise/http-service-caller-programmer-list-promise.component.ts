import { Component, OnInit } from '@angular/core';
import { ProgrammerHttpPromiseService } from '../services/programmer-http-promise.service';
import { IProgrammer } from '../interfaces/programmer';
import { Http } from '@angular/http';

@Component({
    selector: 'app-http-service-caller-programmer-list-promise',
    templateUrl: './http-service-caller-programmer-list-promise.component.html',
    styleUrls: ['./http-service-caller-programmer-list-promise.component.css'],
})

export class HttpServiceCallerProgrammerListPromiseComponent implements OnInit {

    programmers: IProgrammer[];
    statusMessage: string = 'Loading data, please wait...';

    constructor(private _programmerHttpPromiseService: ProgrammerHttpPromiseService) {
        
    }

    ngOnInit() {
        this._programmerHttpPromiseService.getProgrammers()
            .subscribe((programmerData) => this.programmers = programmerData,
                (error) => {
                    this.statusMessage = 'Problem with the service. Please wait a few minutes and try again.'
                    console.error(error);
                });
    }
}
