import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';   
import { DataProducto } from 'src/app/models/producto';
import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { filter, map }  from  'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detallecotizacion',
  templateUrl: './detallecotizacion.component.html',
  styleUrls: ['./detallecotizacion.component.css'],
})
export class DetallecotizacionComponent implements OnInit {
  formData: DataDetalleCotizacion;
  productos: DataProducto[];
  isValid: boolean = true;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetallecotizacionComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService
  ) {}

  ngOnInit(): void {
 
      this.mantenimientosService.getProducto()
      .subscribe(resp => {
        

        this.productos = resp;
           });

    

 
if (this.data.orderItemIndex == null)
    this.formData = {
      id: null,
      idCotizacion: this.data.id,
      idProducto: null,
      nombre_producto: '',
      cantidad: '0',
      precio_unidad: '0.00',
      precio_total: '0.00',
      observaciones: '',
      codigo_cotizacion_num: '',
      detalleNameUnidadMedida: ''
    }
  
    else
    this.formData = Object.assign({}, this.kardexService.detalleCotizacion[this.data.orderItemIndex]);
      // console.log('dataentrada',this.formData);
  }

  // UpdateNombre(ctrl) {     
  //     this.formData.nombre_producto = this.productos[ctrl.selectedIndex - 1].nombre_producto;
  // }

  onDecimal() {
    if( this.formData.cantidad == null ){  
      this.formData.cantidad = '0'; 
      this.updateTotal(); 
      console.log(this.formData.cantidad);
   }
   else if (this.formData.precio_unidad == null){
    this.formData.precio_unidad ='0.00';
    this.updateTotal(); 
  }
  else if (this.formData.precio_total == null){
    this.formData.precio_total ='0.00';
    this.updateTotal(); 
  }

 
  else{
    
    this.formData.precio_unidad= (Number.parseFloat(this.formData.precio_unidad).toFixed(2)); 
     this.formData.precio_total= (Number.parseFloat(this.formData.precio_total).toFixed(2)); 
      }
   } 

  updateTotal(){


    let cantidad = this.formData.cantidad.toString();
     this.formData.precio_total = (parseFloat(cantidad) * parseFloat(this.formData.precio_unidad)).toFixed(2);
    
  }
  onChange = ($event: any): void => {
    console.log($event);
    this.formData.nombre_producto= $event.nombre_producto; 
    this.formData.detalleNameUnidadMedida = $event.detalleUnidadMedida[0].detalle 
 
     
   }
   validateForm(form:NgForm) {
    if(form.value.idProducto == null )
       return   Swal.fire({
          title: 'Seleccionar Producto' , 
          icon: 'error',
        });  
        else if  (form.value.cantidad == '0' )
         return   Swal.fire({
            title: 'Ingrese Cantidad' , 
            icon: 'error',
          });   
          else if  (form.value.precio_unidad == '0.00' )
          return   Swal.fire({
             title: 'Ingrese Precio Unidad' , 
             icon: 'error',
           });   
  }

  onSubmit(form: NgForm) {
  //  console.log(form.value);
   if(this.validateForm(form)){
return;
   } 
  else if (this.data.orderItemIndex == null) 
  this.kardexService.detalleCotizacion.push(form.value);  
  
  else
  this.kardexService.detalleCotizacion[this.data.orderItemIndex] = form.value;
  this.dialogRef.close();
  // console.log('id',this.data.orderItemIndex);
  // console.log('submit',this.kardexService.detalleCotizacion);
    }

 


}
