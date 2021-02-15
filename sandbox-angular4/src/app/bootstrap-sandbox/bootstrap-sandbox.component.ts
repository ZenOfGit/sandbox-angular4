import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-sandbox',
    templateUrl: './bootstrap-sandbox.component.html',
    styleUrls: ['./bootstrap-sandbox.component.css']
})
export class BootstrapSandboxComponent implements OnInit {

  thing = {
    name: 'Thing One',
    description: 'The first thing'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
