import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataTransferenciaSinOcCerrado } from '../../../models/transferenciaproductossinoc';

@Component({
  selector: 'app-totaltransferenciassinoc',
  templateUrl: './totaltransferenciassinoc.component.html',
  styleUrls: ['./totaltransferenciassinoc.component.css']
})
export class TotaltransferenciassinocComponent implements OnInit {
  ListTranferenciasinoc:DataTransferenciaSinOcCerrado []= [];
  cargando = true; 
  constructor
  (private servicioKardex: KardexService)
  { }

  ngOnInit(): void {
    this.getListIngresosCerrados();
  }


  getListIngresosCerrados(){

    this.servicioKardex.getListransferenciaSinOcAlmacen()
   .subscribe(resp => {
     
      this.ListTranferenciasinoc = resp; 
      this.cargando = false;
      // this.cargando = false;
      console.log(resp);
  });
  }

}
