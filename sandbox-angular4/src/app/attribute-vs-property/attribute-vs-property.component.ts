import { Component } from '@angular/core'

@Component({
    selector: 'app-attribute-vs-property',
    templateUrl: 'app/attribute-vs-property/attribute-vs-property.component.html',
    styleUrls: ['app/attribute-vs-property/attribute-vs-property.component.css']
})

export class AttributeVsPropertyComponent {

    isDisabled = false;


    toggleTheButton() {
        this.isDisabled = !this.isDisabled;
    }
}