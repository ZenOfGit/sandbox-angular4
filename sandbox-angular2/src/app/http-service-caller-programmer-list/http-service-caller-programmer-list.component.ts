import { Component, OnInit } from '@angular/core';
import { ProgrammerHttpService } from '../services/programmer-http.service';
import { IProgrammer } from '../interfaces/programmer';
import { Http } from '@angular/http';

@Component({
    selector: 'app-http-service-caller-programmer-list',
    templateUrl: './http-service-caller-programmer-list.component.html',
    styleUrls: ['./http-service-caller-programmer-list.component.css'],
})

export class HttpServiceCallerProgrammerListComponent implements OnInit {

    programmers: IProgrammer[];
    statusMessage: string = 'Loading data, please wait...';

    constructor(private _programmerHttpService: ProgrammerHttpService) {
        
    }

    ngOnInit() {
        this._programmerHttpService.getProgrammers()
            .subscribe((programmerData) => this.programmers = programmerData,
                (error) => {
                    this.statusMessage = 'Problem with the service. Please wait a few minutes and try again.'
                    console.error(error);
                });
    }

}
