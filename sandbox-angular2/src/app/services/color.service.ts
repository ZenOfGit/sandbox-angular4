import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

    constructor() {
        console.log('New instance of Color Service Creted');
    }
    currentColor: string = 'orange';
}
