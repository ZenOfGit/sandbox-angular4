import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-composer-count',
  templateUrl: './composer-count.component.html',
  styleUrls: ['./composer-count.component.css']
})
export class ComposerCountComponent implements OnInit {

  selectedRadioButtonValue = 'All';

  @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input() all: number;
    @Input() male: number;
    @Input() female: number;

  constructor() { }

  ngOnInit() {
  }

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
