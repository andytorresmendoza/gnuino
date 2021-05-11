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
    // console.log('secundario', this.almacenesSecundario); 
//  console.log(this.productos,'producto');

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

   },
   
   this.kardexService.detalleTransferencia[this.data.orderItemIndex]);
  }
  onChange = ($event: any): void => {
    this.formData.nombreSedeSecundario= $event.nombreSedeSecundario;  
     
   }

   onSubmit(form: NgForm) {
    //  console.log('popup',form.value);
      
       if (this.data.orderItemIndex == null) {
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
   console.log('submit',this.kardexService.detalleTransferencia);
     }
    }
}
