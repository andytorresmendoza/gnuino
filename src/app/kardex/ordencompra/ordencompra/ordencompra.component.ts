import { Component, OnInit, Inject } from '@angular/core';
import { DataDetalleCotizacion } from '../../../models/detalle-cotizacion';
import { NgForm } from '@angular/forms';
import { DataProducto } from '../../../models/producto';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataProveedor } from '../../../models/proveedor';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataCotizacion } from '../../../models/cotizacion';
import { DataOrdenCompra } from '../../../models/ordencompra';
import { DataEmpleado } from '../../../models/empleado';
import { DataTipoPago } from '../../../models/tipopago';
import { DataBanco } from '../../../models/banco';
import { DataNrocuenta } from '../../../models/nrocuenta';
import * as moment from 'moment';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
 

@Component({
  selector: 'app-ordencompra',
  templateUrl: './ordencompra.component.html',
  styleUrls: ['./ordencompra.component.css'],
})
export class OrdencompraComponent implements OnInit {
  
 
  cotizaciones: DataCotizacion[]; 
  proveedores: DataProveedor[];
  empleados: DataEmpleado[];
  tipopagos: any[] = [];
  bancos: DataBanco[];
  cuentas: DataNrocuenta[]; 
  detalleCotizaciones: DataDetalleCotizacion[]; 
  almacenes: DataTipoAlmacen[]=[];
  isValid: boolean = true;

  constructor(
    public kardexService: KardexService ,
    private mantenimientosService: MantenimientosService,
    private toastr: ToastrService,
    private router: Router 
    
  ) {}

  ngOnInit(): void { 

      this.resetForm();
     this.getCotizacionEstadoPendiente();
    
   
  
 

    this.mantenimientosService.getProveedor().subscribe((resp) => {
      this.proveedores = resp as DataProveedor[];
      // console.log(this.productos);
    });


    this.mantenimientosService.getEmpleado().subscribe((resp) => {
      this.empleados = resp as DataEmpleado[];
      // console.log(this.productos);
    });

       
    this.mantenimientosService.getTipopago().subscribe((resp) => {
      this.tipopagos = resp as DataTipoPago[];
 

    });
    // this.mantenimientosService.getTipopago().subscribe((resp) => {
    //   this.tipopagos = resp as DataTipoPago[];
    //   // console.log(this.productos);
    // });
    this.mantenimientosService.getBanco().subscribe((resp) => {
      this.bancos = resp as DataBanco[];
      //  console.log(this.bancos);
    });

    this.mantenimientosService.getNroCuenta().subscribe((resp) => {
      this.cuentas = resp as DataNrocuenta[];
      // console.log(this.cuentas);
    });

    this.mantenimientosService.getTipoAlmacen().subscribe((resp) => {
      this.almacenes = resp as DataTipoAlmacen[];
      // console.log(this.cuentas);
    });
 
  }
 
 

  getCotizacionEstadoPendiente() {
    this.kardexService.getCotizacionEstadoPendiente().subscribe((resp) => {
      this.cotizaciones = resp as DataCotizacion[];
      // console.log(resp);
   
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
      detalleOrden:'' ,
      idSede: 0,
      nombreSedePrincipal: '',
      direccionOrden:'',
      totalGeneral:0,
      nombre_empleado:'',
      nombre_proovedor:''
    };
  }
 onChange = ($event: any): void => {
  //  console.log($event);
   this.kardexService.formOrdencompra.idCotizacion = $event.id; 
  this.kardexService.formOrdencompra.idProovedor = $event.idProovedor;  
  this.kardexService.formOrdencompra.idEmpleado = $event.idEmpleado;
  this.kardexService.formOrdencompra.costo_envio = $event.costo_envio;
  this.kardexService.formOrdencompra.descuento_cot = $event.descuento_cot;
  this.kardexService.formOrdencompra.total_costo = $event.total_costo; 
  this.kardexService.formOrdencompra.totalGeneral = $event.totalGeneral; 
  let total_costo =  $event.total_costo.toString();
  let descuento_cot =  $event.descuento_cot.toString();
  let costo_envio =  $event.costo_envio.toString();

 this.kardexService.formOrdencompra.total_general = (parseFloat(total_costo)-parseFloat(descuento_cot))+parseFloat(costo_envio);
  // console.log((parseFloat(total_costo)-parseFloat(descuento_cot))+parseFloat(costo_envio));
 
  }

 
 
  UpdateBanco(ctrl) {
    // console.log(ctrl);
    this.kardexService.formOrdencompra.idNroCuenta = this.bancos[
      ctrl.selectedIndex - 1
    ].idNroCuenta;
  }
  UpdateSede(ctrl) {
    // console.log(ctrl);
    this.kardexService.formOrdencompra.direccionOrden = this.almacenes[
      ctrl.selectedIndex - 1
    ].direccion_almacen;
  }

  SelectCotizacionDetalle($event:any): void {
    // console.log($event.id);
      this.kardexService.getCotizacionDetalleById($event.id).subscribe((response) => {
     this.detalleCotizaciones = response;
      //  console.log('cotizaciondetalle', response);
     });
  }

//  onChangeEvent(event) {
//     const m = moment(event.value);
//     console.log(m);
//   event = m.format('YYYY-MM-D');
 
//     this.kardexService.formOrdencompra.fechaEntrega = m.format('YYYY-MM-D');
//     console.log(m.format('YYYY-MM-D'));
//   } 

  validateForm() {
    this.isValid = true;
    if (this.kardexService.formOrdencompra.idTipoPago == 0)
      this.isValid = false;
      else if   (this.kardexService.formOrdencompra.idBanco == 0)
      this.isValid = false;
    return this.isValid;
  }

 
  onSubmit(form: NgForm) {
    this.validateForm();
    // console.log(form);
    if ( form.invalid ) {

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
      this.kardexService.saveUpdateOrdercompra().subscribe((res) => {
      //  console.log('respuesta',res);
        this.resetForm();
        this.toastr.success('Guardado Exitosamente', 'Gnuino');
        this.router.navigate(['../kardex/listarordencompra']);
      });
   
  }
}
