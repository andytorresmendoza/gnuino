import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DataBanco, BancoI } from '../../../models/banco';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataNrocuenta } from 'src/app/models/nrocuenta';

@Component({
  selector: 'app-addbanco',
  templateUrl: './addbanco.component.html',
  styleUrls: ['./addbanco.component.css']
})
export class AddbancoComponent implements OnInit {
  loginForm = new FormGroup({
    descripcion_banco: new FormControl('',Validators.required),
    idNroCuenta: new FormControl('',Validators.required)
    
      
   })
 
   public bancos: DataBanco[] =[];
   public nrocuentas:DataNrocuenta[] = [];
 
   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }


  ngOnInit(): void {
    this.getNroCuenta();
  }
  
  // getNroCuenta(){this.mantenimientoService.getNroCuentaActiva()
    getNroCuenta(){this.mantenimientoService.getNroCuenta()
  .subscribe(resp => {
    this.nrocuentas = resp
    //  this.nrocuentas[0].id = resp;
    //  this.nrocuentas[0].descripcion_cuenta = resp;  
    //  console.log(this.data,'nrocuenta');

 },(err)=>{
   console.log('Erro en la categoria');
 });
}

  AddBanco(bancos: BancoI):void{
    console.log(bancos);
    // this.nrocuentas[0].id = 22;
  this.mantenimientoService.addBanco(bancos)
    .subscribe(res=>{
     console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarbanco"]);
     
      
    });
  
   
  
  }
 
}

