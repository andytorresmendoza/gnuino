import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { DataNrocuenta, NrocuentaI } from 'src/app/models/nrocuenta';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-nrocuenta',
  templateUrl: './add-nrocuenta.component.html',
  styleUrls: ['./add-nrocuenta.component.css']
})
export class AddNrocuentaComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_cuenta: new FormControl('',Validators.required),
      
   })
   public nrocuentas: DataNrocuenta[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }
 
  ngOnInit(): void {

  }
  AddNrocuenta(nrocuentas: NrocuentaI):void{
    //  console.log(nrocuentas);
    this.mantenimientoService.addNroCuenta(nrocuentas)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarnrocuenta"]);
     
      
    });
  
   
  
  }
}
