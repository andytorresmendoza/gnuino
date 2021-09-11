 
import { VentaService } from '../../../services/venta/venta.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
// import { KardexService } from '../../../services/kardex/kardex.service';
// import { DetallecotizacionComponent } from '../detallecotizacion/detallecotizacion.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
 
import { DataEmpleado } from '../../../models/empleado'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router'; 
import { DataProducto } from 'src/app/models/producto'; 
import Swal from 'sweetalert2'; 
import { DataCliente } from '../../../models/cliente';
import { DataLinea } from '../../../models/linea';
import { DataTipoCoti } from '../../../models/tipo-cotizacion';
import { DataTipoMoneda } from '../../../models/tipo-moneda';
import { DataDistrito } from '../../../models/countries';
import { DetalleventadirectaComponent } from '../detalleventadirecta/detalleventadirecta.component';
import { DataTipoPago } from '../../../models/tipopago'; 
import { DataBancoVenta } from '../../../models/bancoventa';
import { DataCampaniaVenta } from '../../../models/campaniaVenta';
@Component({
  selector: 'app-addventadirecta',
  templateUrl: './addventadirecta.component.html',
  styleUrls: ['./addventadirecta.component.css']
})
export class AddventadirectaComponent implements OnInit {
  clientes: DataCliente[];
  empleados: DataEmpleado[];
  productos: DataProducto[];   
  linea: DataLinea[];
  tipocotizacion: DataTipoCoti[];
  tipoMoneda:DataTipoMoneda[];
  distritos: DataDistrito[] ;
  isValid:boolean = true;
  isButtonVisible:boolean=true; 
  tipopagos: any[] = [];
  bancos: DataBancoVenta[];
  campania:DataCampaniaVenta[];
  canalVenta:any[];

  constructor(public ventaService: VentaService,
    // public kardexService: KardexService,  
     private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute 
    ) {

     }

     ngOnInit(): void { 
    
      let id = this.currentRoute.snapshot.paramMap.get('id');
      if (id !== 'nuevo') {
        this.ventaService.getVentaDirectaById(+id).subscribe(res => {
       console.log(res);
           this.ventaService.formVenta = res[0];  
          this.ventaService.detalleVentaDirecta = res[0].detalleCotizacion; 
          this.ventaService.formVenta.descripcion_catcli = res[0].detalleCliente[0].detalleCategoriaCliente[0].descripcion_catcli;
          this.ventaService.formVenta.nombre = res[0].detalleCliente[0].detalleDepartamento[0].nombre; 
          this.ventaService.formVenta.nombre_provincia = res[0].detalleCliente[0].detalleProvincia[0].nombre_provincia;
         this.ventaService.formVenta.nombre_distrito =res[0].detalleCliente[0].detalleDistrito[0].nombre_distrito;
      
         if (res[0].idEstadoFlujo ==  2 || res[0].idEstadoFlujo ==  3 ) {
          this.isButtonVisible=false;
         } else {
          this.isButtonVisible=true;
         }
        });
    
      }else{
             this.resetForm();
       
      }
  
      this.mantenimientosService.getProducto()
      .subscribe(resp => {
        this.productos = resp as DataProducto[]  
     });
   
     this.mantenimientosService.getCliente().subscribe(resp => {
      // console.log(resp);
      this.clientes = (resp as DataCliente[])
      .map(clientes=>{
        // clientes.nombre_cliente = clientes.nombre_cliente.toUpperCase();
       clientes.nombre_cliente =   (clientes.nombre_cliente.concat(', ', clientes.apellidos_pat_cliente,' ',clientes.apellidos_mat_cliente,'- ',clientes.dni_cliente))
        return clientes;
      });
    });
    this.mantenimientosService.getEmpleado().subscribe(resp => {
      // console.log(resp);
      this.empleados = (resp as DataEmpleado[])
      .map(empleados=>{ 
        empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado,'- ',empleados.dni_empleado))
        return empleados;
      });
    });
    this.mantenimientosService.getLinea()
    .subscribe(resp => {
      this.linea = resp as DataLinea[]  
   });
   this.mantenimientosService.getTipoMoneda()
   .subscribe(resp => {
     this.tipoMoneda = resp as DataTipoMoneda[]  
    //  console.log(resp);
  });
  
   this.mantenimientosService.getTipCotizacionVenta()
   .subscribe(resp => {
     this.tipocotizacion = resp as DataTipoCoti[]  
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
    this.mantenimientosService.getCampaniaVenta()
    .subscribe(resp => {
      this.campania = resp as DataCampaniaVenta[]  
      // console.log(this.campania);
   });
   this.mantenimientosService.getCanalVenta()
    .subscribe(resp => {
     //  console.log(resp);
      this.canalVenta = resp as any[]  
   });
    }
  
    UpdateCliente= ($event: any): void => { 
//  console.log($event,'EVENTO');
      this.ventaService.formVenta.descripcion_catcli = $event.detalleCategoriaCliente[0].descripcion_catcli
      this.ventaService.formVenta.idcategoriaCliente = $event.detalleCategoriaCliente[0].id
      this.ventaService.formVenta.nombre = $event.detalleDepartamento[0].nombre
      this.ventaService.formVenta.nombre_provincia = $event.detalleProvincia[0].nombre_provincia 
      this.ventaService.formVenta.nombre_distrito = $event.detalleDistrito[0].nombre_distrito 
      
          
           }
  
    resetForm(form?:NgForm){
      if(form =null)
      form.resetForm();
       this.ventaService.formVenta={        
        id:null,
        nroCotizacion: '',
        idTipoCotizacion:null, //
        idCliente: null,//ok
        idEmpleado:null,//ok
        idLinea:null,//ok
        detalle:'',//ok
        fechaVentaDirecta: '',//
        descuento_venta:'0',//ok
        total_productos:'0.00',//
        monto_total:'0.00',//
        codigo_cotizacion_dir_num_venta:'',
        estadoCotizacion: '',
        nombre_empleado:'',
        nombre_cliente:'',
        idTipoMoneda:null,//ok 
        idTipoPago:null,//ok
        idBanco:null,//ok
        nroVouher:'',
        porcentajeDscto:'0.00',
        idCampain:null,
        idCanalVenta:null,
        descripcion_catcli:'',
        idcategoriaCliente:0,
        nombre:'',
        nombre_provincia:'',
        nombre_distrito:''
     //   telefono: '',
       // direccion:''
        
  
   };
  this.ventaService.detalleVentaDirecta = [];
  
  }
  
   
   AddOrEditOrderItem(orderItemIndex, id) { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, id };
    // console.log(orderItemIndex, id);
    // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
     this.dialog.open(DetalleventadirectaComponent, dialogConfig).afterClosed().subscribe(resp=>{
    //  console.log(resp);
      this.updateTotal();
      this. updateMontoTotal();
      this.onDecimal();
     });
   
    } 
    onDeleteOrderItem(id:number, i:number){
      // console.log(id);
      Swal.fire({
        title: 'Esta seguro?',
        text: `Esta seguro que desea eliminar`,
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
      }).then((resp) => {
        if (resp.value) {
      // if (id != null) 
    
       this.ventaService.deleteDetalleVentaDirecta( id).subscribe();
        this.ventaService.detalleVentaDirecta.splice(i,1); 
        this.updateTotal();
        this. updateMontoTotal();
        this.onDecimal();
        }
      });
    }
    
    updateTotal(){
     this.ventaService.formVenta.total_productos = this.ventaService.detalleVentaDirecta.reduce(
       (prev,curr)=>{
     
      let prevparse =  prev.toString();
      let total =  curr.precioVenta.toString(); 
      let cantidad =  curr.cantidad.toString();  
   
         return   (parseFloat(prevparse)+ (parseFloat(total) * parseFloat(cantidad))) 
        //  return   (parseFloat(prevparse)+ ((parseFloat(total)) * (parseFloat(cantidad))) 
      } 
      
      ,0); 
      this.ventaService.formVenta.total_productos  = parseFloat(this.ventaService.formVenta.total_productos.toFixed(2));
   
  
    }
    onDecimal() {  
      if( this.ventaService.formVenta.descuento_venta == null ){  
         this.ventaService.formVenta.descuento_venta = '0'; 
         this.updateMontoTotal(); 
      }
      else{
        this.ventaService.formVenta.total_productos= (Number.parseFloat(this.ventaService.formVenta.total_productos).toFixed(2)); 
        this.ventaService.formVenta.monto_total= (Number.parseFloat(this.ventaService.formVenta.monto_total).toFixed(2)); 
     
      }
     
     } 
     updateMontoTotal(){
  
      let porcentaje = (this.ventaService.formVenta.total_productos - (this.ventaService.formVenta.total_productos * (this.ventaService.formVenta.descuento_venta/100))).toString();
      let porcentajeGeneral = (this.ventaService.formVenta.total_productos  * this.ventaService.formVenta.descuento_venta/100).toString();
      this.ventaService.formVenta.monto_total = (parseFloat(porcentaje));
      this.ventaService.formVenta.porcentajeDscto = (parseFloat(porcentajeGeneral));

     
    // console.log(this.kardexService.formData.totalGeneral );
      }
  
      onChangeCliente = ($event: any): void => {
      this.ventaService.formVenta.nombre_cliente= $event.nombre_cliente; 
       
     } 
    validateForm(){
      this.isValid = true;
      if(this.ventaService.formVenta.idEmpleado==0)
      this.isValid=false;
      else if(this.ventaService.detalleVentaDirecta.length==0)
      this.isValid=false;
    
      return this.isValid;
    }
  
    validateSelect(form:NgForm) {
      if(form.value.idTipoCotizacion == null )
         return   Swal.fire({
            title: 'Seleccionar Tipo Cotización' , 
            icon: 'error',
          });   
          else if  (form.value.idCampain == null )   
          return   Swal.fire({
             title: 'Seleccionar Campaña' , 
             icon: 'error',
           });   
           else if  (form.value.idCanalVenta == null )   
           return   Swal.fire({
              title: 'Seleccionar Canal Venta' , 
              icon: 'error',
            });   
          else if  (form.value.idCliente == null )
          return   Swal.fire({
             title: 'Seleccionar Cliente' , 
             icon: 'error',
           });   
           else if  (form.value.idTipoMoneda == null )
           return   Swal.fire({
              title: 'Seleccionar Moneda' , 
              icon: 'error',
            });   
            else if  (form.value.idEmpleado == null )
           return   Swal.fire({
              title: 'Seleccionar Empleado' , 
              icon: 'error',
            });   
            else if  (form.value.idLinea == null )
           return   Swal.fire({
              title: 'Seleccionar Linea' , 
              icon: 'error',
            });   
            
    }
  
    
  
  onSubmit(form:NgForm) {
  //  console.log(form.value);
  // this.validateForm();
  if (this.validateSelect(form)){
    return;
   }
  
  else if ( form.invalid ) {
  
      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();//es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
       });
  
      return;
    } 
    
   else if (this.ventaService.formVenta.id) {

    if(this.ventaService.detalleVentaDirecta.length == 0 || this.ventaService.detalleVentaDirecta.length == null ){
      this.isButtonVisible = true;
      return   Swal.fire({
        title: 'Ingresar Productos a Vender' , 
        icon: 'error',
      });
    } 
  
     else{ this.ventaService.UpdateVentaDirecta(this.ventaService.formVenta).subscribe(
        resp=>{
          this.isButtonVisible = false;
          this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../venta/listarventadirecta"]);
        }
      )
     }
  }else{
    
    // this.validateForm();
  //  
  if(this.ventaService.detalleVentaDirecta.length == 0 || this.ventaService.detalleVentaDirecta.length == null ){
    this.isButtonVisible = true;
    return   Swal.fire({
      title: 'Ingresar Productos a Vender' , 
      icon: 'error',
    });
  } 
   else{  this.ventaService.saveVentaDirecta().subscribe(res =>{
      if(res.code === 401){
        this.toastr.warning(res.msg )
        this.isButtonVisible = true;
         return;
       }else{
        this.isButtonVisible = false;
        this.toastr.success(res.msg )
        this.resetForm();
          this.router.navigate(["../venta/listarventadirecta"]);
       }
    })
  } 
}
  } 
  }