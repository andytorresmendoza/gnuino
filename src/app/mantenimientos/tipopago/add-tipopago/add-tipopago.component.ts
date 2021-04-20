import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataTipoPago, TipoPagoI } from 'src/app/models/tipopago';
@Component({
  selector: 'app-add-tipopago',
  templateUrl: './add-tipopago.component.html',
  styleUrls: ['./add-tipopago.component.css']
})
export class AddTipopagoComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_pago: new FormControl('',Validators.required),
      
   })
   public tipopagos: DataTipoPago[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }


  AddTipopago(tipopagos: TipoPagoI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addTipopago(tipopagos)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipopago"]);
     
      
    });
  
   
  
  }
}

