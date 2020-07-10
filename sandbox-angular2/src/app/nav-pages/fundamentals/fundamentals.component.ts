import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fundamentals',
    templateUrl: './fundamentals.component.html',
    styleUrls: ['./fundamentals.component.css']
})
export class FundamentalsComponent implements OnInit {

    isShowBasicComponent = false;
    isShowAttributeVsProperty = false;
    isShowNgForDirective = false;
    isShowContainerAndNested = false;

    toggleBasicComponent() {
        this.isShowBasicComponent = !this.isShowBasicComponent;
    }

    toggleAttributeVsProperty() {
        this.isShowAttributeVsProperty = !this.isShowAttributeVsProperty;
    }

    toggleNgForDirective() {
        this.isShowNgForDirective = !this.isShowNgForDirective;
    }

    toggleContainerAndNested() {
        this.isShowContainerAndNested = !this.isShowContainerAndNested;
    }

  ngOnInit(): void {
  }

}
