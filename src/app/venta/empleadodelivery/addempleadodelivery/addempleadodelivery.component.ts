import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { VentaService } from 'src/app/services/venta/venta.service';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatEmpleadoDelivery } from 'src/app/models/empleadodelivery';
import { DataEmpleado } from 'src/app/models/empleado';
import { DataDistrito } from 'src/app/models/countries';
import { DataDepartamento, DataProvincia } from '../../../models/countries';
@Component({
  selector: 'app-addempleadodelivery',
  templateUrl: './addempleadodelivery.component.html',
  styleUrls: ['./addempleadodelivery.component.css']
})
export class AddempleadodeliveryComponent implements OnInit {
  // formData: DatEmpleadoDelivery;
  empleados: DataEmpleado[];
  distritos: DataDistrito[] ;
  distritosMatch: DataDistrito[] ;
  public departamentos: DataDepartamento[] = [];
  public provincias: DataProvincia[] = [];
  public formData:any
  validar:any[];
  isButtonVisible: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddempleadodeliveryComponent>,
    public ventaService: VentaService,
    private mantenimientosServices: MantenimientosService,
    private mantenimientosService: MantenimientosService,private currentRoute: ActivatedRoute, private router: Router, private toastr: ToastrService

  ) {}

  ngOnInit(): void {
    // this.resetForm();
    // console.log(this.ventaService.detalleDelivery);
// console.log(this.ventaService.detalleDelivery.detalleCotizacion,'NGONINIT');
      // let variable = 
  
      this.ventaService.getOrdenCompraVentaById(this.data.id).subscribe((res) => {
      //  console.log('verdataid',res );
        this.formData = res[0]; 
        this.formData.idEmpleado = null
        this.formData.detalleEmpDev = ' '
                // console.log(this.kardexService.formOrdencompra );
                 
              });


    this.mantenimientosService.getEmpleado().subscribe(resp => { 
      this.empleados = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario === 4)
      .map(empleados=>{ 
        empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado))
        return empleados;
      });
    });

    this.mantenimientosServices.getDepartamento().subscribe((response) => {
      this.departamentos = response;
      // this.cargando = false;
    });

    this.mantenimientosServices.getProvinciaAll().subscribe((response) => {
      this.provincias = response;
      // this.cargando = false;
    });
    this.mantenimientosServices.getDistritoAll().subscribe((response) => {
      this.distritos = response;
      // this.cargando = false;
    });

   this.mantenimientosService.getDistritoAll()
   .subscribe(resp => {  
   this.distritosMatch = (resp).filter(valor => valor.idProvincia === 1401 );
   
   } );
   
    /*this.formData = Object.assign({ 
      id: null,
      idOrdenVenta: this.data.id, 
      idEmpleado: null, 
      idBanco: 0,
      idDistrito: null, 
      idTipoPago:0,
      fechaEnvio:'',
      detalleEmpDev:'' ,
      idDestino:0,
      idDepartamento:null,
      idProvincia:null, 
      precioLocal:0,
      precioProvincia:0 
      

    
    },
    this.ventaService.detalleDelivery[this.data.id]);
  
    // console.log(this.ventaService.detalleDelivery[0].apellidoMatCliente;
    if(this.ventaService.detalleDelivery[this.data.orderItemIndex].idEstadoFlujo  ==  4 ) {
      this.isButtonVisible=false;
     } else {
      this.isButtonVisible=true;
     } 
*/
    
  }

 /* resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = { 
      idEmpleado:1
    };
  }*/
  onChangeMatch (idEmpleado:number, idDistrito:number)  {
    //  console.log(idEmpleado,'EMPLEADO',idDistrito,'DISTRITO');
    this.ventaService.MatcPrecioVelivery(idEmpleado,idDistrito).subscribe((resp:any) => { 
      this.formData.precioLocal = resp  
   
    });  
   
     }

     onSelectDepartamento($event: any): void {
      this.mantenimientosServices.getProvincia($event).subscribe((response) => {
        //  console.log(response,'response');
        this.provincias = response;
      });
    }
    onSelectProvincia($event: any): void {
      this.mantenimientosServices.getDistrito($event).subscribe((response) => {
        this.distritos = response;
        //  console.log(response);
      });
    }
     validateForm(form:NgForm) {
      if(form.value.idEmpleado == null )
         return   Swal.fire({
            title: 'Seleccionar Empleado' , 
            icon: 'error',
          });   
        
        }
  onSubmit(form: NgForm) {
    // console.log(form.value,'GUARDADELIVERY')
    // this.validateForm();


   
   if(this.validateForm(form)){
return;
   }
    else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
      });

      return;
    } 
      else{   
        let fechaEnvio: any;
        fechaEnvio = moment(form.value.fechaEnvio).format('YYYY-MM-DD');
        form.value.fechaEnvio = fechaEnvio; 
       this.ventaService.detalleDelivery = form.value  

     /*  const bodyform:any = { 
        idOrdenVenta: this.data.id,
         idDestino: form.value.idDestino,
         idEmpleado: form.value.idEmpleado,
         precioLocal: form.value.precioLocal,
         precioProvincia: form.value.precioProvincia,
         detalleEmpDev:form.value.detalleEmpDev,
         fechaEnvio:fechaEnvios
       
        }*/
// console.log(bodyform,'BODY');

         this.ventaService.GuardaEmpleadoDelivery(this.formData).subscribe(resp =>{   
        this.toastr.success('Asignado Exitosamente');
        // this.ngOnInit();
       });     
       this.dialogRef.close();
      //  this.ngOnInit();
     
      }    
    }

}
