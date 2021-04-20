import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DataPerfilusuario, PerfilusuarioI } from 'src/app/models/perfilUsuario';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-perfilusuario',
  templateUrl: './add-perfilusuario.component.html',
  styleUrls: ['./add-perfilusuario.component.css']
})
export class AddPerfilusuarioComponent implements OnInit {
  loginForm = new FormGroup({
    tipo_usuario: new FormControl('',Validators.required),
      
   })
   public perfiles: DataPerfilusuario[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }


  AddPerfil(perfiles: PerfilusuarioI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addPerfilusuario(perfiles)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarperfilusuario"]);
     
      
    });
  
   
  
  }
}


