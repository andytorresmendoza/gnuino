import { Component,Inject, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataProducto } from '../../../models/producto'; 
import { NgForm } from '@angular/forms';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
 
import Swal from 'sweetalert2';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
@Component({
  selector: 'app-detalleentradaalmacen',
  templateUrl: './detalleentradaalmacen.component.html',
  styleUrls: ['./detalleentradaalmacen.component.css']
})
export class DetalleentradaalmacenComponent implements OnInit {
  productos: DataProducto[];
  almacenes: DataTipoAlmacen[]; 
  formData: DataDetalleIngresoAlmacen;
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleentradaalmacenComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService) { }

  ngOnInit(): void {
    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
  //  console.log(this.productos,'producto');
  
   });

   this.mantenimientosService.getTipoAlmacen()
   .subscribe(resp => {
     this.almacenes = resp as DataTipoAlmacen[]   
   //  console.log('principal', this.almacenes);
});
 
   this.formData = Object.assign({ 
    id:null,
     idDetalleCotizacion:this.data.id,
    idProducto: 0,
    cantidad:0, 
    cantidadPrincipal:0, 
    idSedePrincipal: null,
    precio_unidad:0

   },
   this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]);
 
  }
  onChangeAlmacen = ($event: any): void => {
    // console.log($event.nombre_alamcen);
    this.formData.nombre_alamcen = $event.nombre_alamcen 
    }

    
  onChange = ($event: any): void => {
    // this.formData.idProducto= $event.idProducto; 
    this.formData.nombre_producto= $event.nombre_producto; 
   
   }

   validateSelect(form:NgForm) {
    if(this.formData.idSedePrincipal == null )
       return   Swal.fire({
          title: 'Seleccionar Almacén' , 
          icon: 'error',
        });   
       
  }
  onSubmit(form: NgForm) {
 
  
  
    console.log(form.value);
    if(form.value.cantidadPrincipal > form.value.cantidad ||  form.value.cantidadPrincipal <= 0 ){
  
      return   Swal.fire({
        title: form.value.cantidad+' Productos se solicito' ,
        text: 'Cantidad Invalida',
        icon: 'error',
      });
      // this.toastr.error('CANTIDAD INVALIDA');
     }
     else if (this.validateSelect(form)){
      return;
     }
     
  else if  (this.data.orderItemIndex == null) {
  this.kardexService.detalleIngresoAlmacen.push(form.value);  
  }
  else{
  this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex] = form.value;
  //console.log(this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex],'component');
  this.dialogRef.close();
  // console.log('submit', ( this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]));
  }

}
 
  validateForm(FormDetalleA: DataDetalleIngresoAlmacen) {
    this.isValid = true;
    if (FormDetalleA.id == 0)
      this.isValid = false;
    // else if (FormDetalleA.cantidad == 0)
      this.isValid = false;
    return this.isValid;
  }
}
