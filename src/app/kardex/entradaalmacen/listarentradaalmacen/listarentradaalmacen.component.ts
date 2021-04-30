import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { DataEntradaAlmacen } from '../../../models/entradaalmacen';

@Component({
  selector: 'app-listarentradaalmacen',
  templateUrl: './listarentradaalmacen.component.html',
  styleUrls: ['./listarentradaalmacen.component.css']
})
export class ListarentradaalmacenComponent implements OnInit {
  ingresosAlmacen: DataEntradaAlmacen[]= [];

  constructor
  (private servicioKardex: KardexService , private router:Router ) { }


  ngOnInit(): void {
    this.getCotizacion();
  }
  getCotizacion(){

    this.servicioKardex.getIngresoAlmacen()
   .subscribe(resp => {
     
      this.ingresosAlmacen = resp; 
      // this.cargando = false;
     console.log(resp);
  });
 } 

 openForEdit(IngresoID: number) {

  this.router.navigate(['kardex/editingresoalmacen/'+IngresoID]);
}
}
