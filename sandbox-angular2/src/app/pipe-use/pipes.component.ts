import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  players: any[];

  constructor() {
    this.players = [
    { code: 'plr101', name: 'Brett', gender: 'Male', annualSalary: 2750000, dateOfBirth: '8/9/1964' },
    { code: 'plr102', name: 'Wayne', gender: 'Male', annualSalary: 2200000, dateOfBirth: '1/26/1961' },
    { code: 'plr103', name: 'Alexander', gender: 'Male', annualSalary: 9500000, dateOfBirth: '11/17/1985' },
    { code: 'plr104', name: 'Patrick', gender: 'Male', annualSalary: 10000000, dateOfBirth: '11/19/1988' }
  ];
  }

  getPlayers(): void {
    this.players = [
      { code: 'plr101', name: 'Brett', gender: 'Male', annualSalary: 2750000, dateOfBirth: '8/9/1964' },
      { code: 'plr102', name: 'Wayne', gender: 'Male', annualSalary: 2200000, dateOfBirth: '1/26/1961' },
      { code: 'plr103', name: 'Alexander', gender: 'Male', annualSalary: 9500000, dateOfBirth: '11/17/1985' },
      { code: 'plr104', name: 'Patrick', gender: 'Male', annualSalary: 10000000, dateOfBirth: '11/19/1988' },
      { code: 'plr105', name: 'Ed', gender: 'Male', annualSalary: 2950000, dateOfBirth: '11/19/1965' }
    ];
  }

  ngOnInit() {
  }

}
