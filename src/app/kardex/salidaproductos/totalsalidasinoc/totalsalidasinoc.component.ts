import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataSalidaSinOcCerrado } from '../../../models/salidaproductossinoc';

@Component({
  selector: 'app-totalsalidasinoc',
  templateUrl: './totalsalidasinoc.component.html',
  styleUrls: ['./totalsalidasinoc.component.css']
})
export class TotalsalidasinocComponent implements OnInit {
  ListSalidasinoc :DataSalidaSinOcCerrado []= [];
  cargando = true; 
  constructor(private servicioKardex: KardexService)  { }

  ngOnInit(): void {
    this.getListSalidassinoc();
  }
  getListSalidassinoc(){

    this.servicioKardex.getLisSalidassinocAlmacen()
   .subscribe(resp => {
     
      this.ListSalidasinoc = resp; 
      this.cargando = false;
      // this.cargando = false;
      console.log(resp);
  });
  }
}
