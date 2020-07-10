import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from '../services/user-preferences.service';

@Component({
    selector: 'app-dependency-injection-two',
  templateUrl: './dependency-injection-two.component.html',
  styleUrls: ['./dependency-injection-two.component.css']
})
export class DependencyInjectionTwoComponent implements OnInit {

    constructor(private _userPreferencesService: UserPreferenceService) { }

    get color(): string {
        return this._userPreferencesService.colorPreference;
    }

    set color(value: string) {
        this._userPreferencesService.colorPreference = value;
    }

  ngOnInit(): void {
  }

}
