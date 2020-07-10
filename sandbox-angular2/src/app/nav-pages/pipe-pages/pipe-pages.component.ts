import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe-pages',
    templateUrl: './pipe-pages.component.html',
    styleUrls: ['./pipe-pages.component.css']
})
export class PipePagesComponent implements OnInit {

    isShowPipes = false;

    togglePipes() {
        this.isShowPipes = !this.isShowPipes;
    }

  ngOnInit(): void {
  }

}
