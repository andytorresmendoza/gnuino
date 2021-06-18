import { Component, OnInit } from '@angular/core';
import { DataSalidaProductos } from '../../../models/salidaproductoscerrados';
import { KardexService } from '../../../services/kardex/kardex.service';

@Component({
  selector: 'app-totalsalidas',
  templateUrl: './totalsalidas.component.html',
  styles: [
  ]
})
export class TotalsalidasComponent implements OnInit {
  ListSalida :DataSalidaProductos []= [];
  cargando = true; 
  constructor(private servicioKardex: KardexService) { }

  ngOnInit(): void {
    this. getListSalidas();
  }
  getListSalidas(){

    this.servicioKardex.getLisSalidasAlmacen()
   .subscribe(resp => {
     
      this.ListSalida = resp; 
      this.cargando = false;
      // this.cargando = false;
      //  console.log(resp);
  });
  }
}
