import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KardexService } from '../../../services/kardex/kardex.service';
import { NgForm } from '@angular/forms';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { DataCotizacion } from '../../../models/cotizacion';
import { DataOrdenCompra } from 'src/app/models/ordencompra';
import { DataProveedor } from '../../../models/proveedor';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import * as moment from 'moment';
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoPago } from '../../../models/tipopago';
import { DataBanco } from '../../../models/banco';
import { DataNrocuenta } from '../../../models/nrocuenta';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DetalleentradaalmacenComponent } from '../detalleentradaalmacen/detalleentradaalmacen.component';
import { DataDetalleIngresoAlmacen } from '../../../models/detalle-ingresoalmacen';
import { DataTipoIngreso } from 'src/app/models/tipoingreso';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addentradaalmacen',
  templateUrl: './addentradaalmacen.component.html',
  styleUrls: ['./addentradaalmacen.component.css']
})
export class AddentradaalmacenComponent implements OnInit {
  // detalleCotizaciones: DataDetalleCotizacion[]; 

  detalleIngresoAlmacen: DataDetalleIngresoAlmacen[];
  // cotizaciones: DataCotizacion[]; 
  ordenes: DataOrdenCompra[];
  proveedores:  DataProveedor[];
  empleados:  DataEmpleado[];
  tipopagos: DataTipoPago[]; 
  bancos: DataBanco[];
  cuentas: DataNrocuenta[]; 
  tipoingresos: DataTipoIngreso[];
  
  constructor(public kardexService: KardexService
    , private router: Router, private toastr: ToastrService,   private dialog: MatDialog,  private mantenimientosService: MantenimientosService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

  
    this.resetForm();
    this.getOrdenEstadoPendiente();
 
    this.mantenimientosService.getTipoingreso().subscribe((resp) => {
      this.tipoingresos = resp as DataTipoIngreso[];
      // console.log(this.cuentas);
    });
    this.mantenimientosService.getProveedor().subscribe((resp) => {
      this.proveedores = resp as DataProveedor[];
      // console.log(this.productos);
    }); 
    this.mantenimientosService.getEmpleado().subscribe((resp) => {
      this.empleados = resp as DataEmpleado[];
      // console.log(this.productos);
    });
  }

  getOrdenEstadoPendiente() {
    this.kardexService.getOrdenEstadoPendiente().subscribe((resp) => {
      this.ordenes = resp as DataOrdenCompra[];
      // console.log( 'console',this.ordenes);
   
    });
  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.kardexService.formDataEntrada = {
      id: null,  
      idCotizacion: 0,
      idOrden: 0,
      idTipoIngreso:1  ,
      codigoIngreso:'',
      fechaIngreso:'',
      idProovedor:0,
      idEmpleado:0,
      detalleIngreso:'',
      descripcion_ingreso:''
       
   
    };
    this.kardexService.detalleIngresoAlmacen = [];
  }
  onChange = ($event: any): void => {
    // console.log($event);
     this.kardexService.formDataEntrada.idOrden = $event.id;
    this.kardexService.formDataEntrada.idCotizacion = $event.idCotizacion;
    this.kardexService.formDataEntrada.idProovedor = $event.idProovedor; 
    this.kardexService.formDataEntrada.idEmpleado = $event.idEmpleado;

    // this.kardexService.formDataEntrada.idOrden =  $event.idOrden; 
 

   }

 

   SelectCotizacionDetalle($event:any): void {
 
     this.kardexService.getOrdenCompraById($event.id).subscribe((response) => {
      // this.kardexService.formOrdencompra  = response[0]; 
      // console.log('GETID',response[0]);
      // VER COMO CAMBIAR ESTE FORM
      this.kardexService.detalleIngresoAlmacen = response[0].detalleCotizacion[0].detCotizacion;
      // this.kardexService.detalleIngresoAlmacen = response[0].id;
    //  console.log('cotizaciondetalle',  this.kardexService.detalleIngresoAlmacen);
      });
  }

  AddOrEditOrderItem(orderItemIndex, id) {
    //  console.log(orderItemIndex, id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { orderItemIndex, id };
     console.log('diaglo',dialogConfig.data);
    // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
     this.dialog.open(DetalleentradaalmacenComponent, dialogConfig).afterClosed().subscribe(resp=>{
    //  console.log(resp);
      // this.updateTotal();
     });
   
    }
    onSubmit(form:NgForm){
    //  console.log(form);
     if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
       this.kardexService.GuardaIngresoAlmacen().subscribe(resp =>{
      // console.log('respuesta',resp);
        // this.resetForm();
        resp.code === 401 ?  this.toastr.warning(resp.msg ):  this.toastr.success(resp.msg )
        this.router.navigate(["../kardex/listarentrada"]);
 
      })  
    }
}
