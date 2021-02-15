import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges {

    constructor() { }

    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            //console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
            console.log(`${propertyName}: currentValue = ${current}, previousValue = ${previous}`);
        }
    }
}
