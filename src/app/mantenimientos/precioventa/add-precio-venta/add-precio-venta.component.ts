import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataTipoProducto } from '../../../models/tipoProducto';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import { DataPrecioVenta } from 'src/app/models/precioVenta';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-precio-venta',
  templateUrl: './add-precio-venta.component.html',
  styleUrls: ['./add-precio-venta.component.css']
})
export class AddPrecioVentaComponent implements OnInit {
  public formData : DataPrecioVenta;
public tipoproducto : DataTipoProducto;
public almacen : DataTipoAlmacen
  constructor(private mantenimientosServices: MantenimientosService
    , private router:Router,private currentRoute: ActivatedRoute,private toastr: ToastrService) { }


  ngOnInit(): void {

    let id = this.currentRoute.snapshot.paramMap.get('id'); 
    if (id !== 'nuevo') {
      this.mantenimientosServices.getPrecioVentabyId(+id).subscribe(res => {
         this.formData = res[0]; 
      //  console.log(res);
        // console.log( this.formData);


      });
    }else{
      this.resetForm();

}

this.mantenimientosServices.getProducto()
.subscribe(resp => { 
   this.tipoproducto = resp; 
});

this.mantenimientosServices.getTipoAlmacen()
.subscribe(resp => { 
   this.almacen = resp;
 
});

  }

  resetForm(form?:NgForm){
    if(form =null)
    form.resetForm();
     this.formData={        
      id:null, 
      idAlmacen: null,
      idProducto: null, 
      precioVenta: '0.00',
      fechaVenta:''
     
  }; 
  } 


  onSubmit(form:NgForm):void{ 
     if (this.formData.id) { 
      this.mantenimientosServices.updatePrecioVenta(this.formData).subscribe(
        resp=>{
   
        this.toastr.success('Actualizado Exitosamente','Gnuino');
          this.router.navigate(["../mantenimientos/listarprecioventa"]);
        }
      )
  } 
  else{
 
     this.mantenimientosServices.savePrecioVenta(this.formData).subscribe(res =>{
    //console.log(res);
      this.resetForm();
      this.toastr.success('Guardado Exitosamente','Gnuino');
     this.router.navigate(["../mantenimientos/listarprecioventa"]);
    }) ;
 }
}
}
