import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DataModelo, ModeloI } from 'src/app/models/modelo';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-modelo',
  templateUrl: './add-modelo.component.html',
  styleUrls: ['./add-modelo.component.css']
})
export class AddModeloComponent implements OnInit {
  loginForm = new FormGroup({
    nombre_modelo: new FormControl('',Validators.required),
      
   })
   public categorias: DataModelo[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }


  AddModelo(modelos: ModeloI):void{
    console.log( modelos);
    this.mantenimientoService.addModelo(modelos)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarmodelo"]);
     
      
    });
  
   
  
  }
}

