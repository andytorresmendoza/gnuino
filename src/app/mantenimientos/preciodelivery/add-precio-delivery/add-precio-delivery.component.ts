import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataDistrito } from '../../../models/countries';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataEmpleado } from '../../../models/empleado';
import { DataPrecioDelivery } from '../../../models/precioDelivery';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-precio-delivery',
  templateUrl: './add-precio-delivery.component.html',
  styleUrls: ['./add-precio-delivery.component.css']
})
export class AddPrecioDeliveryComponent implements OnInit {
public distritos:DataDistrito;
public empleado:DataEmpleado;
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
    

     this.mantenimientosServices.getEmpleado()
     .subscribe(response => { 
        this.empleado = response;  
    // this.cargando = false; 
     }
   );
 
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

  onSubmit(form:NgForm):void{ 
    if (this.formData.id) { 
     this.mantenimientosServices.updatePrecioDelivery(this.formData).subscribe(
       resp=>{
  
       this.toastr.success('Actualizado Exitosamente','Gnuino');
        this.router.navigate(["../mantenimientos/listarpreciodelivery"]);
       }
     )
 } 
 else{

    this.mantenimientosServices.savePrecioDelivery(this.formData).subscribe(res =>{
   //console.log(res);
     this.resetForm();
     this.toastr.success('Guardado Exitosamente','Gnuino');
    this.router.navigate(["../mantenimientos/listarpreciodelivery"]);
   }) ;
}
}
}
