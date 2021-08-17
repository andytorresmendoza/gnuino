import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
 
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';
import { VentaService } from 'src/app/services/venta/venta.service';
import { DataCotizacionVenta } from 'src/app/models/cotizacionventa';
@Component({
  selector: 'app-listarcotizacion',
  templateUrl: './listarcotizacion.component.html',
  styleUrls: ['./listarcotizacion.component.css']
})
export class ListarcotizacionComponent implements OnInit {
  cotizaciones:DataCotizacionVenta[]=[];
  cargando = true; 
  // isButtonVisible:boolean=true;
  displayedColumns: string[] = ['Nro Cotizacion', 'Proveedor', 'Empleado', 'Total', 'Fecha Entrega','Estado','details','Anular'];
  dataSource = new MatTableDataSource<DataCotizacionVenta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private ventaService: VentaService, private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {
    this. getCotizacion();

 }

 getCotizacion(){

  this.ventaService.getCotizacionVenta()
 .subscribe(resp => {
   this.dataSource.data = resp as DataCotizacionVenta[]; 
     this.cotizaciones = resp; 
     this.ventaService.detalleCotizacion = resp;
     //aca esta el error anula el arreglo [0]
console.log( this.ventaService.detalleCotizacion);

  
});
} 
 

openForEdit(CotizacionId: number) {
// console.log(CotizacionId,'editar');
   this.router.navigate(['venta/venta/'+CotizacionId]);
}


EstadoCotizacionAnular(cotizaciones: DataCotizacionVenta, i: number) {
// console.log(cotizaciones,'1');
// console.log(i,'index');
const bodyform = {id:cotizaciones.id, estadoCotizacion: '3'} 
this.ventaService.getCotizacionById(cotizaciones.id).subscribe(res => {
  // console.log(res,'que trae ID');
  this.ventaService.detalleCotizacionAnular = res[0].detalleCotizacion;
 
  // console.log(this.ventaService.detalleCotizacionAnular,'que trae');
});

 
 console.log(cotizaciones.id);
 Swal.fire({
   title: 'Esta seguro?',
   text: `Que desea Anular la cotizacion Venta Nro${cotizaciones.codigo_cotizacion_num_venta}`,
   icon: 'question',
   showConfirmButton: true,
   showCancelButton: true,
 }).then((resp) => {
   if (resp.value) {
     
     this.cotizaciones.splice(i, 1);
     console.log( this.cotizaciones.splice(i, 1),'slice');
     this.ventaService.EstadoCotizacionVentaAnular(cotizaciones.id,bodyform).subscribe(
       resp => {
         this.toastr.error('Cotización Venta Anulada');
          this.ngOnInit();

     }

     );
   }
 });
}  
}
