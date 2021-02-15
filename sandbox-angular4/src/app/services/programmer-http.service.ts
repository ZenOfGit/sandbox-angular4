import { Injectable } from '@angular/core';
import { IProgrammer } from '../interfaces/programmer';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';


@Injectable()

export class ProgrammerHttpService {

    constructor(private _http: Http) { }

    // example for API URL: https://localhost:44399/api/programmers
    getProgrammers(): Observable<IProgrammer[]> {
        return this._http.get("API URL goes here")
            .map((response: Response) => <IProgrammer[]>response.json())
            .catch(this.handleError);
    }

    getProgrammerByCode(progCode: string): Observable<IProgrammer> {
        return this._http.get("API URL goes here/" + progCode)
            .map((response: Response) => <IProgrammer>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}