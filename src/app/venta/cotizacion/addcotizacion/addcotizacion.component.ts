 
import { VentaService } from '../../../services/venta/venta.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
 import { DetallecotizacionComponent } from '../detallecotizacion/detallecotizacion.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado';
import * as moment from 'moment'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router'; 
import { DataProducto } from 'src/app/models/producto'; 
import Swal from 'sweetalert2'; 
import { DataCliente } from '../../../models/cliente';
import { DataLinea } from '../../../models/linea';
import { DataTipoCoti } from '../../../models/tipo-cotizacion';
import { DataTipoMoneda } from '../../../models/tipo-moneda';
import { DataDistrito } from '../../../models/countries';
import { DataCampaniaVenta } from '../../../models/campaniaVenta';
@Component({
  selector: 'app-addcotizacion',
  templateUrl: './addcotizacion.component.html',
  styleUrls: ['./addcotizacion.component.css']
})
export class AddcotizacionComponent implements OnInit {
  clientes: DataCliente[] = [];
  empleados: DataEmpleado[];
  productos: DataProducto[];   
  linea: DataLinea[];
  tipocotizacion: DataTipoCoti[];
  tipoMoneda:DataTipoMoneda[];
  distritos: DataDistrito[] ;
  campania:DataCampaniaVenta[];
   detalleCliente:any[]=[];
  canalVenta:any[];
  isValid:boolean = true;
  isButtonVisible:boolean=true; 
  disable = true;
  constructor(public ventaService: VentaService,
    // public kardexService: KardexService,  
     private dialog: MatDialog, private mantenimientosService: MantenimientosService,
    private toastr: ToastrService, private router: Router,private currentRoute: ActivatedRoute 
    ) {

     }

  ngOnInit(): void { 
    
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.ventaService.getCotizacionById(+id).subscribe(res => {
         console.log(res);
        this.ventaService.formData = res[0];   
        this.ventaService.detalleCotizacion = res[0].detalleCotizacion;
        // this.ventaService.formData.descripcion_catcli = res[0].detalleCatCliente 
        this.ventaService.formData.descripcion_catcli = res[0].detalleCliente[0].detalleCategoriaCliente[0].descripcion_catcli
        
        this.ventaService.formData.nombre = res[0].detalleCliente[0].detalleDepartamento[0].nombre; 
         this.ventaService.formData.nombre_provincia = res[0].detalleCliente[0].detalleProvincia[0].nombre_provincia 
        this.ventaService.formData.nombre_distrito =res[0].detalleCliente[0].detalleDistrito[0].nombre_distrito 
        // console.log(this.ventaService.formData.descripcion_catcli);
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
 /* console.log(resp);
  const estado = resp.filter((p) => p.estado == 0);
  estado.disabled = true;
  console.log(estado);*/
  this.clientes = (resp as DataCliente[]).map(clientes=>{ 
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
  //  console.log(resp);
});
 

 this.mantenimientosService.getDistritoAll()
   .subscribe(resp => {  
   this.distritos = (resp).
   filter(valor => valor.idProvincia === 1401 ); 
   } );

   this.mantenimientosService.getCampaniaVenta()
   .subscribe(resp => {
     
    this.campania = resp as DataCampaniaVenta[]
    /* this.campania = (resp).
     filter(valor => valor.estado == 1 );
*/
      // console.log(this.campania,'VARIABLE');




  });
  this.mantenimientosService.getCanalVenta()
   .subscribe(resp => {
    //  console.log(resp);
     this.canalVenta = resp as any[]  
  });

 
  }
 
  UpdateCliente ($event: any): void {
    //  console.log($event,'EVENTO CLIENTE');
    this.ventaService.formData.descripcion_catcli = $event.detalleCategoriaCliente[0].descripcion_catcli
    this.ventaService.formData.idcategoriaCliente = $event.detalleCategoriaCliente[0].id
    this.ventaService.formData.nombre = $event.detalleDepartamento[0].nombre
    this.ventaService.formData.nombre_provincia = $event.detalleProvincia[0].nombre_provincia 
    this.ventaService.formData.nombre_distrito = $event.detalleDistrito[0].nombre_distrito 
        
         }
  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.ventaService.formData={        
      id:null,
      nroCotizacion: '',
      idTipoCotizacion:null, //ok
      idCliente: null,//ok
      idEmpleado:null,//ok
      idLinea:null,//ok
      detalle:'',//ok
      fechaCotizacion: '',//ok
      descuento_cot:0,//CONVIERTIENDO A DECIMAL
      costo_delivery:'0.00',//ok
      total_productos:'0.00',//ok
      idDistrito:null,//ok
      totalGeneral:'0.00',//ok
      codigo_cotizacion_num_venta:'',
      estadoCotizacion: '',
      nombre_empleado:'',
      nombre_cliente:'',
      idTipoMoneda:null,//ok
      fechaEntrega:'',
      porcentajeDscto:'0.00',
      idCampain:null,
      idCanalVenta:null,
      descripcion_catcli:'',
      idcategoriaCliente:0,
      nombre:'',
      nombre_provincia:'',
      nombre_distrito:''
 
      

 };
this.ventaService.detalleCotizacion = [];

}

 
 AddOrEditOrderItem(orderItemIndex, id) { 
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { orderItemIndex, id }; 
   this.dialog.open(DetallecotizacionComponent, dialogConfig).afterClosed().subscribe(resp=>{ 
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
  
     this.ventaService.deleteDetalleCotizacion( id).subscribe();
      this.ventaService.detalleCotizacion.splice(i,1); 
      this.updateTotal();
      this.updateMontoTotal();
      this.onDecimal();

      }
    });
  }
  onDecimal() {  
 if( this.ventaService.formData.costo_delivery == null ){  
    this.ventaService.formData.costo_delivery = '0.00'; 
    this.updateMontoTotal(); 
 }
    else if (this.ventaService.formData.descuento_cot == null){
      this.ventaService.formData.descuento_cot ='0';
      this.updateMontoTotal(); 
    }
    else if (this.ventaService.formData.porcentajeDscto == null){
      this.ventaService.formData.porcentajeDscto ='0.00';
      this.updateMontoTotal(); 
    }
 else {
    // this.ventaService.formData.descuento_cot= (Number.parseFloat(this.ventaService.formData.descuento_cot).toFixed(2)); 
    this.ventaService.formData.costo_delivery= (Number.parseFloat(this.ventaService.formData.costo_delivery).toFixed(2)); 
    this.ventaService.formData.totalGeneral= (Number.parseFloat(this.ventaService.formData.totalGeneral).toFixed(2)); 
    this.ventaService.formData.porcentajeDscto= (Number.parseFloat(this.ventaService.formData.porcentajeDscto).toFixed(2)); 
     this.ventaService.formData.total_productos= (Number.parseFloat(this.ventaService.formData.total_productos).toFixed(2)); 
  
  } 

} 


  updateTotal(){
   this.ventaService.formData.total_productos = this.ventaService.detalleCotizacion.reduce(
     (prev,curr)=>{
   
    let prevparse =  prev.toString();
    let total =  curr.precioVenta.toString(); 
    let cantidad =  curr.cantidad.toString();  
 
       return   (parseFloat(prevparse)+ (parseFloat(total) * parseFloat(cantidad)))  
    } 
    
    ,0); 
    this.ventaService.formData.total_productos  = parseFloat(this.ventaService.formData.total_productos.toFixed(2));
 

  }

  updateMontoTotal(){ 

   
    let porcentaje = (this.ventaService.formData.total_productos - (this.ventaService.formData.total_productos * (this.ventaService.formData.descuento_cot/100))).toString();
    let costo_envio = this.ventaService.formData.costo_delivery.toString();
    let porcentajeGeneral = (this.ventaService.formData.total_productos  * this.ventaService.formData.descuento_cot/100).toString(); 
   
    this.ventaService.formData.totalGeneral = ((parseFloat(porcentaje) + parseFloat(costo_envio)));
    this.ventaService.formData.porcentajeDscto = (parseFloat(porcentajeGeneral));

 
    }
 

    onChangeCliente = ($event: any): void => {
    this.ventaService.formData.nombre_cliente= $event.nombre_cliente; 
     
   } 

  
  validateForm(){
    this.isValid = true;
     if(this.ventaService.detalleCotizacion.length==0)
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
       /*   else if  (this.ventaService.detalleCotizacion.length == 0 || this.ventaService.detalleCotizacion.length == null )
           this.isButtonVisible = true;
          return   Swal.fire({
             title: 'Ingresar Productos a Cotizar' , 
             icon: 'error',
           });   */
  }

onSubmit(form:NgForm) { 
  if (this.validateSelect(form)){
  return;
 } 
else  if ( form.invalid ) {

    Object.values( form.controls ).forEach( control => {
      control.markAsTouched();//es para validar el guardar
      // console.log(control); //son todos mis controles del formulario
     });

    return;
  } 
  
 else if (this.ventaService.formData.id) { 
  if(this.ventaService.detalleCotizacion.length == 0 || this.ventaService.detalleCotizacion.length == null ){
    this.isButtonVisible = true;
    return   Swal.fire({
      title: 'Ingresar Productos a Cotizar' , 
      icon: 'error',
    });
  } 
  else {this.ventaService.UpdateOrder(this.ventaService.formData).subscribe(
      resp=>{ 
        this.isButtonVisible = false;
        this.toastr.success('Actualizado Exitosamente','Gnuino');
       this.router.navigate(["../venta/listarventa"]);
      }
    )
  }
}
else{ 

  if(this.ventaService.detalleCotizacion.length == 0 || this.ventaService.detalleCotizacion.length == null ){
    this.isButtonVisible = true;
    return   Swal.fire({
      title: 'Ingresar Productos a Cotizar' , 
      icon: 'error',
    });
  } 
 else { this.ventaService.saveUpdateOrder().subscribe(res =>{
     if(res.code === 401){
      this.toastr.warning(res.msg )
      this.isButtonVisible = true;
       return;
     }else{
      this.isButtonVisible = false;
      this.toastr.success(res.msg )
      this.resetForm();
      this.router.navigate(["../venta/listarventa"]);
     }
  })
}
}  
}
}