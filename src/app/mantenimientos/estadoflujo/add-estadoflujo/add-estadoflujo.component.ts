import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataEstadoFlujo } from 'src/app/models/estadoflujo';
import Swal from 'sweetalert2';
import { EstadoFlujoI } from '../../../models/estadoflujo';

@Component({
  selector: 'app-add-estadoflujo',
  templateUrl: './add-estadoflujo.component.html',
  styleUrls: ['./add-estadoflujo.component.css']
})
export class AddEstadoflujoComponent implements OnInit {
  loginForm = new FormGroup({
    detalle_estado: new FormControl('',Validators.required),
      
   })
   public estadoflujos: DataEstadoFlujo[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }
  ngOnInit(): void {
  }

  AddEstadoflujo(estadoflujos: EstadoFlujoI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addEstadoflujo(estadoflujos)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarestadoflujo"]);
     
      
    });
  
   
  
  }
}

