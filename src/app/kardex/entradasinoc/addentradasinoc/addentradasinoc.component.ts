import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { DataProducto } from '../../../models/producto';
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoIngreso } from '../../../models/tipoingreso';
import { DetalleentradasinocComponent } from '../detalleentradasinoc/detalleentradasinoc.component';
import { DataDetalleEntradasinOc } from '../../../models/detalleEntradasinOc';

@Component({
  selector: 'app-addentradasinoc',
  templateUrl: './addentradasinoc.component.html',
  styleUrls: ['./addentradasinoc.component.css']
})
export class AddentradasinocComponent implements OnInit {
  proveedores: DataProveedor[];
  empleados: DataEmpleado[];
  productos: DataProducto[]; 
  tipoingresos:DataTipoIngreso[] ;
  isButtonVisible:boolean=true;
  // detalleIngresosinOc: DataDetalleEntradasinOc[] = [];
  isValid:boolean = true;
  constructor(public kardexService: KardexService,   private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute
    ) { }
  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {

      this.kardexService.getIngresoSinOCById(+id).subscribe(res => {
  // console.log('editar',res[0]); 
        // console.log('editar',res[0] );
         this.kardexService.formDataIngresosinOc = res[0]; 
        this.kardexService.detalleIngresosinOc = res[0].detalleIngresoSinOc;
      //  console.log('res',res[0]);
        //  console.log('detalle',res[0].detalleIngresoSinOc[0].estadoflujo);
        if (res[0].idFlujo ==  2 || res[0].idFlujo ==  3 ) {
        this.isButtonVisible=false;
       } else { 
        this.isButtonVisible=true;
       }  
      });
    }
   else{
      this.resetForm();

  } 
  
  this.mantenimientosService.getProducto()
  .subscribe(resp => {
    this.productos = resp as DataProducto[]  
 });
 this.mantenimientosService.getProveedor()
    .subscribe(resp => {
      this.proveedores = resp as DataProveedor[]  
   });
   this.mantenimientosService.getEmpleado()
   .subscribe(resp => {
    
     this.empleados = resp as DataEmpleado[]  
    //  console.log(resp);
  });
  this.mantenimientosService.getTipoingreso()
  .subscribe(resp => {
   
    this.tipoingresos = resp as DataTipoIngreso[]  
   //  console.log(resp);
 });
    
  }


  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.kardexService.formDataIngresosinOc={        
      id:null,
      codigoIngresoSinOc: '',
      idProveedor: 0,
      idEmpleado:0,
      idtipoIngreso:0,
      detalle:'',
      fechaIngreso:'',
      totalCosto:0,
       nombre_empleado:'',
      nombre_proovedor:'',
      descripcion_ingreso:'',
      idTipoMoneda:0
      // descuento_cot:0,
      // costo_envio:0,
     
      // codigo_cotizacion_num:'',
 
 };
 this.kardexService.detalleIngresosinOc = [];

}
/*onChangeEvent(event) {
  const m = moment(event.value); 
event = m.format('YYYY-MM-D'); 
  this.kardexService.formDataIngresosinOc.fechaIngreso = m.format('YYYY-MM-D');
 
}*/

AddOrEditOrderItem(orderItemIndex, id) {
  //  console.log(orderItemIndex, id);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "60%";
  dialogConfig.data = { orderItemIndex, id };
  // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
   this.dialog.open(DetalleentradasinocComponent, dialogConfig).afterClosed().subscribe(resp=>{
    // console.log(resp);
    this.updateTotal();
   });
 
  }

 updateTotal(){
    this.kardexService.formDataIngresosinOc.totalCosto = this.kardexService.detalleIngresosinOc.reduce(
      (prev,curr)=>{
    
     let prevparse =  prev.toString();
     let total =  curr.precioTotal.toString();
     // console.log('prev', parseInt(prevparse),'-',curr.precio_total); 
        return   parseFloat(prevparse)+ parseFloat(total)
        
     },0); 
     this.kardexService.formDataIngresosinOc.totalCosto  = parseFloat(this.kardexService.formDataIngresosinOc.totalCosto.toFixed(2));
 //  console.log('tota',this.kardexService.formData.total_costo);
 
   } 
   onChange = ($event: any): void => {
    this.kardexService.formDataIngresosinOc.nombre_empleado= $event.nombre_empleado; 
     
   } 
   onChangeProveedor = ($event: any): void => {
    this.kardexService.formDataIngresosinOc.nombre_proovedor= $event.nombre_proovedor; 
     
   } 
   onChangeTipoIngreso = ($event: any): void => {
    this.kardexService.formDataIngresosinOc.descripcion_ingreso= $event.descripcion_ingreso; 
     
   } 
   validateForm(){
    this.isValid = true; 
     if(this.kardexService.detalleIngresosinOc.length==0)
    this.isValid=false;
    return this.isValid;
  }

  onSubmit(form:NgForm){
    this.validateForm();
    // console.log(form);
    if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
    else if (this.kardexService.formDataIngresosinOc.id) {
        // console.log('submit',this.kardexService.formData);
      this.kardexService.UpdateIngresoSinOC(this.kardexService.formDataIngresosinOc).subscribe(
        resp=>{
          // console.log(resp);
          this.ngOnInit();
          this.toastr.success('Actualizado Exitosamente','Gnuino');

        //  this.router.navigate(["../kardex/listarentradasinoc"]);
        }
      )
  }else{
     this.kardexService.saveIngresoSinOC().subscribe(res =>{
    //  console.log('respuesta',res);
      this.resetForm();
      // this.ngOnInit();
      this.toastr.success('Guardado Exitosamente','Gnuino');
  // this.toastr.success(res.msg );
 
      this.router.navigate(["../kardex/listarentradasinoc"]);
    })
  }
  
  }
}
