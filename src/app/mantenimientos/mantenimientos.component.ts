import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
declare function  customInitFunctions()  ; //Usado para menu que no haga refresh
@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: []
})
export class MantenimientosComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
    // console.log('llego custom mantenimientos');
  }

}
