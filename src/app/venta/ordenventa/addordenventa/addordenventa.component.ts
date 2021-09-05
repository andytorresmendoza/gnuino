import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { DataCotizacionVenta } from 'src/app/models/cotizacionventa';
import { DataDistrito } from 'src/app/models/countries';
import { DataLinea } from 'src/app/models/linea';
import { DataTipoMoneda } from 'src/app/models/tipo-moneda';
import { DataTipoPago } from 'src/app/models/tipopago';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { VentaService } from 'src/app/services/venta/venta.service';
import Swal from 'sweetalert2';
import { DataBancoVenta } from '../../../models/bancoventa';
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
  bancos: DataBancoVenta[];
  isValid: boolean = true;
  detalleCotizacionesVenta:any[] = [];
  isButtonVisible: boolean = true;
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
  this.mantenimientosService.getBancoVenta().subscribe((resp) => {
    this.bancos = resp as DataBancoVenta[];
    //  console.log(this.bancos);
  });
  }



  getCotizacionEstadoPendiente() {
    this.ventaService.getCotizacionVentaEstadoPendiente().subscribe((resp) => {
      this.cotizacionesVenta = resp as DataCotizacionVenta[];
      console.log(this.cotizacionesVenta);
   
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
      codigo_orden_num_venta:'',
      porcentajeDscto:0,
      detalleDistrito:''
   
    };
  }
  onChange = ($event: any): void => {
 
  //  console.log();
     this.ventaService.formOrdenVenta.idCotizacion = $event.id; 
    this.ventaService.formOrdenVenta.nombreCliente = $event.nombreCliente + ' ' + $event.apellidoPatCliente+ ' ' + $event.apellidoMatCliente;  
    this.ventaService.formOrdenVenta.detalleDistrito = $event.detalleCliente[0].detalleDistrito[0].nombre_distrito;
    this.ventaService.formOrdenVenta.direccion =  $event.detalleCliente[0].direccion_cliente;
    this.ventaService.formOrdenVenta.nombreEmpleado = $event.nombreEmpleado;
     this.ventaService.formOrdenVenta.idLinea = $event.idLinea;
    this.ventaService.formOrdenVenta.idTipoMoneda = $event.idTipoMoneda; 
    // this.ventaService.formOrdenVenta.idDistrito = $event.idDistrito;
    this.ventaService.formOrdenVenta.costo_delivery = $event.costo_delivery;
   this.ventaService.formOrdenVenta.descuento_cot = $event.descuento_cot;
    this.ventaService.formOrdenVenta.total_productos = $event.total_productos; 
    this.ventaService.formOrdenVenta.totalGeneral = $event.totalGeneral; 
    this.ventaService.formOrdenVenta.porcentajeDscto = $event.porcentajeDscto; 
    let total_productos =  $event.total_productos.toString();
    let descuento_cot =  $event.descuento_cot.toString();
    let costo_delivery =  $event.costo_delivery.toString();
  
   this.ventaService.formOrdenVenta.totalGeneral = (parseFloat(total_productos)-parseFloat(descuento_cot))+parseFloat(costo_delivery);
 
   
    }

  SelectCotizacionVentaDetalle($event:any): void {
      // console.log($event.id);
        this.ventaService.getCotizacionVentaDetalleById($event.id).subscribe((response) => {
       this.detalleCotizacionesVenta = response;
       console.log('cotizaciondetalle', response);
       });
    } 
    validateForm(form:NgForm) {
      if(form.value.idTipoPago == null )
      return   Swal.fire({
         title: 'Seleccionar Forma Pago' , 
         icon: 'error',
       });    

    }
    onSubmit(form: NgForm) {
     if( this.validateForm(form)){
       return;
     }

     else if ( form.invalid ) {
  
        Object.values( form.controls ).forEach( control => {
          control.markAsTouched();//es para validar el guardar
          //  console.log(control); //son todos mis controles del formulario
         });
    
        return;
      } 
      else{
        this.isButtonVisible = false;
        this.ventaService.SaveOrdenVenta().subscribe((res) => {
          console.log('respuesta',res);
          this.resetForm();
         this.toastr.success('Guardado Exitosamente', 'Gnuino');
         this.router.navigate(['../venta/listarordenventa']);
        }); 

      }
    }
}
