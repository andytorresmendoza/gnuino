import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataCotizacion } from '../../../models/cotizacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listarcotizacion',
  templateUrl: './listarcotizacion.component.html',
  styleUrls: ['./listarcotizacion.component.css']
})
export class ListarcotizacionComponent implements OnInit {

  cotizaciones:DataCotizacion[]=[];
  cargando = true; 

  displayedColumns: string[] = ['Nro Cotizacion', 'Proveedor', 'Empleado', 'Total', 'Fecha Entrega','Estado','details','Anular'];
  dataSource = new MatTableDataSource<DataCotizacion>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private servicioKardex: KardexService , private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {
     this. getCotizacion();
 
  }

  getCotizacion(){

   this.servicioKardex.getCotizacion()
  .subscribe(resp => {
    this.dataSource.data = resp as DataCotizacion[]; 
      this.cotizaciones = resp; 
     this.cargando = false;
      console.log(resp);
 });
} 
  

openForEdit(CotizacionId: number) {
console.log(CotizacionId,'editar');
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
console.log(cotizaciones,'1');
console.log(i,'index');
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
      console.log( this.cotizaciones.splice(i, 1),'slice');
      this.servicioKardex.EstadoCotizacionAnular(cotizaciones.id,bodyform).subscribe(
        resp => {
          this.toastr.error('Cotización Anulada');
           this.ngOnInit();
 
      }

      );
    }
  });
} 
}
