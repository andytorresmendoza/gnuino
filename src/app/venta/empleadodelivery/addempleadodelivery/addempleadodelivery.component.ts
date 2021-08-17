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
@Component({
  selector: 'app-addempleadodelivery',
  templateUrl: './addempleadodelivery.component.html',
  styleUrls: ['./addempleadodelivery.component.css']
})
export class AddempleadodeliveryComponent implements OnInit {
  formData: DatEmpleadoDelivery;
  empleados: DataEmpleado[];
  distritos: DataDistrito[] ;
  validar:any[];
  isButtonVisible: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddempleadodeliveryComponent>,
    public ventaService: VentaService,
    private mantenimientosService: MantenimientosService,private currentRoute: ActivatedRoute, private router: Router, private toastr: ToastrService

  ) {}

  ngOnInit(): void {
    this.mantenimientosService.getEmpleado()
    .subscribe(resp => {
     
        this.empleados = resp as DataEmpleado[]  
  
   });
  
    


   this.mantenimientosService.getDistritoAll()
   .subscribe(resp => {  
   this.distritos = (resp).
   filter(valor => valor.idProvincia === 1401 );
  //  console.log( this.distritos);
   } );
    this.formData = Object.assign({ 
      id: null,
      idOrdenVenta: this.data.id, 
      idEmpleado: null, 
      idBanco: 0,
      idDistrito: null, 
      idTipoPago:0,
      fechaEnvio:'',
      detalleEmpDev:''

    
    },
    this.ventaService.detalleDelivery[this.data.orderItemIndex]);
    
    
    if(this.ventaService.detalleDelivery[this.data.orderItemIndex].idEstadoFlujo  ==  4 ) {
      this.isButtonVisible=false;
     } else {
      this.isButtonVisible=true;
     } 

    
  }

  onChangeMatch (idEmpleado:number, idDistrito:number)  {
    // console.log(idEmpleado,'EMPLEADO',idDistrito,'DISTRITO');
    this.ventaService.MatcPrecioVelivery(idEmpleado,idDistrito).subscribe((resp:any) => { 
      this.formData.preciodelivery = resp  
   
    });  
   
     }
     validateForm(form:NgForm) {
      if(form.value.idEmpleado == null )
         return   Swal.fire({
            title: 'Seleccionar Empleado' , 
            icon: 'error',
          });   
          else if (form.value.idDistrito == null )
          return   Swal.fire({
             title: 'Seleccionar Distrito' , 
             icon: 'error',
           });   
        }
  onSubmit(form: NgForm) {
    console.log(form.value,'GUARDADELIVERY')
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
  else if (
      
        form.value.preciodelivery === undefined ||  form.value.preciodelivery === null
      ) {
        return Swal.fire({
          // title: form.value.cantidadGlobalKardex + ' Productos en Stock',
          text: 'No Existe Precio Delivery -  Ingresarlo en Mantenimientos',
          icon: 'error',
        });
      }  
    
      else{   
        let fechaEnvio: any;
        fechaEnvio = moment(form.value.fechaEnvio).format('YYYY-MM-DD');
        form.value.fechaEnvio = fechaEnvio; 
       this.ventaService.detalleDelivery = form.value  
         this.ventaService.GuardaEmpleadoDelivery(this.formData).subscribe(resp =>{   
        this.toastr.success('Asignado Exitosamente');
        // this.ngOnInit();
       });     
       this.dialogRef.close();
      //  this.ngOnInit();
     
      }   
    }

}
