import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

    columnSpan = 2;
    firstName = 'Kelly';
    lastName = 'Slater';
    gender = 'Male';
    dob: Date = new Date('1972/02/11');
    age: number = this.calculateAge(this.dob);
    showDetails = false;

    calculateAge(dateOfBirth: Date) {
        const today = new Date();
        const birthDate = dateOfBirth;
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    toggleDetails() {
        this.showDetails = !this.showDetails;
    }

    onClickOne() {
        console.log('Button One Clicked');
    }

    onClickTwo() {
        console.log('Button Two Clicked');
    }


    constructor() { }

    ngOnInit() {
    }

}
