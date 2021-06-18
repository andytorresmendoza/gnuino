import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataDevolucion } from '../../../models/devoluciones';

@Component({
  selector: 'app-totaldevolucion',
  templateUrl: './totaldevolucion.component.html',
  styleUrls: ['./totaldevolucion.component.css']
})
export class TotaldevolucionComponent implements OnInit {
  ListDevoluciones :DataDevolucion []= [];
  cargando = true; 
  constructor  (private servicioKardex: KardexService) { }

  ngOnInit(): void {
    this.getListDevoluciones();
  }
  getListDevoluciones(){

    this.servicioKardex.getLisDevolucionesAlmacen()
   .subscribe(resp => {
     
      this.ListDevoluciones = resp; 
      this.cargando = false;
    //  // this.cargando = false;
     // console.log(resp);
  });
  }
}
