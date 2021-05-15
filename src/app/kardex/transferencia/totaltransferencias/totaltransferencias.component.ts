import { Component, OnInit } from '@angular/core';
import { DataTransferenciaProductos } from 'src/app/models/transferenciaproductos';
import { KardexService } from '../../../services/kardex/kardex.service';
@Component({
  selector: 'app-totaltransferencias',
  templateUrl: './totaltransferencias.component.html',
  styleUrls: ['./totaltransferencias.component.css']
})
export class TotaltransferenciasComponent implements OnInit {
  ListTranferencia :DataTransferenciaProductos []= [];
  cargando = true; 
  constructor
  (private servicioKardex: KardexService)
  { }

  ngOnInit(): void {
    this.getListIngresos();

  }

  getListIngresos(){

    this.servicioKardex.getListransferenciaAlmacen()
   .subscribe(resp => {
     
      this.ListTranferencia = resp; 
      this.cargando = false;
      // this.cargando = false;
      console.log(resp);
  });
  }
}
