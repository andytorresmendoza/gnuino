import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DetalleentradaalmacenComponent } from '../detalleentradaalmacen/detalleentradaalmacen.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editdetalleentradaalmacen',
  templateUrl: './editdetalleentradaalmacen.component.html',
  styleUrls: ['./editdetalleentradaalmacen.component.css']
})
export class EditdetalleentradaalmacenComponent implements OnInit {
  formData: DataDetalleIngresoAlmacen;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleentradaalmacenComponent>,/*verificar este componente */
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService, private toastr: ToastrService
   
    ) {  }
   
    

  ngOnInit(): void {

    this.formData = Object.assign({
      id:this.data.id,  
      idIngresoAlmacen: 0,
      idProducto: 0,
      cantidadGlobal:0,
      idDetalleCotizacion:0,
       idSedePrincipal:0,
      // idSedeSecundaria:0,
      cantidadPrincipal:0,
      precio_unidad:0
      // cantidaSecundaria:0,
      // cantidadDevuelta:0, 
  
     },this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]);
     console.log('dataentrada',this.kardexService.detalleIngresoAlmacen);
  }

 

  onSubmit(form: NgForm) { 
 if((form.value.cantidadPrincipal + form.value.cantidadPendiente)   > form.value.cantidadGlobal ||  form.value.cantidadPendiente <= 0){
    
  return   Swal.fire({
    // title:  form.value.cantidadGlobal +' Productos se solicito' ,
    title: `Cantidad Pendiente ${form.value.cantidadGlobal - form.value.cantidadPendiente}`,
    text: 'Cantidad  Recibida Invalida',
    icon: 'error',

  

  });
  // this.toastr.error('CANTIDAD INVALIDA');
 }
 
 if (this.data.orderItemIndex == null) 
   this.kardexService.detalleIngresoAlmacen.push(form.value);  
   
   else
  // console.log( form.value, 'form');
   this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex] = form.value;
   
   this.dialogRef.close();
    // console.log('submit', ( this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]));
  //  }
 
   }
}
