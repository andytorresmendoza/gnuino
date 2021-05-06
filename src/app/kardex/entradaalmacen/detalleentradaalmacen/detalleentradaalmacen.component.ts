import { Component,Inject, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataProducto } from '../../../models/producto';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { NgForm } from '@angular/forms';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
 
import { DataAlmacenPrincipal } from '../../../models/almacenPrincipal';
import { DataAlmacenSecundario } from 'src/app/models/almacenSecundario';
 
@Component({
  selector: 'app-detalleentradaalmacen',
  templateUrl: './detalleentradaalmacen.component.html',
  styleUrls: ['./detalleentradaalmacen.component.css']
})
export class DetalleentradaalmacenComponent implements OnInit {
  productos: DataProducto[];
  almacenesPrincpal: DataAlmacenPrincipal[]; 
  almacenesSecundario: DataAlmacenSecundario[]; 
  // formData: DataDetalleCotizacion;
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
   
 /*if (this.data.orderItemIndex == null)
  this.formData = { 
    id: null,
    idDetalleCotizacion:this.data.id, 
    nombre_producto:'',
    detalleNameProducto:'',
    nombre_alamcen:'',
    nombre_almacenS:'',
    precio_unidad:0,
    precio_total:0,
    observaciones:'',
    idOrden:0, 
    // stockTotal:0,
    // realmente valen
    idProducto: 0,
    cantidad:0,
    idSedePrincipal:0,
    idSedeSecundaria:0,
    cantidadPrincipal:0,
    cantidaSecundaria:0,
    cantidadDevuelta:0, 
   }
   
     else */ 
   this.formData = Object.assign({
   
    idDetalleCotizacion:this.data.id,
    idProducto: 0,
    cantidad:0, 
    cantidadPrincipal:0, 

   },this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]);
   console.log('dataentrada',this.formData);
  //  console.log('dataentrada',this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]);
  }

  onSubmit(form: NgForm) {

    if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
  else if (this.data.orderItemIndex == null) 
  this.kardexService.detalleIngresoAlmacen.push(form.value);  
  
  else
  this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex] = form.value;
  this.dialogRef.close();
   console.log('submit', ( this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]));
 //  }

  }
  onChange = ($event: any): void => {
    // this.formData.idProducto= $event.idProducto; 
    this.formData.nombre_producto= $event.nombre_producto; 
   
   }

 
 /*onChangeAlmacenP = ($event: any): void => {
    console.log($event.nombre_alamcen);
    this.formData.nombreSedePrincipal = $event.nombreSedePrincipal 
    }

    onChangeAlmacenS(ctrl) {  
      console.log(ctrl);   
      //  this.formData.idSedeSecundaria = this.almacenesSecundario[ctrl.selectedIndex - 1].id;
      this.formData.nombreSedeSecundario = this.almacenesSecundario[ctrl.selectedIndex - 1].nombreSedeSecundario;
      
  }*/
 

  /* updateTotal(){
    this.formData.stockTotal = parseFloat((this.formData.cantidad  - this.formData.cantidadPrincipal- this.formData.cantidaSecundaria- this.formData.cantidadDevuelta).toFixed(2));
  }*/
  validateForm(FormDetalleA: DataDetalleIngresoAlmacen) {
    this.isValid = true;
    if (FormDetalleA.id == 0)
      this.isValid = false;
    // else if (FormDetalleA.cantidad == 0)
      this.isValid = false;
    return this.isValid;
  }
}
