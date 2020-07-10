import { Component } from '@angular/core'

@Component({
    selector: 'app-property-binding',
    templateUrl: 'app/property-binding/property-binding.component.html',
    styleUrls: ['app/property-binding/property-binding.component.css']
})

export class PropertyBindingComponent {

    myImage: any = {
        id: 1,
        name: 'cBoat',
        description: 'C Scow in Action',
        url: 'https://www.harken.com/uploadedImages/Tech_Corner/Deck_Layouts/One_Design/c-scow_boat-photo_750x280.jpg?n=7082'
    }

    isDisabled = false;
    pageHeader: string = 'This is a header';
    badHtml = 'Hello <script>alert("hacked");</script> World';

    firstName: string = 'Buddy';
    lastName: string = 'Melges';
    gender: string = 'Male';
    dob: Date = new Date('1971/01/26');
    age: number = this.calculateAge(this.dob);

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    };

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

    toggleTheButton() {
        this.isDisabled = !this.isDisabled;
    };
}