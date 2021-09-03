import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';
import { VentaService } from 'src/app/services/venta/venta.service';
import { DataCotizacionVenta } from 'src/app/models/cotizacionventa';
import { CambiomedidaventaComponent } from '../cambiomedidaventa/cambiomedidaventa.component'; 
import { VistapreviacotizacionComponent } from '../vistapreviacotizacion/vistapreviacotizacion.component';
@Component({
  selector: 'app-listarcotizacion',
  templateUrl: './listarcotizacion.component.html',
  styleUrls: ['./listarcotizacion.component.css']
})
export class ListarcotizacionComponent implements OnInit {
  cotizaciones:DataCotizacionVenta[]=[];
  cargando = true; 
  isButtonVisible:boolean=true; 
  // isButtonVisible:boolean=true;
  // displayedColumns: string[] = ['Nro Cotizacion', 'Proveedor', 'Empleado', 'Total', 'Fecha Entrega','Estado','details' ,'Anular'];
 displayedColumns: string[] = ['Vista','Nro Cotizacion', 'Proveedor', 'Empleado', 'Total', 'Fecha Entrega','Estado','details','cambio','Anular'];
  dataSource = new MatTableDataSource<DataCotizacionVenta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private ventaService: VentaService, private router:Router,   private dialog: MatDialog,  private toastr: ToastrService ) { }

  ngOnInit(): void {
    this. getCotizacion();

 }

 getCotizacion(){

  this.ventaService.getCotizacionVenta()
 .subscribe(resp => {
   this.dataSource.data = resp as DataCotizacionVenta[]; 
     this.cotizaciones = resp; 
     this.ventaService.detalleCotizacion = resp; 
    //  console.log(resp);
});
} 
 

openForEdit(CotizacionId: number) { 
   this.router.navigate(['venta/venta/'+CotizacionId]);
}

cambiomedida( id) {
  console.log(id,'cambio');
 const dialogConfig = new MatDialogConfig();
 dialogConfig.autoFocus = true;
 dialogConfig.disableClose = true;
 dialogConfig.width = "50%";
 dialogConfig.data = { id };
    this.dialog.open(CambiomedidaventaComponent, dialogConfig).afterClosed().subscribe(resp=>{

  });

 }

 vistaPrevia( id) {
  console.log(id,'vista');
 const dialogConfig = new MatDialogConfig();
 dialogConfig.autoFocus = true;
 dialogConfig.disableClose = true;
 dialogConfig.width = "65%";
 dialogConfig.data = { id };
    this.dialog.open(VistapreviacotizacionComponent, dialogConfig).afterClosed().subscribe(resp=>{

  });

 }
EstadoCotizacionAnular(cotizaciones: DataCotizacionVenta, i: number) {
 
const bodyform = {id:cotizaciones.id, estadoCotizacion: '3'} 
this.ventaService.getCotizacionById(cotizaciones.id).subscribe(res => { 
  this.ventaService.detalleCotizacionAnular = res[0].detalleCotizacion; 
});

 
//  console.log(cotizaciones.id);
 Swal.fire({
   title: 'Esta seguro?',
   text: `Que desea Anular la cotizacion Venta Nro${cotizaciones.codigo_cotizacion_num_venta}`,
   icon: 'question',
   showConfirmButton: true,
   showCancelButton: true,
 }).then((resp) => {
   if (resp.value) {
     
     this.cotizaciones.splice(i, 1);
    //  console.log( this.cotizaciones.splice(i, 1),'slice');
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
