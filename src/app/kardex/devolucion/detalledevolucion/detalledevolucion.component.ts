import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { DataProducto } from '../../../models/producto';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataDetalleDevolucion } from '../../../models/detalledevolucion';
import { DataTipodevolucion } from '../../../models/tipodevolucion';
@Component({
  selector: 'app-detalledevolucion',
  templateUrl: './detalledevolucion.component.html',
  styleUrls: ['./detalledevolucion.component.css']
})
export class DetalledevolucionComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalledevolucionComponent>,
    public kardexService: KardexService,  private mantenimientosService: MantenimientosService)   { }
    formData: DataDetalleDevolucion;
    productos: DataProducto[];
    tipodevoluciones: DataTipodevolucion[];

  ngOnInit(): void {
    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
  //  console.log(this.productos,'producto');
  
   });

   this.mantenimientosService.getTipoDevolucion()
   .subscribe(resp => {
     
      this.tipodevoluciones = resp as DataTipodevolucion[]  
      console.log(this.tipodevoluciones,'devoluciones');
    });

   this.formData = Object.assign({
    id:null,
    idDetalleIngresoAlmacen:this.data.id, 
    idIngresoAlmacen: 0,
    // cantidadGlobal:0,
    cantidadPrincipal:0,
    cantidadDevolucion:0 , 
    idTipoDevolucion:0,
    idTipoIngreso:0,  
    detalleDevolucion:'',  
    fechaDevolucion:'',
    idProducto:'',//agreagr

   },
   
   this.kardexService.detalleDevoluciones[this.data.orderItemIndex]);
  }

  onChange = ($event: any): void => {
    this.formData.descripcion_devolucion= $event.descripcion_devolucion;  
     
   }
  onSubmit(form: NgForm) {
    //  console.log('popup',form.value);
      
       if (this.data.orderItemIndex == null) {
        let fechaParseada: any;
        fechaParseada = moment(form.value.fechaDevolucion).format('YYYY-MM-DD');
        form.value.fechaDevolucion=fechaParseada;
   this.kardexService.detalleDevoluciones.push(form.value);  
       }
   else{


    let fechaParseada: any;
    fechaParseada = moment(form.value.fechaDevolucion).format('YYYY-MM-DD');
    form.value.fechaDevolucion=fechaParseada;
   this.kardexService.detalleDevoluciones[this.data.orderItemIndex] = form.value;

   this.dialogRef.close();
   console.log('id',this.data.orderItemIndex);
   console.log('submit',this.kardexService.detalleDevoluciones);
     }
    }

}
