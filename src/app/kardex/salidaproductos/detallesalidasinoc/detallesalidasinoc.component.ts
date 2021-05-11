import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataProducto } from '../../../models/producto';
import { DataTipoSalida } from '../../../models/tiposalida';
import { DataDetalleSalidasinOc } from '../../../models/detallesinocalmacen';
import * as moment from 'moment';
@Component({
  selector: 'app-detallesalidasinoc',
  templateUrl: './detallesalidasinoc.component.html',
  styleUrls: ['./detallesalidasinoc.component.css']
})
export class DetallesalidasinocComponent implements OnInit {

  formData: DataDetalleSalidasinOc;
  productos: DataProducto[];
  tiposalidas: DataTipoSalida[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetallesalidasinocComponent>,
    public kardexService: KardexService,  private mantenimientosService: MantenimientosService)   { }

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
      idEntradaSinOc:0,
      cantidadGlobal:0,
      cantidadPrincipal:0,
      cantidadSalida:0 , 
      idTipoSalida:0,
      idTipoIngreso:0,  
      detalleSalida:'',  
      fechaSalida:'',
      idProducto:'',//agreagr
     
  
     },
     
     this.kardexService.detalleSalidasinOC[this.data.orderItemIndex]);
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
   this.kardexService.detalleSalidasinOC.push(form.value);  
       }
   else{


    let fechaParseada: any;
    fechaParseada = moment(form.value.fechaSalida).format('YYYY-MM-DD');
    form.value.fechaSalida=fechaParseada;
   this.kardexService.detalleSalidasinOC[this.data.orderItemIndex] = form.value;

   this.dialogRef.close();
   console.log('id',this.data.orderItemIndex);
   console.log('submit',this.kardexService.detalleSalidasinOC);
     }
    }
}
