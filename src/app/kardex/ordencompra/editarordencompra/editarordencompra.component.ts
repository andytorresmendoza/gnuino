import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProveedor } from '../../../models/proveedor';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoPago } from '../../../models/tipopago';
import { DataBanco } from '../../../models/banco';
import { DataNrocuenta } from '../../../models/nrocuenta';
import { DataEmpleado } from '../../../models/empleado';
import { DataCotizacion } from '../../../models/cotizacion';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';

@Component({
  selector: 'app-editarordencompra',
  templateUrl: './editarordencompra.component.html',
  styleUrls: ['./editarordencompra.component.css']
})
export class EditarordencompraComponent implements OnInit {

  proveedores: DataProveedor[];
  tipopagos: DataTipoPago[]; 
  bancos: DataBanco[];
  cuentas: DataNrocuenta[]; 
  empleados: DataEmpleado[];
  cotizaciones: DataCotizacion[];
  totales:DataCotizacion[];
  detalleCotizaciones: DataDetalleCotizacion[];
  almacenes: DataTipoAlmacen[]=[];
  isButtonVisible:boolean=true;
  constructor( public kardexService: KardexService,  
    private currentRoute: ActivatedRoute,  
     private mantenimientosService: MantenimientosService,
     private toastr: ToastrService,
     private router: Router) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id'); 
 
    this.kardexService.getOrdenCompraById(+id).subscribe((res) => {
    //  console.log('editar',res[0] );
      this.kardexService.formOrdencompra = res[0];  
      this.detalleCotizaciones  = res[0].detalleCotizacion[0].detCotizacion;
      this.totales  = res[0].detalleCotizacion[0];
      // console.log(res[0].detalleCotizacion[0]);
      if (res[0].idEstadoFlujo ==  2 || res[0].idEstadoFlujo ==  3 ) {
        this.isButtonVisible=false;
       } else { /*implementar  EN ORDEN Y COTIZAICON ANULADA*/
        this.isButtonVisible=true;
       }
      // console.log(this.kardexService.formOrdencompra );
       
    })

    this.resetForm();
  //   this.Editar();

   this.mantenimientosService.getProveedor().subscribe((resp) => {
    this.proveedores = resp as DataProveedor[];
  //     // console.log(this.productos);
  });
   this.mantenimientosService.getEmpleado().subscribe((resp) => {
      this.empleados = resp as DataEmpleado[];
  //     // console.log(this.productos);
     });
    this.mantenimientosService.getTipopago().subscribe((resp) => {
     this.tipopagos = resp as DataTipoPago[];
     

  });
    this.mantenimientosService.getBanco().subscribe((resp) => {
      this.bancos = resp as DataBanco[];
  //     //  console.log(this.bancos);
    });
      this.mantenimientosService.getNroCuenta().subscribe((resp) => {
   this.cuentas = resp as DataNrocuenta[];
  //     // console.log(this.cuentas);
    });

   this.kardexService.getCotizacion().subscribe((resp) => {
    this.cotizaciones = resp as DataCotizacion[];
    // console.log(resp);
  });
  this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
    this.almacenes = resp as DataTipoAlmacen[];
    // console.log(this.cuentas);
  });

  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.kardexService.formOrdencompra = {
      id: null,
      codigo_orden_num: '',
      idCotizacion: 0,
      idProovedor: 0,
      idEmpleado: 0,
      //  detalle: '',
      fechaEntrega: '',
      idTipoPago: 0,
      idBanco: 0,
      idNroCuenta: 0,
      descuento_cot: 0,
      costo_envio: 0,
      total_costo: 0,
      total_general: 0,
      fechaEnvio:'',
      detalleOrden:'',
      idSede: 0,
      nombreSedePrincipal: '',
      direccionOrden:'',
       totalGeneral: 0,
       nombre_empleado:'',
       nombre_proovedor:''
    };
  }
  UpdateBanco(ctrl) {
    // console.log(ctrl);
    this.kardexService.formOrdencompra.idNroCuenta = this.bancos[
      ctrl.selectedIndex - 1
    ].idNroCuenta;
  }
  // onChangeEvent(event) {
  //   const m = moment(event.value);
  //   // console.log(m);
  // event = m.format('YYYY-MM-D');
 
  //   this.kardexService.formOrdencompra.fechaEntrega = m.format('YYYY-MM-D');
  //   // console.log(m.format('YYYY-MM-D'));
  // }
 /*falta implementar el UPDATE */
 UpdateSede(ctrl) {
  console.log(ctrl);
  this.kardexService.formOrdencompra.direccionOrden = this.almacenes[
    ctrl.selectedIndex - 1
  ].direccion_almacen;
}


 onSubmit(form: NgForm) {
    if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
  // console.log(form);
  if (this.kardexService.formOrdencompra.id) {
    console.log('submit', this.kardexService.formOrdencompra.id);
    this.kardexService.UpdateOrderCompra(this.kardexService.formOrdencompra.id).subscribe(
      resp=>{
    
        // this.kardexService.formData = resp.data;
        this.toastr.success(resp.msg );
        this.router.navigate(["../kardex/listarordencompra"]);
      }
    )
  }  
}
}
