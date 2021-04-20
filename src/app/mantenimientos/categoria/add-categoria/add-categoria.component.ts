import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DataCategoria } from 'src/app/models/categoria';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriaI } from 'src/app/models/categoria';
 
@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {
  loginForm = new FormGroup({
    nombre_categoria: new FormControl('',Validators.required),
      
   })
   public categorias: DataCategoria[] =[];


   constructor(
    private mantenimientoService: MantenimientosService
    , private router:Router)  { }

  ngOnInit(): void {
  }

AddCategoria(categorias: CategoriaI):void{
    // console.log(nrocuentas);
    this.mantenimientoService.addCategoria(categorias)
    .subscribe(res=>{
      // console.log(res);
      Swal.fire({
        //  title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se Guardo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarcategoria"]);
     
      
    });
  
   
  
  }
}
