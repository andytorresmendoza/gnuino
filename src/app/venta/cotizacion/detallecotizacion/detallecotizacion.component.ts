import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';   
import { DataDetalleCotizacionVenta } from 'src/app/models/detalle-cotizacionVenta';
import { DataProducto } from 'src/app/models/producto';
import { DataTipoAlmacen } from 'src/app/models/tipoalmacen';
// import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from '../../../services/venta/venta.service';

@Component({
  selector: 'app-detallecotizacion',
  templateUrl: './detallecotizacion.component.html',
  styleUrls: ['./detallecotizacion.component.css']
})
export class DetallecotizacionComponent implements OnInit {
  formData: DataDetalleCotizacionVenta;
  productos: DataProducto[];
  almacen:  DataTipoAlmacen[];
  arreglo: any[] = [];
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetallecotizacionComponent>,
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
    idCotizacionVenta: this.data.id,
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
  this.formData = Object.assign({}, this.ventaService.detalleCotizacion[this.data.orderItemIndex]);
    // console.log('dataentrada',this.formData);
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
  }); 
 
   }
onChange = ($event: any): void => {
  this.formData.nombre_producto= $event.nombre_producto; 
  this.formData.detalleNameUnidadMedida = $event.detalleUnidadMedida[0].detalle 
  // console.log('nuevo',$event.nombre_producto);
  // console.log($event.detalleUnidadMedida[0].detalle);
  // console.log($event);
   
 }

 onChange2 = ($event: any): void => {
  this.formData.nombre_alamcen= $event.nombre_alamcen; 
  console.log($event);
  // this.formData.detalleNameUnidadMedida = $event.detalleUnidadMedida[0].detalle 
  // console.log('nuevo',$event.nombre_producto);
  // console.log($event.detalleUnidadMedida[0].detalle);
  // console.log($event);
   
 }


onSubmit(form: NgForm) {
   console.log(form.value);
  if (this.validateForm(form.value)) {
    if (this.data.orderItemIndex == null) 
this.ventaService.detalleCotizacion.push(form.value);  

else
this.ventaService.detalleCotizacion[this.data.orderItemIndex] = form.value;
this.dialogRef.close();
// console.log('id',this.data.orderItemIndex);
// console.log('submit',this.kardexService.detalleCotizacion);
  }

}

validateForm(formData: DataDetalleCotizacion) {
  this.isValid = true;
  if (formData.id == 0)
    this.isValid = false;
  else if (formData.cantidad == 0)
    this.isValid = false;
  return this.isValid;
}
}
