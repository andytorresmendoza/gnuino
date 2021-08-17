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
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detalletransferencia',
  templateUrl: './detalletransferencia.component.html',
  styleUrls: ['./detalletransferencia.component.css']
})
export class DetalletransferenciaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalletransferenciaComponent>,
    public kardexService: KardexService,  private mantenimientosService: MantenimientosService, private toastr: ToastrService, private router: Router)   { }
    formData: DataDetalleTransferencias;
    productos: DataProducto[];
   // almacenesSecundario: DataAlmacenSecundario[]; 
    almacenes: DataTipoAlmacen[]; 
    almacenes2: DataTipoAlmacen[]; 
    // tipodevoluciones: DataTipodevolucion[];
  ngOnInit(): void {
    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
  //  console.log(this.productos,'producto');
  
   });
    
   this.mantenimientosService.getTipoAlmacen()
    .subscribe(resp => {
      this.almacenes = resp as DataTipoAlmacen[]   
    //  console.log('principal', this.almacenes);
 });

 this.mantenimientosService.getTipoAlmacen2()
 .subscribe(resp => {
   this.almacenes2 = resp as DataTipoAlmacen[]   
  // console.log('sec', this.almacenes);
});

 
   this.formData = Object.assign({
    id:null,
    idProducto:0, 
    cantidadGlobal: 0, 
   // cantidadPrincipal:0,
    cantidadTransferencia:0 , 
    idSedeSecundaria:0,
    idTipoIngreso:0,  
    idAlmacen1: 0,
    idAlmacen2: null,
    detalleTransferencia:'',  
    fechaTransferencia:'',
  //agreagr
    nombre_alamcen:'',
    nombre_producto: '' ,

   },
   
   this.kardexService.detalleTransferencia[this.data.orderItemIndex]);
  }
  onChange = ($event: any): void => {
    this.formData.nombre_alamcen = $event.nombre_alamcen 
     
   }
   validateSelect(form:NgForm) {
    if(this.formData.idAlmacen2 == null )
       return   Swal.fire({
          title: 'Seleccionar Tipo Almacén' , 
          icon: 'error',
        });   
       
  }
   onSubmit(form: NgForm) {
  console.log('popup',form.value);
  if (this.validateSelect(form)){
    return;
   }

 else if (
      form.value.cantidadTransferencia > form.value.cantidadIngresoOc ||
      form.value.cantidadTransferencia <= 0
    ) {
      return Swal.fire({
        // title: form.value.cantidadPrincipal + ' Productos en Stock',
        text: 'Cantidad Transferencia Invalida',
        icon: 'error',
      });
    } else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
      });

      return;
    } 
      
   else{


    let fechaParseada: any;
    fechaParseada = moment(form.value.fechaTransferencia).format('YYYY-MM-DD');
    form.value.fechaTransferencia=fechaParseada;
  //  this.kardexService.detalleTransferencia[this.data.orderItemIndex] = form.value;
  this.kardexService.detalleTransferencia = form.value 
  this.kardexService.GuardaTransferenciaAlmacen().subscribe(resp =>{   
    this.toastr.success('Transferencia Exitosamente');
   });     
   this.dialogRef.close();
  //  console.log('id',this.data.orderItemIndex);
  //  console.log('submit',this.kardexService.detalleTransferencia);
     }
    }
}
