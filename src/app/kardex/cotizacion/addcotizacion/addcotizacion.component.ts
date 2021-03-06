import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DetallecotizacionComponent } from '../detallecotizacion/detallecotizacion.component';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataProveedor } from '../../../models/proveedor';
import { DataEmpleado } from '../../../models/empleado'; 
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DataProducto } from 'src/app/models/producto';
import Swal from 'sweetalert2';
import { DataLinea } from 'src/app/models/linea';
import { DataTipoCoti } from 'src/app/models/tipo-cotizacion';
import { DataTipoMoneda } from 'src/app/models/tipo-moneda';
@Component({
  selector: 'app-addcotizacion',
  templateUrl: './addcotizacion.component.html',
  styleUrls: ['./addcotizacion.component.css'],
})
export class AddcotizacionComponent implements OnInit {
  proveedores: DataProveedor[] = [];
  empleados: DataEmpleado[];
  productos: DataProducto[];
  linea: DataLinea[];
  tipocotizacion: DataTipoCoti[];
  tipoMoneda: DataTipoMoneda[];
  isValid: boolean = true;
    isButtonVisible: boolean = true;

  constructor(
    public kardexService: KardexService,
    private dialog: MatDialog,
    private mantenimientosService: MantenimientosService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.kardexService.getCotizacionById(+id).subscribe((res) => {
        console.log(res);
        this.kardexService.formData = res[0];
        this.kardexService.detalleCotizacion = res[0].detalleCotizacion;
        if (res[0].idEstadoFlujo == 2 || res[0].idEstadoFlujo == 3) {
          this.isButtonVisible = false;
        } else {
          this.isButtonVisible = true;
        }
      });
    } else {
      this.resetForm();
    }

    this.mantenimientosService.getProducto().subscribe((resp) => {
      this.productos = resp as DataProducto[];
    }); 
    
    this.mantenimientosService.getProveedor().subscribe(resp => {
      // console.log(resp);
      this.proveedores = (resp as DataProveedor[])
      .map(proveedor=>{
        // clientes.nombre_cliente = clientes.nombre_cliente.toUpperCase();
       proveedor.nombre_proovedor =   (proveedor.nombre_proovedor.concat('- ', proveedor.ruc_proovedor))
        return proveedor;
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
    this.mantenimientosService.getLinea().subscribe((resp) => {
      this.linea = resp as DataLinea[];
    });
    this.mantenimientosService.getTipoMoneda().subscribe((resp) => {
      this.tipoMoneda = resp as DataTipoMoneda[];
    });

    this.mantenimientosService.getTipCotizacion().subscribe((resp) => {
      this.tipocotizacion = resp as DataTipoCoti[];
    });
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.kardexService.formData = {
      id: null,
      nroCotizacion: '',
      idProovedor: null,
      idEmpleado: null,
      detalle: '',
      fecha_entrega: '',
      descuento_cot: '0',
      costo_envio: '0.00',
      total_costo: '0.00',
      codigo_cotizacion_num: '',
      estadoCotizacion: '',
      nombre_empleado: '',
      nombre_proovedor: '',
      idTipoMoneda: null,
      totalGeneral: '0.00',
      idTipoCotizacion: null,
      idLinea: null,
      porcentajeDscto:'0.00'
    };
    this.kardexService.detalleCotizacion = [];
  }
  onDecimal() {  
    if( this.kardexService.formData.descuento_cot == null ){  
       this.kardexService.formData.descuento_cot = '0'; 
       this.updateMontoTotal(); 
    }
       else if (this.kardexService.formData.porcentajeDscto == null){
         this.kardexService.formData.porcentajeDscto ='0.00';
         this.updateMontoTotal(); 
       }
       else if (this.kardexService.formData.costo_envio == null){
         this.kardexService.formData.costo_envio ='0.00';
         this.updateMontoTotal(); 
       }
       
    else {
       // this.ventaService.formData.descuento_cot= (Number.parseFloat(this.ventaService.formData.descuento_cot).toFixed(2)); 
      //  this.kardexService.formData.descuento_cot= (Number.parseFloat(this.kardexService.formData.descuento_cot).toFixed(2)); 
    
       this.kardexService.formData.porcentajeDscto= (Number.parseFloat(this.kardexService.formData.porcentajeDscto).toFixed(2)); 
        this.kardexService.formData.costo_envio= (Number.parseFloat(this.kardexService.formData.costo_envio).toFixed(2)); 
        this.kardexService.formData.total_costo= (Number.parseFloat(this.kardexService.formData.total_costo).toFixed(2)); 
        this.kardexService.formData.totalGeneral= (Number.parseFloat(this.kardexService.formData.totalGeneral).toFixed(2)); 
     
     } 
   
   } 
  AddOrEditOrderItem(orderItemIndex, id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '35%';
    dialogConfig.data = { orderItemIndex, id };
      this.dialog
      .open(DetallecotizacionComponent, dialogConfig)
      .afterClosed()
      .subscribe((resp) => {
        //  console.log(resp);
        this.updateTotal();
        this.updateMontoTotal();
        this.onDecimal();
      });
  }

  onDeleteOrderItem(id: number, i: number) {
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

        this.kardexService.deleteDetalleCotizacion(id).subscribe();
        this.kardexService.detalleCotizacion.splice(i, 1);
        this.updateTotal();
        this.updateMontoTotal();
        this.onDecimal();
      }
    });
  }
  updateTotal() {
    this.kardexService.formData.total_costo =
      this.kardexService.detalleCotizacion.reduce((prev, curr) => {
        let prevparse = prev.toString();
        let total = curr.precio_total.toString();
        return parseFloat(prevparse) + parseFloat(total);
      }, 0);
    this.kardexService.formData.total_costo = parseFloat(
      this.kardexService.formData.total_costo.toFixed(2)
    );
  }
  updateMontoTotal() {
    let porcentaje = (this.kardexService.formData.total_costo - this.kardexService.formData.total_costo *
        (this.kardexService.formData.descuento_cot / 100)
    ).toString();
    let costo_envio = this.kardexService.formData.costo_envio.toString();
    let porcentajeGeneral = (this.kardexService.formData.total_costo  * this.kardexService.formData.descuento_cot/100).toString();
    this.kardexService.formData.totalGeneral = parseFloat(porcentaje) + parseFloat(costo_envio);
      this.kardexService.formData.porcentajeDscto = (parseFloat(porcentajeGeneral));


    // console.log(this.kardexService.formData.totalGeneral );
  }

  onChangeProveedor = ($event: any): void => {
    this.kardexService.formData.nombre_proovedor = $event.nombre_proovedor;
  };
  validateForm(form:NgForm) {
    if(form.value.idTipoCotizacion == null )
       return   Swal.fire({
          title: 'Seleccionar Tipo Cotizaci??n' , 
          icon: 'error',
        });   
        else if  (form.value.idProovedor == null )
        return   Swal.fire({
           title: 'Seleccionar Proveedor' , 
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
  /*validateDetalle(){
    this.isValid = true;
   if(this.kardexService.detalleCotizacion.length==0)
    this.isValid=false;
  
    return this.isValid;
  }*/

  onSubmit(form: NgForm) {
    // console.log(form);
  // this.validateDetalle();
  this.validateForm(form);
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
      });
    
      return;
 
    } else if (this.kardexService.formData.id){ 
      if(this.kardexService.detalleCotizacion.length == 0 || this.kardexService.detalleCotizacion.length == null ){
        this.isButtonVisible = true;
        return   Swal.fire({
          title: 'Ingresar Productos a Cotizar' , 
          icon: 'error',
        });
      } 

      
      else {  this.isButtonVisible = false;
      this.kardexService
        .UpdateOrder(this.kardexService.formData)
        .subscribe((resp) => {
          this.toastr.success('Actualizado Exitosamente', 'Gnuino');
          this.router.navigate(['../kardex/listarcotizacion']);
        });
      }

    } else {
      if(this.kardexService.detalleCotizacion.length == 0 || this.kardexService.detalleCotizacion.length == null ){
        this.isButtonVisible = true;
        return   Swal.fire({
          title: 'Ingresar Productos a Cotizar' , 
          icon: 'error',
        });
      } 
    // this.validateForm(form);
   else{ this.isButtonVisible = false;
      this.kardexService.saveUpdateOrder().subscribe((res) => {
        this.resetForm();
        this.toastr.success(res.msg);
        this.router.navigate(['../kardex/listarcotizacion']);
      });
    }
  }
  }
}
