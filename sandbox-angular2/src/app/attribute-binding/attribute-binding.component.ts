import { Component } from '@angular/core';

@Component({
    selector: 'app-attribute-binding',
    templateUrl: 'app/attribute-binding/attribute-binding.component.html',
    styleUrls: ['app/attribute-binding/attribute-binding.component.css']
})
export class AttributeBindingComponent {
    columnSpan: number = 2;
    imagePath: string = 'assets/images/pinkman.png';
    firstName: string = 'Jessie';
    lastName: string = 'Pinkman';
    gender: string = 'Male';
    age: number = 20;
}