import { Component, OnInit } from '@angular/core';
import { IComposer } from '../../interfaces/composer';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: IComposer[];

  selectedComposerCountRadioButton = 'All';

  constructor() {
    this.composers = [
      { code: 'comp101', name: 'Bach', gender: 'Male', annualSalary: 700, dateOfBirth: '3/31/1685' },
      { code: 'comp102', name: 'Beethoven', gender: 'Male', annualSalary: 2500, dateOfBirth: '12/17/1770' },
      { code: 'comp103', name: 'Tchaikovsky', gender: 'Male', annualSalary: 100, dateOfBirth: '5/7/1840' },
      { code: 'comp104', name: 'Mozart', gender: 'Male', annualSalary: 2500, dateOfBirth: '1/27/1756' },
      { code: 'comp105', name: 'Vivaldi', gender: 'Male', annualSalary: 250, dateOfBirth: '3/4/1678' },
      { code: 'comp106', name: 'Schumann', gender: 'Female', annualSalary: 800, dateOfBirth: '11/13/1819' }
    ];
  }

  onComposerCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedComposerCountRadioButton = selectedRadioButtonValue;
  }

  getTotalComposersCount(): number {
    return this.composers.length;
  }

  getTotalMaleComposersCount(): number {
    return this.composers.filter(c => c.gender === 'Male').length;  // c is a composer object
  }

  getTotalFemaleComposersCount(): number {
    return this.composers.filter(c => c.gender === 'Female').length;  // c is a composer object
  }

  ngOnInit() {
  }

}
