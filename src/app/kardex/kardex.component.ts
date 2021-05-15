import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
declare function  customInitFunctions()  ;
@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
    // console.log('llego custom kardex');
  }

}
