import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataCotizacion } from '../../../models/cotizacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarcotizacion',
  templateUrl: './listarcotizacion.component.html',
  styleUrls: ['./listarcotizacion.component.css']
})
export class ListarcotizacionComponent implements OnInit {

  cotizaciones:DataCotizacion[]=[];
  cargando = true; 
  
  constructor
  (private servicioKardex: KardexService , private router:Router) { }

  ngOnInit(): void {
     this. getCotizacion();
    // console.log(  this. getCotizacion());
  }

  getCotizacion(){

   this.servicioKardex.getCotizacion()
  .subscribe(resp => {
    
     this.cotizaciones = resp; 
     this.cargando = false;
    //  console.log(resp);
 });
} 
openForEdit(CotizacionId: number) {

    this.router.navigate(['kardex/cotizacion/'+CotizacionId]);
}
 
borrarCotizacion(cotizaciones: DataCotizacion, i: number) {
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Eliminar la cotizacion Nro${cotizaciones.nroCotizacion}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.cotizaciones.splice(i, 1);
      this.servicioKardex.deleteCotizacion(cotizaciones.id).subscribe();
    }
  });
} 
 /*
EstadoCotizacionAnular(cotizaciones: DataCotizacion, i: number) {
  console.log(i);
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Anular la cotizacion Nro${cotizaciones.nroCotizacion}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      this.cotizaciones.splice(i, 1);
      this.servicioKardex.EstadoCotizacionAnular(cotizaciones.id).subscribe();
    }
  });
}*/
}
