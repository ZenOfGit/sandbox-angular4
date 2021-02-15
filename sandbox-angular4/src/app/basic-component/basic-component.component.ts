import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.css']
})
export class BasicComponentComponent implements OnInit {

  thing = {
    name: 'Thing One',
    description: 'The first thing'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
