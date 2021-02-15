import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferenceService {

    constructor() {
        console.log('New instance of Service Creted');
    }
    colorPreference: string = 'orange';
}
