import { Component, OnInit,Inject } from '@angular/core';
import { DataDetalleEntradasinOc } from '../../../models/detalleEntradasinOc';
import { DataProducto } from '../../../models/producto';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KardexService } from 'src/app/services/kardex/kardex.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { DataAlmacenPrincipal } from '../../../models/almacenPrincipal';
import { DataAlmacenSecundario } from '../../../models/almacenSecundario';


@Component({
  selector: 'app-detalleentradasinoc',
  templateUrl: './detalleentradasinoc.component.html',
  styleUrls: ['./detalleentradasinoc.component.css']
})
export class DetalleentradasinocComponent implements OnInit {

  formData: DataDetalleEntradasinOc;
  productos: DataProducto[];
  almacenesPrincpal:DataAlmacenPrincipal[];
  almacenesSecundario: DataAlmacenSecundario[];
  isValid: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DetalleentradasinocComponent>,
    public kardexService: KardexService,
    private mantenimientosService: MantenimientosService
  ) {}

  ngOnInit(): void {
    this.mantenimientosService.getProducto()
    .subscribe(resp => {
      this.productos = resp as DataProducto[]  
  //  console.log(this.productos,'producto');
  
   });

   this.kardexService.getAlmacenPrincipal()
   .subscribe(resp => {
     this.almacenesPrincpal = resp as DataAlmacenPrincipal[]   
    //  console.log('principal', this.almacenesPrincpal);
});
this.kardexService.getAlmacenSecundario()
.subscribe(resp => { 
  this.almacenesSecundario = resp as DataAlmacenSecundario[] 
  // console.log('secundario', this.almacenesSecundario); 
//  console.log(this.productos,'producto');

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
      idSedePrincipal:0,
      nombreSedePrincipal:'',
      nombreSedeSecundaria:'',
      idSedeSecundaria:0,
      cantidadGlobal:0,
      cantidadPrincipal:0,
      cantidaSecundaria:0,
      cantidadDevuelta:0 ,
      nombre_almacenS:''
  
    }
  
    else
    this.formData = Object.assign({}, this.kardexService.detalleIngresosinOc[this.data.orderItemIndex]);
    // console.log('dataentrada',this.formData);
  }

  onChange = ($event: any): void => {
    this.formData.nombre_producto= $event.nombre_producto; 
     
   }
  onChangeAlmacenP = ($event: any): void => {
    // console.log($event.nombre_alamcen);
    this.formData.nombreSedePrincipal = $event.nombre_alamcen 
    }
    // onChangeAlmacenS = ($event: any): void => {
    //   // console.log($event.nombre_almacenS);
    //   this.formData.nombreSedeSecundaria = $event.nombre_almacenS 
    //   }
    
    onChangeAlmacenS(ctrl) {  
      console.log(ctrl);   
      //  this.formData.idSedeSecundaria = this.almacenesSecundario[ctrl.selectedIndex - 1].id;
      this.formData.nombre_almacenS = this.almacenesSecundario[ctrl.selectedIndex - 1].nombre_almacenS;
      
  }

   updateTotal(){
    this.formData.precioTotal = parseFloat((this.formData.cantidad * this.formData.precioUnitario).toFixed(2));
  }
 

   onSubmit(form: NgForm) {
  console.log(form.value);
  if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null) 
// console.log('id',this.data.orderItemIndex);
  this.kardexService.detalleIngresosinOc.push(form.value);  
  // console.log('ccc',this.kardexService.detalleIngresosinOc);
  else
   this.kardexService.detalleIngresosinOc[this.data.orderItemIndex] = form.value;
  this.dialogRef.close();
//  console.log('submit', (form.value));
  }
 
  }
  validateForm(formData: DataDetalleEntradasinOc) {
    /*esta validacion es buena */
    this.isValid = true;
    if (formData.id == 0)
      this.isValid = false;
    else if (formData.cantidad == 0)
      this.isValid = false;
    return this.isValid;
  } 
  }

 
