import { Component, OnInit } from '@angular/core';
import { IInventor } from '../interfaces/inventor';
import { InventorService } from '../services/inventor.service';

@Component({
    selector: 'app-service-caller-inventor-list',
    templateUrl: './service-caller-inventor-list.component.html',
    styleUrls: ['./service-caller-inventor-list.component.css'],
    providers: [InventorService]
})

export class ServiceCallerInventorListComponent implements OnInit {

    inventors: IInventor[];

    constructor(private _inventorService: InventorService) {
        
  }

    ngOnInit() {
        this.inventors = this._inventorService.getInventors();
  }

}
