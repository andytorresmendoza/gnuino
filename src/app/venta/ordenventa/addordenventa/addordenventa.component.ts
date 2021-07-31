import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataBanco } from 'src/app/models/banco';
import { DataCotizacionVenta } from 'src/app/models/cotizacionventa';
import { DataDistrito } from 'src/app/models/countries';
import { DataLinea } from 'src/app/models/linea';
import { DataTipoMoneda } from 'src/app/models/tipo-moneda';
import { DataTipoPago } from 'src/app/models/tipopago';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from 'src/app/services/venta/venta.service';

@Component({
  selector: 'app-addordenventa',
  templateUrl: './addordenventa.component.html',
  styleUrls: ['./addordenventa.component.css']
})
export class AddordenventaComponent implements OnInit {

  cotizacionesVenta: DataCotizacionVenta[]; 
  linea: DataLinea[];
  tipoMoneda:DataTipoMoneda[];
  distritos: DataDistrito[] ;
  tipopagos: any[] = [];
  bancos: DataBanco[];
  isValid: boolean = true;
  detalleCotizacionesVenta:any[] = [];
  constructor(public ventaService: VentaService,
    private mantenimientosService: MantenimientosService,
    private toastr: ToastrService,
    private router: Router ) { }

  ngOnInit(): void { 
    this.resetForm();
    this.getCotizacionEstadoPendiente();

    this.mantenimientosService.getLinea()
    .subscribe(resp => {
      this.linea = resp as DataLinea[]  
   });
   this.mantenimientosService.getTipoMoneda()
   .subscribe(resp => {
     this.tipoMoneda = resp as DataTipoMoneda[]  
    //  console.log(resp);
  });
  this.mantenimientosService.getDistritoAll()
  .subscribe(resp => {  
  this.distritos = (resp).
  filter(valor => valor.idProvincia === 1401 );
  //  console.log( this.distritos);
  } );

      
  this.mantenimientosService.getTipopago().subscribe((resp) => {
    this.tipopagos = resp as DataTipoPago[]; 
  });
  this.mantenimientosService.getBanco().subscribe((resp) => {
    this.bancos = resp as DataBanco[];
    //  console.log(this.bancos);
  });
  }



  getCotizacionEstadoPendiente() {
    this.ventaService.getCotizacionVentaEstadoPendiente().subscribe((resp) => {
      this.cotizacionesVenta = resp as DataCotizacionVenta[];
    //  console.log(this.cotizacionesVenta);
   
    });
  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.ventaService.formOrdenVenta = {
      id: null,
      codigo_orden_num: '',
      idCotizacion: null,
      nombreCliente:'',
      fechaEntrega: '',
      nombreEmpleado:'',
      idLinea:0,
      idTipoMoneda:0,
      idDistrito:0,
      fechaOrden:'',
      direccion:'',
      pagoParcial:0,
      idTipoPago:null,
      idBanco:null,
      numVoucher:'',
      detalle:'',
      descuento_cot:0,
      costo_delivery:0,
      total_productos:0,
      totalGeneral:0,
      codigo_orden_num_venta:''
    /*  idEmpleado: 0,
      //  detalle: '',
      fechaEntrega: '',
      idTipoPago: null,
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
      nombre_proovedor:'',
      idTipoOc:null,
      idTipoMoneda:0*/
    };
  }
  onChange = ($event: any): void => {
    //  console.log($event);
     this.ventaService.formOrdenVenta.idCotizacion = $event.id; 
    this.ventaService.formOrdenVenta.nombreCliente = $event.nombreCliente;  
    this.ventaService.formOrdenVenta.nombreEmpleado = $event.nombreEmpleado;
     this.ventaService.formOrdenVenta.idLinea = $event.idLinea;
    this.ventaService.formOrdenVenta.idTipoMoneda = $event.idTipoMoneda; 
    this.ventaService.formOrdenVenta.idDistrito = $event.idDistrito;
    this.ventaService.formOrdenVenta.costo_delivery = $event.costo_delivery;
   this.ventaService.formOrdenVenta.descuento_cot = $event.descuento_cot;
    this.ventaService.formOrdenVenta.total_productos = $event.total_productos; 
    this.ventaService.formOrdenVenta.totalGeneral = $event.totalGeneral; 
    let total_productos =  $event.total_productos.toString();
    let descuento_cot =  $event.descuento_cot.toString();
    let costo_delivery =  $event.costo_delivery.toString();
  
   this.ventaService.formOrdenVenta.totalGeneral = (parseFloat(total_productos)-parseFloat(descuento_cot))+parseFloat(costo_delivery);
 
   
    }

  SelectCotizacionVentaDetalle($event:any): void {
      // console.log($event.id);
        this.ventaService.getCotizacionVentaDetalleById($event.id).subscribe((response) => {
       this.detalleCotizacionesVenta = response;
        //  console.log('cotizaciondetalle', response);
       });
    } 
    validateForm() {
      this.isValid = true;
      if (this.ventaService.formOrdenVenta.idTipoPago == 0)
        this.isValid = false;
        else if   (this.ventaService.formOrdenVenta.idBanco == 0)
        this.isValid = false;
      return this.isValid;
    }
    onSubmit(form: NgForm) {
      this.validateForm();
      // console.log(form.value);
      if ( form.invalid ) {
  
        Object.values( form.controls ).forEach( control => {
          control.markAsTouched();//es para validar el guardar
          //  console.log(control); //son todos mis controles del formulario
         });
    
        return;
      } 
        this.ventaService.SaveOrdenVenta().subscribe((res) => {
          console.log('respuesta',res);
          this.resetForm();
         this.toastr.success('Guardado Exitosamente', 'Gnuino');
         this.router.navigate(['../venta/listarordenventa']);
        }); 
    }
}
