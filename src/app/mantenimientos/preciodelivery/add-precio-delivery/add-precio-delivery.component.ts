import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataDistrito } from '../../../models/countries';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataEmpleado } from '../../../models/empleado';
import { DataPrecioDelivery } from '../../../models/precioDelivery';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-precio-delivery',
  templateUrl: './add-precio-delivery.component.html',
  styleUrls: ['./add-precio-delivery.component.css']
})
export class AddPrecioDeliveryComponent implements OnInit {
public distritos:DataDistrito;
public empleado:DataEmpleado[];
public formData : DataPrecioDelivery;
 
constructor(private mantenimientosServices: MantenimientosService
  , private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getPrecioDeliverybyId(+id).subscribe(res => {
         this.formData = res[0]; 
    console.log(res[0].id,'id');
         console.log( this.formData);


      });
    }else{
      this.resetForm();

} 
 this.distrito();
    

 this.mantenimientosServices.getEmpleado().subscribe(resp => {
  // console.log(resp);
  this.empleado = (resp as DataEmpleado[])
  .map(empleados=>{ 
    empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado))
    return empleados;
  });
});
 
  }
  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null, 
      idEmpleado: null,
      idDistrito: null, 
      precioDelivery:0
     
  }; 
  } 


  private distrito(){
   
    this.mantenimientosServices.getDistritoAll().subscribe(response => {  
      this.distritos = (response).
      filter(valor => valor.idProvincia === 1401 );
    //  this.distritos = (response  as DataDistrito[])
   
   console.log( this.distritos);
    }
  );
  }
  validateSelect(form:NgForm) {
    if(form.value.idEmpleado == null )
       return   Swal.fire({
          title: 'Seleccionar Empleado' , 
          icon: 'error', 
        }); 
        else   if(form.value.idDistrito == null )
        return   Swal.fire({
           title: 'Seleccionar Distrito' , 
           icon: 'error', 
         }); 
         else   if(form.value.precioDelivery == 0  || form.value.precioDelivery == null)
         return   Swal.fire({
            title: 'Ingrese Precio' , 
            icon: 'error', 
          }); 
      }

  onSubmit(form:NgForm):void{ 
    if (this.validateSelect(form)){
      return;
     }
    
    else if (this.formData.id) { 
     this.mantenimientosServices.updatePrecioDelivery(this.formData).subscribe(
       resp=>{
  
       this.toastr.success('Actualizado Exitosamente','Gnuino');
        this.router.navigate(["../mantenimientos/listarpreciodelivery"]);
       }
     )
 } 
 else{

    this.mantenimientosServices.savePrecioDelivery(this.formData).subscribe(res =>{
  // console.log(res);
     if(res.code === 401){
      this.toastr.warning(res.msg )
      return;
     }else{
      this.toastr.success('Guardado Exitosamente', 'Gnuino' )
      this.resetForm();
      this.router.navigate(["../mantenimientos/listarpreciodelivery"]);
     }
        // res.code === 401 ?  this.toastr.warning(res.msg ):  this.toastr.success('Guardado Exitosamente', 'Gnuino' )
          // this.resetForm(); 
          // this.router.navigate(["../mantenimientos/listarpreciodelivery"]);
    

   
   }) ;
}
}
}
