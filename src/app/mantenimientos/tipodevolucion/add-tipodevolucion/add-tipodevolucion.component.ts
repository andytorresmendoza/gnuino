import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DataTipodevolucion, TipoDevolucionI } from '../../../models/tipodevolucion';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipodevolucion',
  templateUrl: './add-tipodevolucion.component.html',
  styleUrls: ['./add-tipodevolucion.component.css']
})
export class AddTipodevolucionComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_devolucion: new FormControl('',Validators.required),
      
   })
   public tipodevoluciones: DataTipodevolucion[] =[];
   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }

  AddTipodevolucion(tipodevoluciones: TipoDevolucionI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addTipoDevolucion(tipodevoluciones)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipodevolucion"]);
     
      
    });
  
   
  
  }
}

