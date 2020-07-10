import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promises-and-observables',
    templateUrl: './promises-and-observables.component.html',
    styleUrls: ['./promises-and-observables.component.css']
})
export class PromisesAndObservablesComponent implements OnInit {

    isShowPromises = false;
    isShowObservables = false;

    togglePromises() {
        this.isShowPromises = !this.isShowPromises;
    }

    toggleObservables() {
        this.isShowObservables = !this.isShowObservables;
    }

  ngOnInit(): void {
  }

}
