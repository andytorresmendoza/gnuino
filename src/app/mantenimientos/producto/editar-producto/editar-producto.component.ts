import { Component, OnInit } from '@angular/core';
import { DataProducto } from 'src/app/models/producto';
import { DataCategoria } from 'src/app/models/categoria';
import { DataModelo } from 'src/app/models/modelo';
import { DataUnidadMedida } from 'src/app/models/unidadmedida';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
    loginForm = new FormGroup({
     nombre_producto: new FormControl('',Validators.required),
     idCategoria: new FormControl('',Validators.required),
     idModelo: new FormControl('',Validators.required),
     idUnidadMedida: new FormControl('',Validators.required),
     nombre_modelo: new FormControl('',Validators.required),
     detalle: new FormControl('',Validators.required),
     nombre_categorias: new FormControl('',Validators.required),
     
   })
  public productos: DataProducto[] = [];
  public categorias: DataCategoria[] = [];
  public modelos: DataModelo[] = [];
  public unidadmedidas: DataUnidadMedida[] = [];

  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }

  ngOnInit(): void {
    this.Editar();
   this.getCategoria();
   this.getModelo();
   this.getUnidadmedida();
  }
  getCategoria(){this.mantenimientosService.getCategoria()
    .subscribe(resp => {
      this.categorias = resp
 
    // console.log(this.nrocuentas,'nrocuenta');
  
   });
  }
  getModelo(){this.mantenimientosService.getModelo()
    .subscribe(resp => {
      this.modelos = resp
 
    // console.log(this.nrocuentas,'nrocuenta');
  
   });
  }
  getUnidadmedida(){this.mantenimientosService.getUnidadmedida()
    .subscribe(resp => {
      this.unidadmedidas = resp
 
    // console.log(this.nrocuentas,'nrocuenta');
  
   });
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getProductoId(+id)
    .subscribe(data=>{
         console.log('editar',data);
       this.productos  = data;
      
    })
  }
  Actualizar(productos:DataProducto){
    console.log('component',productos[0].id);
    this.mantenimientosService.updateProducto(productos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.productos[0].nombre_producto,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarproducto"]);

      this.productos[0] = data;

    })
  } 
}
