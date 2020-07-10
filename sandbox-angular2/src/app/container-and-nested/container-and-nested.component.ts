import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-and-nested',
  templateUrl: './container-and-nested.component.html',
  styleUrls: ['./container-and-nested.component.css']
})
export class ContainerAndNestedComponent implements OnInit {

  composers: any = [];

  constructor() {
    //this.composers = [
    //  { code: 'comp101', name: 'Bach', gender: 'Male', annualSalary: 700, dateOfBirth: '3/31/1685' },
    //  { code: 'comp102', name: 'Beethoven', gender: 'Male', annualSalary: 2500, dateOfBirth: '12/17/1770' },
    //  { code: 'comp103', name: 'Tchaikovsky', gender: 'Male', annualSalary: 100, dateOfBirth: '5/7/1840' },
    //  { code: 'comp104', name: 'Mozart', gender: 'Male', annualSalary: 2500, dateOfBirth: '1/27/1756' },
    //  { code: 'comp105', name: 'Vivaldi', gender: 'Male', annualSalary: 250, dateOfBirth: '3/4/1678' },
    //  { code: 'comp106', name: 'Schumann', gender: 'Female', annualSalary: 800, dateOfBirth: '11/13/1819' }
    //];
  }

  ngOnInit() {
  }

}
