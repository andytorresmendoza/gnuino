import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
 
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';
import { VentaService } from 'src/app/services/venta/venta.service';
import { DataCotizacionVenta } from 'src/app/models/cotizacionventa';
import { DataVentaDirecta } from '../../../models/ventadirecta';

@Component({
  selector: 'app-listarventadirectaanulado',
  templateUrl: './listarventadirectaanulado.component.html',
  styleUrls: ['./listarventadirectaanulado.component.css']
})
export class ListarventadirectaanuladoComponent implements OnInit {
  cotizaciones:DataVentaDirecta[]=[];
  cargando = true; 
  // isButtonVisible:boolean=true;
  displayedColumns: string[] = ['Nro Venta', 'Proveedor', 'Empleado', 'Total', 'Fecha Venta','Estado','details' ];
  dataSource = new MatTableDataSource<DataVentaDirecta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private ventaService: VentaService, private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {
    this. getVentaDirecta();

 }

 getVentaDirecta(){

  this.ventaService.getVentaDirectaAnuladas()
 .subscribe(resp => {
   this.dataSource.data = resp as DataVentaDirecta[]; 
     this.cotizaciones = resp; 
     this.ventaService.detalleVentaDirecta = resp[0].detalleCotizacion

    //  console.log(resp);
 
});
} 
 

openForEdit(CotizacionId: number) {
// console.log(CotizacionId,'editar');
   this.router.navigate(['venta/ventadirecta/'+CotizacionId]);
}

 
 
EstadoCotizacionAnular(cotizaciones: DataVentaDirecta, i: number) {
// console.log(cotizaciones,'1');
// console.log(i,'index');
 const bodyform = {id:cotizaciones.id, estadoCotizacionDirecta: '3'}
 console.log(cotizaciones.id);
 Swal.fire({
   title: 'Esta seguro?',
   text: `Que desea Anular la cotizacion Venta Nro${cotizaciones.codigo_cotizacion_dir_num_venta}`,
   icon: 'question',
   showConfirmButton: true,
   showCancelButton: true,
 }).then((resp) => {
   if (resp.value) {
     
     this.cotizaciones.splice(i, 1);
     console.log( this.cotizaciones.splice(i, 1),'slice');
     this.ventaService.EstadoVentaDirectaAnular(cotizaciones.id,bodyform).subscribe(
       resp => {
         this.toastr.error('Cotización Venta Anulada');
          this.ngOnInit();

     }

     );
   }
 });
}  
}
