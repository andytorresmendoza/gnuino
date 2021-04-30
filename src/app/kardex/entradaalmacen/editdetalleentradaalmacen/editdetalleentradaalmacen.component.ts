import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DetalleentradaalmacenComponent } from '../detalleentradaalmacen/detalleentradaalmacen.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-editdetalleentradaalmacen',
  templateUrl: './editdetalleentradaalmacen.component.html',
  styleUrls: ['./editdetalleentradaalmacen.component.css']
})
export class EditdetalleentradaalmacenComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleentradaalmacenComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService) { }
    formData: DataDetalleIngresoAlmacen;

  ngOnInit(): void {

    this.formData = Object.assign({
      id:this.data.id, 
      idIngresoAlmacen: 0,
      // idProducto: 0,
      cantidadGlobal:0,
      // idSedePrincipal:0,
      // idSedeSecundaria:0,
      cantidadPrincipal:0,
      cantidaSecundaria:0,
      cantidadDevuelta:0, 
  
     },this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]);
     console.log('dataentrada',this.formData);
  }
  onSubmit(form: NgForm) {

    console.log(form);
    //if (this.validateForm(form.value)) {
        if (this.data.orderItemIndex == null) 
   this.kardexService.detalleIngresoAlmacen.push(form.value);  
   
   else
   this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex] = form.value;
   this.dialogRef.close();
    console.log('submit', ( this.kardexService.detalleIngresoAlmacen[this.data.orderItemIndex]));
  //  }
 
   }
}
