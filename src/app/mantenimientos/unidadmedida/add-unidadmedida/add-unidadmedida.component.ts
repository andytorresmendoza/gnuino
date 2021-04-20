import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DataUnidadMedida, UnidadMedidaI } from 'src/app/models/unidadmedida';
import Swal from 'sweetalert2';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-unidadmedida',
  templateUrl: './add-unidadmedida.component.html',
  styleUrls: ['./add-unidadmedida.component.css']
})
export class AddUnidadmedidaComponent implements OnInit {
  loginForm = new FormGroup({
    detalle: new FormControl('',Validators.required),
    alto: new FormControl('',Validators.required),
    ancho: new FormControl('',Validators.required),
      
   })
   public unidadmedidas: DataUnidadMedida[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }


  ngOnInit(): void {
  }


  AddUnidadmedida(unidadmedidas: UnidadMedidaI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addUnidadmedida(unidadmedidas)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarunidadmedida"]);
     
      
    });
  
   
  
  }
}

