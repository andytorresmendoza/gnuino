import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataDetalleCotizacion } from 'src/app/models/detalle-cotizacion';   
import { DataProducto } from 'src/app/models/producto';
import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { filter, map }  from  'rxjs/operators';
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
      cantidad: 0,
      precio_unidad: 0,
      precio_total: 0,
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

  onChangeDecimal() {
    // this.formData.precio_unidad= parseFloat((this.formData.precio_unidad).toFixed(2));
     this.formData.precio_unidad  =   parseFloat((this.formData.precio_unidad ).toExponential(2)); 
   } 

  updateTotal(){
    this.formData.precio_total = parseFloat((this.formData.cantidad * this.formData.precio_unidad).toFixed(2));
    
  }
  onChange = ($event: any): void => {
    console.log($event);
    this.formData.nombre_producto= $event.nombre_producto; 
    this.formData.detalleNameUnidadMedida = $event.detalleUnidadMedida[0].detalle 
 
     
   }

  onSubmit(form: NgForm) {
  //  console.log(form.value);
    if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null) 
  this.kardexService.detalleCotizacion.push(form.value);  
  
  else
  this.kardexService.detalleCotizacion[this.data.orderItemIndex] = form.value;
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
