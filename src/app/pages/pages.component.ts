import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
declare function  customInitFunctions()  ; //Usado para menu que no haga refresh
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  constructor(private settingsServices: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
    // console.log('llego custom');
  }

}
