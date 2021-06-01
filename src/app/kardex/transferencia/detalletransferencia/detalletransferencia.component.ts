import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTransferenciaProductos } from '../../../models/transferenciaproductos';
import { DataProducto } from '../../../models/producto';
import { DataDetalleTransferencias } from '../../../models/detalletransferencias';
import { DataAlmacenSecundario } from '../../../models/almacenSecundario';
import Swal from 'sweetalert2';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
@Component({
  selector: 'app-detalletransferencia',
  templateUrl: './detalletransferencia.component.html',
  styleUrls: ['./detalletransferencia.component.css']
})
export class DetalletransferenciaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalletransferenciaComponent>,
    public kardexService: KardexService,  private mantenimientosService: MantenimientosService)   { }
    formData: DataDetalleTransferencias;
    productos: DataProducto[];
    almacenesSecundario: DataAlmacenSecundario[]; 
    almacenes: DataTipoAlmacen[]; 
    // tipodevoluciones: DataTipodevolucion[];
  ngOnInit(): void {
    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
  //  console.log(this.productos,'producto');
  
   });
    
  this.kardexService.getAlmacenSecundario()
  .subscribe(resp => { 
    this.almacenesSecundario = resp as DataAlmacenSecundario[]  

 });

 this.mantenimientosService.getTipoAlmacen()
 .subscribe(resp => {
   this.almacenes = resp as DataTipoAlmacen[]   
   console.log('principal', this.almacenes);
});
   this.formData = Object.assign({
    id:null,
    idDetalleIngresoAlmacen:this.data.id, 
    idIngresoAlmacen: 0,
    // cantidadGlobal:0, /*ver estas cantidades */
    cantidadPrincipal:0,
    cantidadTransferencia:0 , 
    idSedeSecundaria:0,
    idTipoIngreso:0,  
    detalleTransferencia:'',  
    fechaTransferencia:'',
    idProducto:'',//agreagr
    nombre_alamcen:''

   },
   
   this.kardexService.detalleTransferencia[this.data.orderItemIndex]);
  }
  onChange = ($event: any): void => {
    this.formData.nombre_alamcen = $event.nombre_alamcen 
     
   }

   onSubmit(form: NgForm) {
    //  console.log('popup',form.value);
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
    } 
      else  if (this.data.orderItemIndex == null) {
        let fechaParseada: any;
        fechaParseada = moment(form.value.fechaTransferencia).format('YYYY-MM-DD');
        form.value.fechaTransferencia=fechaParseada;
   this.kardexService.detalleTransferencia.push(form.value);  
       }
   else{


    let fechaParseada: any;
    fechaParseada = moment(form.value.fechaTransferencia).format('YYYY-MM-DD');
    form.value.fechaTransferencia=fechaParseada;
   this.kardexService.detalleTransferencia[this.data.orderItemIndex] = form.value;

   this.dialogRef.close();
  //  console.log('id',this.data.orderItemIndex);
  //  console.log('submit',this.kardexService.detalleTransferencia);
     }
    }
}
