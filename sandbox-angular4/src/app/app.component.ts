import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    templateUrl: 'app/app.component.html',
    //styleUrls: ['./app.component.css']
})

export class AppComponent {
    pageHeader: string = "Employee Details";
    tech: string = 'Angular 4';
    // for lifecycle hooks:
    userText: string = 'Brad';
}
