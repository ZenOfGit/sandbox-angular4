import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-life-cycle-pages',
    templateUrl: './life-cycle-pages.component.html',
    styleUrls: ['./life-cycle-pages.component.css']
})
export class LifeCycleHookPagesComponent implements OnInit {

    isShowLifecycleHooks = false;

    toggleLifecycleHooks() {
        this.isShowLifecycleHooks = !this.isShowLifecycleHooks;
    }

  ngOnInit(): void {
  }

}
