import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DataTipoIngreso, TipoIngresoI } from 'src/app/models/tipoingreso';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tipoingreso',
  templateUrl: './add-tipoingreso.component.html',
  styleUrls: ['./add-tipoingreso.component.css']
})
export class AddTipoingresoComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_ingreso: new FormControl('',Validators.required),
      
   })
   public tipoingresos: DataTipoIngreso[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }
  AddTipoingreso(tipoingresos: TipoIngresoI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addTipoIngreso(tipoingresos)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipoingreso"]);
     
      
    });

}
}
