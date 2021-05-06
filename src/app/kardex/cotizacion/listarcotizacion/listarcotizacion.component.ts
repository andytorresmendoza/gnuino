import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataCotizacion } from '../../../models/cotizacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listarcotizacion',
  templateUrl: './listarcotizacion.component.html',
  styleUrls: ['./listarcotizacion.component.css']
})
export class ListarcotizacionComponent implements OnInit {

  cotizaciones:DataCotizacion[]=[];
  cargando = true; 
  public page: number = 0;
  public search: string = '';
  
  constructor
  (private servicioKardex: KardexService , private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {
     this. getCotizacion();
    // console.log(  this. getCotizacion());
  }

  getCotizacion(){

   this.servicioKardex.getCotizacion()
  .subscribe(resp => {
    
     this.cotizaciones = resp; 
     this.cargando = false;
     console.log(resp);
 });
} 
nextPage() {
  this.page += 5;
}

prevPage() {
  if ( this.page > 0 )
    this.page -= 5;
}
onSearchPokemon( search: string ) {
  this.page = 0;
  this.search = search;
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
 
EstadoCotizacionAnular(cotizaciones: DataCotizacion, i: number) {

  const bodyform = {id:cotizaciones.id, estadoCotizacion: '3'}
  console.log(cotizaciones.id);
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Anular la cotizacion Nro${cotizaciones.nroCotizacion}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      
      this.cotizaciones.splice(i, 1);
      this.servicioKardex.EstadoCotizacionAnular(cotizaciones.id,bodyform).subscribe(
        resp => {
          this.toastr.error('Cotización Anulada');
          // this.toastr.remove(cotizaciones.nroCotizacion );
       
    //  resp   console.log(resp);
         //  console.log(resp);
      }

      );
    }
  });
} 
}
