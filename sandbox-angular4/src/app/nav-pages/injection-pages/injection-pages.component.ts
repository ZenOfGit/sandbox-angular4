import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-injection-pages',
    templateUrl: './injection-pages.component.html',
    styleUrls: ['./injection-pages.component.css']
})
export class InjectionPagesComponent implements OnInit {

    isShowDependencyInjectionOneComponent = false;
    isShowDependencyInjectionTwoComponent = false;

    toggleDependencyInjectionOneComponent() {
        this.isShowDependencyInjectionOneComponent = !this.isShowDependencyInjectionOneComponent;
    }

    toggleDependencyInjectionTwoComponent() {
        this.isShowDependencyInjectionTwoComponent = !this.isShowDependencyInjectionTwoComponent;
    }

  ngOnInit(): void {
  }

}
