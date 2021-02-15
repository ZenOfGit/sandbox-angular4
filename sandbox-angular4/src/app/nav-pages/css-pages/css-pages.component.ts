import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-css-pages',
    templateUrl: './css-pages.component.html',
    styleUrls: ['./css-pages.component.css']
})
export class CssPagesComponent implements OnInit {

    isShowCssClassBinding = false;

    toggleCssClassBinding() {
        this.isShowCssClassBinding = !this.isShowCssClassBinding;
    }

  ngOnInit(): void {
  }

}
