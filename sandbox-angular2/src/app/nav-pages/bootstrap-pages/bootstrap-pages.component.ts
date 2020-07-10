import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bootstrap-pages',
    templateUrl: './bootstrap-pages.component.html',
    styleUrls: ['./bootstrap-pages.component.css']
})
export class BootstrapPagesComponent implements OnInit {

    isShowBootstrapSandbox = false;


    toggleBootstrapSandbox() {
        this.isShowBootstrapSandbox = !this.isShowBootstrapSandbox;
    }

  ngOnInit(): void {
  }

}
