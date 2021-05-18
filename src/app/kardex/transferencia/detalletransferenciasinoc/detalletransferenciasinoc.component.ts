import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { DataProducto } from '../../../models/producto';
import { DataAlmacenSecundario } from '../../../models/almacenSecundario';
import { DataDetalleTransferenciasinOc } from '../../../models/detalletransferenciasinoc';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalletransferenciasinoc',
  templateUrl: './detalletransferenciasinoc.component.html',
  styleUrls: ['./detalletransferenciasinoc.component.css'],
})
export class DetalletransferenciasinocComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalletransferenciasinocComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService
  ) {}
  formData: DataDetalleTransferenciasinOc;
  productos: DataProducto[];
  almacenesSecundario: DataAlmacenSecundario[];
  

  ngOnInit(): void {
    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
      //  console.log(this.productos,'producto');
    });

    this.kardexService.getAlmacenSecundario().subscribe((resp) => {
      this.almacenesSecundario = resp as DataAlmacenSecundario[];
      // console.log('secundario', this.almacenesSecundario);
      //  console.log(this.productos,'producto');
    });
    this.formData = Object.assign(
      {
        id: null,
        idDetalleIngresoAlmacen: this.data.id,
        idEntradaSinOc: 0,
        // cantidadGlobal:0, /*ver estas cantidades */
        cantidadPrincipal: 0,
        cantidadTransferencia: 0,
        idSedeSecundaria: 0,
        idTipoIngreso: 0,
        detalleTransferencia: '',
        fechaTransferencia: '',
        idProducto: '', //agreagr
      },

      this.kardexService.detalleTransferenciasinoc[this.data.orderItemIndex]
      
    );
    // console.log('PRIMERO',this.data.orderItemIndex)
  }
  onChange = ($event: any): void => {
    this.formData.nombreSedeSecundario = $event.nombreSedeSecundario;
  };

 /* onSubmit(form: NgForm) { 
    if (
      form.value.cantidadTransferencia > form.value.cantidadPrincipal ||
      form.value.cantidadTransferencia <= 0
    ) {
      return Swal.fire({
        title: form.value.cantidadPrincipal + ' Productos en Stock',
        text: 'Cantidad Transferencia Invalida',
        icon: 'error',
      });
    } else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
      });

      return;
    } else if (this.data.orderItemIndex == null) {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaTransferencia).format(
        'YYYY-MM-DD'
      );
      form.value.fechaTransferencia = fechaParseada;
      this.kardexService.detalleTransferenciasinoc.push(form.value);
    } else {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaTransferencia).format(
        'YYYY-MM-DD'
      );
      form.value.fechaTransferencia = fechaParseada;
      this.kardexService.detalleTransferenciasinoc[this.data.orderItemIndex] =
        form.value;

      this.dialogRef.close();
      console.log('id', this.data.orderItemIndex);
      console.log('submit', this.kardexService.detalleTransferenciasinoc);
    }
  }*/
  onSubmit(form: NgForm) { 
    if (this.data.orderItemIndex == null) {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaTransferencia).format(
        'YYYY-MM-DD'
      );
      form.value.fechaTransferencia = fechaParseada;
     
      this.kardexService.detalleTransferenciasinoc.push(form.value);
  
      

    } else {
      let fechaParseada: any;
      fechaParseada = moment(form.value.fechaTransferencia).format(
        'YYYY-MM-DD'
      );
      form.value.fechaTransferencia = fechaParseada;
      this.kardexService.detalleTransferenciasinoc[this.data.orderItemIndex] = form.value;

      // console.log('ORDER',this.data.orderItemIndex);
      // console.log('push',form.value);
      this.dialogRef.close();
      // // console.log('id', this.data.orderItemIndex);
        // console.log('submit', this.kardexService.detalleTransferenciasinoc);
    }
  }
}
