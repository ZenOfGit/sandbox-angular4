import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service'

@Component({
    selector: 'app-service-di-color-module',
  templateUrl: './service-di-color-module.component.html',
    styleUrls: ['./service-di-color-module.component.css']
})
export class ServiceDependencyInjectionColorModuleComponent implements OnInit {

    constructor(private _colorService: ColorService) { }

    get color(): string {
        return this._colorService.currentColor;
    }

    set color(value: string) {
        this._colorService.currentColor = value;
    }

  ngOnInit(): void {
  }

}
