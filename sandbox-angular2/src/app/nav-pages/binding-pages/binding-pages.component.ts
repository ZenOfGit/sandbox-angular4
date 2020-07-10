import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding-pages',
    templateUrl: './binding-pages.component.html',
    styleUrls: ['./binding-pages.component.css']
})
export class BindingPagesComponent implements OnInit {

    isShowAttributeBinding = false;
    isShowInterpolation = false;
    isShowPropertyBinding = false;
    isShowEventBinding = false;
    isShowTwoWayDataBinding = false;

    toggleAttributeBinding() {
        this.isShowAttributeBinding = !this.isShowAttributeBinding;
    }

    toggleInterpolation() {
        this.isShowInterpolation = !this.isShowInterpolation;
    }

    togglePropertyBinding() {
        this.isShowPropertyBinding = !this.isShowPropertyBinding;
    }

    toggleEventBinding() {
        this.isShowEventBinding = !this.isShowEventBinding;
    }

    toggleTwoWayDataBinding() {
        this.isShowTwoWayDataBinding = !this.isShowTwoWayDataBinding;
    }

  ngOnInit(): void {
  }

}
