import { Component } from '@angular/core'

@Component({
    selector: 'app-interpolation',
    templateUrl: 'app/interpolation/interpolation.component.html',
    styleUrls: ['app/interpolation/interpolation.component.css']
})

export class InterpolationComponent {
    pageHeader: string = null;
    imagePath: string = 'https://vignette.wikia.nocookie.net/tardis/images/7/7f/Doctor_Who_logo_1.jpg/revision/latest/scale-to-width-down/350?cb=20120903003137';

    firstName: string = 'David';
    lastName: string = 'Tennant';
    gender: string = 'Male';
    dob: Date = new Date('1971/04/18');
    age: number = this.calculateAge(this.dob);

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

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
}