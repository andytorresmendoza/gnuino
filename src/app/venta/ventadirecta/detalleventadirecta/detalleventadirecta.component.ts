import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';   

import { DataProducto } from 'src/app/models/producto';
import { DataTipoAlmacen } from 'src/app/models/tipoalmacen';
// import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from '../../../services/venta/venta.service';
import Swal from 'sweetalert2';
import { DataDetalleVentaDirecta } from '../../../models/detalle-ventaDirecta';

@Component({
  selector: 'app-detalleventadirecta',
  templateUrl: './detalleventadirecta.component.html',
  styleUrls: ['./detalleventadirecta.component.css']
})
export class DetalleventadirectaComponent implements OnInit {
  formData: DataDetalleVentaDirecta;
  productos: DataProducto[];
  almacen:  DataTipoAlmacen[];
  arreglo: any[] = [];
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleventadirectaComponent>,
    // public kardexService: KardexService,
    public ventaService: VentaService,
    private mantenimientosService: MantenimientosService
  ) { 

  }

  ngOnInit(): void { 
 
    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  

    //  console.log(this.productos,'producto');
  
   });

   this.mantenimientosService.getTipoAlmacen()
   .subscribe(resp => {
     this.almacen = resp as DataTipoAlmacen[]   
  //  console.log('principal', this.almacen);
});
 
if (this.data.orderItemIndex == null)
  this.formData = {
    id: null,
    idCotizacionVentaDirecta: this.data.id,
    idProducto: null,
    nombre_producto: '',
    cantidad: 0,
    precioVenta: 0,
    stock: 0,
    observacion: '',
    codigo_cotizacion_num: '',
    detalleNameUnidadMedida: '',
    idAlmacen:null,
    nombre_alamcen:''
  }

  else
  // console.log(this.ventaService.detalleCotizacion,'QUE TRAE');
  
//  console.log(almacen, producto);
  this.formData = Object.assign({},this.ventaService.detalleVentaDirecta[this.data.orderItemIndex]); 
    this.onChangeMatch (this.ventaService.detalleVentaDirecta [this.data.orderItemIndex].idProducto, this.ventaService.detalleVentaDirecta[this.data.orderItemIndex].idAlmacen);
 
}

 
/*updateTotal(){
  this.formData.precio_total = parseFloat((this.formData.cantidad * this.formData.precioVenta).toFixed(2));
}*/
/*MatchKardex = ($event: any): void => {

  this.formData.idProducto = $event.idProducto;
  console.log(this.formData.idProducto);
  }*/


  /*MatchKardex(idProducto:number, idAlmacen:number){
   this.ventaService.MatchKardex(idProducto,idAlmacen).subscribe((resp:any) => { 
    this.formData.precioVenta = resp.precioVenta  
   this.formData.stock = resp.cantidad   
    }); 
 
  }*/
onChangeMatch (idProducto:number, idAlmacen:number)  {

  this.ventaService.MatchKardex(idProducto,idAlmacen).subscribe((resp:any) => { 
    this.formData.precioVenta = resp.precioVenta  
   this.formData.stock = resp.cantidad   
  //  console.log(resp);
  }); 
 
   }
   onChange = (id: any): void => {
    
    this.mantenimientosService.getProductoId(id).subscribe(res => {
      this.formData.nombre_producto = res[0].nombre_producto; 
      this.formData.detalleNameUnidadMedida = res[0].detalleUnidadMedida[0].detalle; 
  
    });
  }

 onChangeAlmacen = ($event: any): void => {
  //  console.log($event);
  this.formData.nombre_alamcen= $event.nombre_alamcen;  
   
 }
 validateSelect(form:NgForm) {
  if(this.formData.idProducto == null )
     return   Swal.fire({
        title: 'Seleccionar Producto' , 
        icon: 'error',
      });   
      else  if(this.formData.idAlmacen == null )
      return   Swal.fire({
         title: 'Seleccionar Almac??n' , 
         icon: 'error',
       });   
     
}
onSubmit(form: NgForm) {
  // console.log(form.value);
  if (this.validateSelect(form)){
    return;
   }
  else  if(form.value.cantidad > form.value.stock ||  form.value.cantidad <= 0){
    
    return   Swal.fire({
      title: 'Ingresar Cantidad Correcta' , 
      icon: 'error',
    });
    // this.toastr.error('CANTIDAD INVALIDA');
   }

  else if (this.validateForm(form.value)) {
    if (this.data.orderItemIndex == null) 
this.ventaService.detalleVentaDirecta.push(form.value);  

else
this.ventaService.detalleVentaDirecta[this.data.orderItemIndex] = form.value;
this.dialogRef.close();
// console.log('id',this.data.orderItemIndex);
// console.log('submit',this.kardexService.detalleCotizacion);
  }

}

validateForm(formData: DataDetalleCotizacion) {
  this.isValid = true;
  if (formData.id == 0)
    this.isValid = false;
 
  return this.isValid;
}
}
