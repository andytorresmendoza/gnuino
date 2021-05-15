import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../services/kardex/kardex.service';
import { DataKardexoc } from '../../models/kardexoc';

@Component({
  selector: 'app-kardexoc',
  templateUrl: './kardexoc.component.html',
  styles: [
  ]
})
export class KardexocComponent implements OnInit {
  ListKardex :DataKardexoc []= [];
  cargando = true; 
  constructor  (private servicioKardex: KardexService) { }

  ngOnInit(): void {
    this.getListKardex();
  }
  getListKardex(){

    this.servicioKardex.getLisKardexoc()
   .subscribe(resp => {
     
      this.ListKardex = resp; 
      this.cargando = false;
      // this.cargando = false;
      console.log(resp);
  });
  }

}
