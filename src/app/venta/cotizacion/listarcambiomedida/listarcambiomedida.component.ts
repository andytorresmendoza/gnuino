import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/venta/venta.service';

@Component({
  selector: 'app-listarcambiomedida',
  templateUrl: './listarcambiomedida.component.html',
  styleUrls: ['./listarcambiomedida.component.css']
})
export class ListarcambiomedidaComponent implements OnInit {
  listCambio :any []= [];
  cargando = true; 
  constructor
  (private ventaservice: VentaService)
  { }

  ngOnInit(): void {
    this.getListCambio();
  }
  getListCambio(){

    this.ventaservice.getCambioMedida()
   .subscribe(resp => {
     
      this.listCambio = resp; 
      this.cargando = false;
      // this.cargando = false;
  // console.log(resp);
  });
  }
}
