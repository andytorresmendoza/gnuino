 
import { VentaService } from '../../../services/venta/venta.service';
import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms'; 
import Swal from 'sweetalert2'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DataDetalleCotizacionVenta } from '../../../models/detalle-cotizacionVenta';
import { DetallecotizacioncambioComponent } from '../detallecotizacioncambio/detallecotizacioncambio.component';
import { DataDetalleCotizacionVentaCambio } from '../../../models/detalle-cotizacionVentaCambio';
import { DataDetalleCotizacionVentaDevolucion } from '../../../models/devolucion-cotizacionventa';
 
@Component({
  selector: 'app-devolucionventa',
  templateUrl: './devolucionventa.component.html',
  styleUrls: ['./devolucionventa.component.css']
})
export class DevolucionventaComponent implements OnInit {
 
  devolucionCotizacionVenta: DataDetalleCotizacionVentaDevolucion[]= [];
 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,public ventaService: VentaService,  private dialog: MatDialog,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute 
    ) {

     }
  ngOnInit(): void {
this.getListCambioMedida();
  }
  getListCambioMedida(){ 
    this.ventaService.getCotizacionById(this.data.id) 
   .subscribe(resp => {
     console.log(resp);
    // this.dataSource.data = resp[0].detalleCotizacion as DataDetalleCotizacionVenta[]; 
    this.devolucionCotizacionVenta = resp[0].detalleCotizacion;
    // console.log(this.devolucionCotizacionVenta);
 
  });
}
/*
AddDevolucion(orderItemIndex, id) { 
  console.log(orderItemIndex, id);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { orderItemIndex, id };

  // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
   this.dialog.open(DetallecotizacioncambioComponent, dialogConfig).afterClosed().subscribe(resp=>{
    // console.log(resp);
    this.ngOnInit();
    // this.updateTotal();
    // this. updateMontoTotal();
   });
 
  }*/
  AddDevolucion(devolucion:DataDetalleCotizacionVentaDevolucion, id: number){
    //  console.log(devolucion,'QUE TRAE',id)
      const devo = this.devolucionCotizacionVenta 
      
   const respuesta =  devo.filter(res=>  id === res.id );

   const bodyform = {
    idCotizacionVenta:respuesta[0].id,
    idVentaDirecta: '',
    idProducto: respuesta[0].idProducto,
    idAlmacen: respuesta[0].idAlmacen,
    precioVenta: respuesta[0].precioVenta,
    cantidad: respuesta[0].cantidad}

    Swal.fire({
      title: 'Esta seguro?',
  //  text: `Que Realizar la Devolución del Producto ${devolucionCotizacionVenta.nombre_producto}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        
        this.devolucionCotizacionVenta.splice(id, 1);
       //  console.log( this.cotizaciones.splice(i, 1),'slice');
        this.ventaService.DevolucionVenta(respuesta[0].id,bodyform).subscribe(
          resp => {
            this.toastr.error('Producto Devuelto');
             this.ngOnInit();
   
        }
   
        );
      }
    });
   }  
   }