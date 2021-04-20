import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataTipoSalida, TipoSalidaI } from 'src/app/models/tiposalida';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tiposalida',
  templateUrl: './add-tiposalida.component.html',
  styleUrls: ['./add-tiposalida.component.css']
})
export class AddTiposalidaComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_salida: new FormControl('',Validators.required),
      
   })
   public tiposalidas: DataTipoSalida[] =[];
   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }

  AddTiposalida(tiposalidas: TipoSalidaI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addTiposalida(tiposalidas)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartiposalida"]);
     
      
    });
  }
}