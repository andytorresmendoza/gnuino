import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { DataDetalleSalidaAlmacen } from '../../../models/detallesalidaalmacen';
import { DataProducto } from '../../../models/producto';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoSalida } from '../../../models/tiposalida';
import * as moment from 'moment';

@Component({
  selector: 'app-detallesalidaproducto',
  templateUrl: './detallesalidaproducto.component.html',
  styleUrls: ['./detallesalidaproducto.component.css']
})
export class DetallesalidaproductoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetallesalidaproductoComponent>,
    public kardexService: KardexService,  private mantenimientosService: MantenimientosService)   { }

  formData: DataDetalleSalidaAlmacen;
  productos: DataProducto[];
  tiposalidas: DataTipoSalida[];
  ngOnInit(): void {

    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
  //  console.log(this.productos,'producto');
  
   });

   this.mantenimientosService.getTiposalida()
   .subscribe(resp => {
     
      this.tiposalidas =  resp as DataTipoSalida[]

    });
    this.formData = Object.assign({
      id:null,
      idDetalleIngresoAlmacen:this.data.id, 
      idIngresoAlmacen: 0,
      cantidadGlobal:0,
      cantidadPrincipal:0,
      cantidadSalida:0 , 
      idTipoSalida:0,
      idTipoIngreso:0,  
      detalleSalida:'',  
      fechaSalida:'',
      idProducto:'',//agreagr
  
     },
     
     this.kardexService.detalleSalida[this.data.orderItemIndex]);
    //  console.log('dataentrada',this.formData);
  }
  onChange = ($event: any): void => {
    this.formData.descripcion_salida= $event.descripcion_salida;  
     
   }
 
  onSubmit(form: NgForm) {
    //  console.log('popup',form.value);
      
       if (this.data.orderItemIndex == null) {
        let fechaParseada: any;
        fechaParseada = moment(form.value.fechaSalida).format('YYYY-MM-DD');
        form.value.fechaSalida=fechaParseada;
   this.kardexService.detalleSalida.push(form.value);  
       }
   else{


    let fechaParseada: any;
    fechaParseada = moment(form.value.fechaSalida).format('YYYY-MM-DD');
    form.value.fechaSalida=fechaParseada;
   this.kardexService.detalleSalida[this.data.orderItemIndex] = form.value;

   this.dialogRef.close();
   console.log('id',this.data.orderItemIndex);
   console.log('submit',this.kardexService.detalleSalida);
     }
    }
   }
 
