import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-service-pages',
    templateUrl: './service-pages.component.html',
    styleUrls: ['./service-pages.component.css']
})
export class ServicePagesComponent implements OnInit {

    isShowServiceCallerInventorList = false;
    isShowHttpServiceCallerProgrammerList = false;

    toggleServiceCallerInventorList() {
        this.isShowServiceCallerInventorList = !this.isShowServiceCallerInventorList;
    }

    toggleHttpServiceCallerProgrammerList() {
        this.isShowHttpServiceCallerProgrammerList = !this.isShowHttpServiceCallerProgrammerList;
    }

  ngOnInit(): void {
  }

}
