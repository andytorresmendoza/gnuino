import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { DataDetalleDevolucionSinOc } from '../../../models/detalledevolucionsinoc';
import { DataProducto } from '../../../models/producto';
import { DataAlmacenSecundario } from '../../../models/almacenSecundario';
import { DataTipodevolucion } from '../../../models/tipodevolucion';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalledevolucionsinoc',
  templateUrl: './detalledevolucionsinoc.component.html',
  styleUrls: ['./detalledevolucionsinoc.component.css'],
})
export class DetalledevolucionsinocComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalledevolucionsinocComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService
  ) {}
  formData: DataDetalleDevolucionSinOc;
  productos: DataProducto[];
  tipodevoluciones: DataTipodevolucion[];
  ngOnInit(): void {
    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      //  console.log(this.productos,'producto');
    });

    this.mantenimientosService.getTipoDevolucion().subscribe((resp) => {
      this.tipodevoluciones = resp as DataTipodevolucion[];
      // console.log(this.tipodevoluciones, 'devoluciones');
    });
    this.formData = Object.assign(
      {
        id: null,
        idDetalleIngresoAlmacen: this.data.id,
        idEntradaSinOc: 0,
        // cantidadGlobal:0,
        cantidadPrincipal: 0,
        cantidadDevolucion: 0,
        idTipoDevolucion: null,
        idTipoIngreso: 0,
        detalleDevolucion: '',
        fechaDevolucion: '',
        idProducto: 0, //agreagr
        cantidadPendiente: 0,
        idSedePrincipal: 0,
        detalleNameSedePrincipal:''

      },

      this.kardexService.detalleDevolucionesSinOC[this.data.orderItemIndex]
   
    );
    //console.log('form', this.formData);
  }
  onChange = ($event: any): void => {
    this.formData.descripcion_devolucion = $event.descripcion_devolucion;
  };
  validateSelect(form:NgForm) {
    if(this.formData.idTipoDevolucion == null )
       return   Swal.fire({
          title: 'Seleccionar Tipo Devoluci??n' , 
          icon: 'error',
        });   
       
  }
  onSubmit(form: NgForm) {
    if (this.validateSelect(form)){
      return;
     }
   else  if (
      form.value.cantidadDevolucion > form.value.cantidadPendiente ||
      form.value.cantidadDevolucion <= 0
    ) {
      return Swal.fire({
        title: form.value.cantidadPendiente + ' Productos en Stock',
        text: 'Cantidad Devoluci??n Invalida',
        icon: 'error',
      });
    } else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
      });

      return;
    }
   else if (this.data.orderItemIndex == null) {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaDevolucion).format('YYYY-MM-DD');
      form.value.fechaDevolucion = fechaParseada;
      this.kardexService.detalleDevolucionesSinOC.push(form.value);
    } else {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaDevolucion).format('YYYY-MM-DD');
      form.value.fechaDevolucion = fechaParseada;
      this.kardexService.detalleDevolucionesSinOC[this.data.orderItemIndex] =
        form.value;

      this.dialogRef.close();
      // console.log('id', this.data.orderItemIndex);
      // console.log('submit', this.kardexService.detalleDevolucionesSinOC);
    }
  }
}
