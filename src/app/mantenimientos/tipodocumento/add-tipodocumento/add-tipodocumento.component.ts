import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DataTipodocumento } from 'src/app/models/tipodocumento';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { TipodocumentoI } from '../../../models/tipodocumento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipodocumento',
  templateUrl: './add-tipodocumento.component.html',
  styleUrls: ['./add-tipodocumento.component.css']
})
export class AddTipodocumentoComponent implements OnInit {
  loginForm = new FormGroup({
    tipo_documento: new FormControl('',Validators.required),
      
   })
   public tipodocumentos: DataTipodocumento[] =[];

   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }


  AddTipodocumento(tipodocumentos: TipodocumentoI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addTipodocumento(tipodocumentos)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipodocumento"]);
     
      
    });
  
   
  
  }
}

