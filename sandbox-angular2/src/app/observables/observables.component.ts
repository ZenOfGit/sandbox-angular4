import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  thing = {
    name: 'Thing One',
    description: 'The first thing'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
