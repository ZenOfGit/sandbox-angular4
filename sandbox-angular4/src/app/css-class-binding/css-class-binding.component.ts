import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-css-class-binding',
    templateUrl: './css-class-binding.component.html',
    styleUrls: ['./css-class-binding.component.css']
})
export class CssClassBindingComponent implements OnInit {

    classesToApply = 'italicsClass boldClass';
    makeItBlue = 'blueClass';
    applyBoldClass = true;
    applyItalicsClass = true;

    isBold = true;
    isItalic = true;
    fontSize = 30;

    addClasses() {
        const classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    }

    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    }

    constructor() { }

    ngOnInit() {
    }

}
