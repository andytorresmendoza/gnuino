import { Component, OnInit, Inject } from '@angular/core';
import { DataDetalleEntradasinOc } from '../../../models/detalleEntradasinOc';
import { DataProducto } from '../../../models/producto';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { DataAlmacenPrincipal } from '../../../models/almacenPrincipal';
import { DataAlmacenSecundario } from '../../../models/almacenSecundario';
import Swal from 'sweetalert2';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';

@Component({
  selector: 'app-detalleentradasinoc',
  templateUrl: './detalleentradasinoc.component.html',
  styleUrls: ['./detalleentradasinoc.component.css'],
})
export class DetalleentradasinocComponent implements OnInit {
  formData: DataDetalleEntradasinOc;
  productos: DataProducto[];
  almacenes: DataTipoAlmacen[];
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleentradasinocComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService
  ) {}

  ngOnInit(): void {
    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      //  console.log(this.productos,'producto');
    });
    this.mantenimientosService.getTipoAlmacen()
    .subscribe(resp => {
      this.almacenes = resp as DataTipoAlmacen[]   
      console.log('principal', this.almacenes);
 });

    if (this.data.orderItemIndex == null)
      this.formData = {
        id: null,
        idEntradaSinOc: this.data.id,
        codigoIngresoSinOc: '',
        idProducto: 0,
        nombre_producto: '',
        cantidad: 0,
        precioUnitario: 0,
        precioTotal: 0,
        observaciones: '', 
        cantidadGlobal: 0,
        cantidadPrincipal: 0,
        detalleNameUnidadMedida: '',
        idSedePrincipal: 0,
        nombre_alamcen: ''
      };
    else
      this.formData = Object.assign(
        {},
        this.kardexService.detalleIngresosinOc[this.data.orderItemIndex]
      );
    // console.log('dataentrada', this.formData );
  }

  onChange = ($event: any): void => {
    // console.log($event);
    this.formData.nombre_producto = $event.nombre_producto;
    this.formData.detalleNameUnidadMedida =
      $event.detalleUnidadMedida[0].detalle;
    // console.log('nuevo',$event.nombre_producto);
  };
  onChangeAlmacen = ($event: any): void => {
    // console.log($event.nombre_alamcen);
    this.formData.nombre_alamcen = $event.nombre_alamcen 
    }
  updateTotal() {
    this.formData.precioTotal = parseFloat(
      (this.formData.cantidad * this.formData.precioUnitario).toFixed(2)
    );
  }

  onSubmit(form: NgForm) {
    if(form.value.cantidadPrincipal > form.value.cantidad ||  form.value.cantidadPrincipal <= 0){
    
      return   Swal.fire({
        title:  form.value.cantidad+' Productos se solicito' ,
        text: 'Cantidad  Recibida Invalida',
        icon: 'error',
      }); 
     }
     else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
      control.markAsTouched(); //es para validar el guardar 
       });

   return;
     } 
     else if (this.data.orderItemIndex == null){
      
        this.kardexService.detalleIngresosinOc.push(form.value);
        this.dialogRef.close();
     }
else  {
        this.kardexService.detalleIngresosinOc[this.data.orderItemIndex] =
          form.value;
        this.dialogRef.close();
        //  console.log('submit', (form.value));
      }
    
  }
  validateForm(formData: DataDetalleEntradasinOc) {
    
    /*esta validacion es buena */
    this.isValid = true;
    // if (formData.id == 0) this.isValid = false;
    // else if (formData.cantidad == 0) this.isValid = false;
   if (formData.cantidadPrincipal === 0) this.isValid = false;

    return this.isValid;
  }
}
