import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBanco } from 'src/app/models/banco';
import { DataNrocuenta } from 'src/app/models/nrocuenta';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import Swal from 'sweetalert2';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editarbanco',
  templateUrl: './editarbanco.component.html',
  styleUrls: ['./editarbanco.component.css']
})
export class EditarbancoComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_banco: new FormControl('',Validators.required),
    idNroCuenta: new FormControl('',Validators.required),
    descripcion_cuenta: new FormControl('',Validators.required)
    
      
   })
  bancos: DataBanco[] = [];
  public nrocuentas:DataNrocuenta[] = [];

  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }

  ngOnInit(): void {
    this.Editar();
   this.getNroCuenta();
  }
  getNroCuenta(){this.mantenimientosService.getNroCuenta()
    .subscribe(resp => {
      this.nrocuentas = resp
 
    // console.log(this.nrocuentas,'nrocuenta');
  
   });
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getBancoId(+id)
    .subscribe(data=>{
         console.log('editar',data);
       this.bancos  = data;
      
    })
  }
  Actualizar(bancos:DataBanco){
    console.log('component',bancos[0].id);
    this.mantenimientosService.updateBanco(bancos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.bancos[0].descripcion_banco,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarbanco"]);

      this.bancos[0] = data;

    })
  } 

}


