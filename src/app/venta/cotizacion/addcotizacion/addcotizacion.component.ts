 
import { VentaService } from '../../../services/venta/venta.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
// import { KardexService } from '../../../services/kardex/kardex.service';
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
@Component({
  selector: 'app-addcotizacion',
  templateUrl: './addcotizacion.component.html',
  styleUrls: ['./addcotizacion.component.css']
})
export class AddcotizacionComponent implements OnInit {
  clientes: DataCliente[];
  empleados: DataEmpleado[];
  productos: DataProducto[];   
  linea: DataLinea[];
  tipocotizacion: DataTipoCoti[];
  tipoMoneda:DataTipoMoneda[];
  distritos: DataDistrito[] ;
  isValid:boolean = true;
  isButtonVisible:boolean=true; 
 
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
 
   this.mantenimientosService.getCliente()
   .subscribe(resp => {
     this.clientes = resp as DataCliente[]  
    //  console.log(this.clientes);
  });
   this.mantenimientosService.getEmpleado()
   .subscribe(resp => {
    
       this.empleados = resp as DataEmpleado[]  
 
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

 this.mantenimientosService.getTipCotizacion()
 .subscribe(resp => {
   this.tipocotizacion = resp as DataTipoCoti[]  
});
/*this.mantenimientosService.getDistritoAll()
   .subscribe(resp => {  
   this.distritos = (resp as DataDistrito[]).filter(
     distritos=>distritos[0].idProvincia == 1401

   ); 
   }
 );*/

 this.mantenimientosService.getDistritoAll()
   .subscribe(resp => {  
   this.distritos = (resp).
   filter(valor => valor.idProvincia === 1401 );
  //  console.log( this.distritos);
   } );



/* console.log( this.distritos );
 this.mantenimientosService.getProveedor().subscribe((resp) => {
  this.proveedores = (resp as DataProveedor[])
  .map(proveedores=>{
    proveedores.nombre_proovedor = proveedores.nombre_proovedor.toUpperCase();
    return proveedores;
  });
});*/
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
      descuento_cot:0,//ok
      costo_delivery:0,//ok
      total_productos:0,//ok
      idDistrito:null,//ok
      totalGeneral:0,//ok
      codigo_cotizacion_num_venta:'',
      estadoCotizacion: '',
      nombre_empleado:'',
      nombre_cliente:'',
      idTipoMoneda:null,//ok
      fechaEntrega:''
     
   //   telefono: '',
     // direccion:''
      

 };
this.ventaService.detalleCotizacion = [];

}

 
 AddOrEditOrderItem(orderItemIndex, id) { 
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { orderItemIndex, id };
  // console.log(orderItemIndex, id);
  // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
   this.dialog.open(DetallecotizacionComponent, dialogConfig).afterClosed().subscribe(resp=>{
  //  console.log(resp);
    this.updateTotal();
    this. updateMontoTotal();
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
      }
    });
  }
  
  updateTotal(){
   this.ventaService.formData.total_productos = this.ventaService.detalleCotizacion.reduce(
     (prev,curr)=>{
   
    let prevparse =  prev.toString();
    let total =  curr.precioVenta.toString(); 
    let cantidad =  curr.cantidad.toString();  
 
       return   (parseFloat(prevparse)+ (parseFloat(total) * parseFloat(cantidad))) 
      //  return   (parseFloat(prevparse)+ ((parseFloat(total)) * (parseFloat(cantidad))) 
    } 
    
    ,0); 
    this.ventaService.formData.total_productos  = parseFloat(this.ventaService.formData.total_productos.toFixed(2));
 

  }

   updateMontoTotal(){

    let porcentaje = (this.ventaService.formData.total_productos - (this.ventaService.formData.total_productos * (this.ventaService.formData.descuento_cot/100))).toString();
    let costo_envio = this.ventaService.formData.costo_delivery.toString()

    this.ventaService.formData.totalGeneral = (parseFloat(porcentaje) + parseFloat(costo_envio));

   
   
  // console.log(this.kardexService.formData.totalGeneral );
    }

    onChangeCliente = ($event: any): void => {
    this.ventaService.formData.nombre_cliente= $event.nombre_cliente; 
     
   } 
  validateForm(){
    this.isValid = true;
    if(this.ventaService.formData.idEmpleado==0)
    this.isValid=false;
    else if(this.ventaService.detalleCotizacion.length==0)
    this.isValid=false;
  
    return this.isValid;
  }


  

onSubmit(form:NgForm) {
  console.log(form.value);
 this.validateForm();
  if ( form.invalid ) {

    Object.values( form.controls ).forEach( control => {
      control.markAsTouched();//es para validar el guardar
      //  console.log(control); //son todos mis controles del formulario
     });

    return;
  } 
  
 else if (this.ventaService.formData.id) {
 
    this.ventaService.UpdateOrder(this.ventaService.formData).subscribe(
      resp=>{
 
        this.toastr.success('Actualizado Exitosamente','Gnuino');
       this.router.navigate(["../venta/listarventa"]);
      }
    )
}else{
  
  this.validateForm();
   this.ventaService.saveUpdateOrder().subscribe(res =>{
  
    this.resetForm();
    this.toastr.success(res.msg );
        this.router.navigate(["../venta/listarventa"]);
  })
} 
} 
}