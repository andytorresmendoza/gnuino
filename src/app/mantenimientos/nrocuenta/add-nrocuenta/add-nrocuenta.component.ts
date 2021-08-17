import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { DataNrocuenta, NrocuentaI } from 'src/app/models/nrocuenta';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataEmpleado } from '../../../models/empleado';
@Component({
  selector: 'app-add-nrocuenta',
  templateUrl: './add-nrocuenta.component.html',
  styleUrls: ['./add-nrocuenta.component.css']
})
export class AddNrocuentaComponent implements OnInit {
  


  //  public nrocuentas: DataNrocuenta[] =[];
   public formData : DataNrocuenta;
   empleados: DataEmpleado[];
   isValid: boolean = true;
   constructor(private mantenimientosServices: MantenimientosService, private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
  let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getNrocuentaId(+id).subscribe(res => {
         this.formData = res[0]; 
         //console.log(res[0].id,'id');
        // console.log( this.formData);


      });
    }else{
      this.resetForm();

  }
  this.mantenimientosServices.getEmpleado().subscribe((resp) => {
    this.empleados =resp as DataEmpleado[];
  });
}
  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null,
      descripcion_cuenta: '',
      idEmpleado:null
      
     
  }; 
  } 
  validateForm(form:NgForm) {
    if(form.value.idEmpleado == null )
       return   Swal.fire({
          title: 'Seleccionar Empleado' , 
          icon: 'error',
        });  
      }

  onSubmit(form:NgForm):void{
     console.log(form.value);
    if(this.validateForm(form)){
      return ;
    }
   else if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched(); //es para validar el guardar
        //  console.log(control); //son todos mis controles del formulario
      });

      return;
    }
    else if (this.formData.id) {
      this.mantenimientosServices.updateNrocuenta(this.formData).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
         this.router.navigate(["../mantenimientos/listarnrocuenta"]);
        }
      )
  } 
  else{

     this.mantenimientosServices.addNroCuenta(this.formData).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
      this.router.navigate(["../mantenimientos/listarnrocuenta"]);
    }) ;
 }
}
 /* AddNrocuenta(nrocuentas: NrocuentaI):void{
  
    this.mantenimientosServices.addNroCuenta(nrocuentas)
    .subscribe(res=>{
     
      Swal.fire({
      
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarnrocuenta"]);
     
      
    });
  
  
  
  } */
}
