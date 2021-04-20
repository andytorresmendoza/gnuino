import { Component, OnInit } from '@angular/core';
import { DataCategoria } from 'src/app/models/categoria';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  categorias: DataCategoria[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getCategoriaId(+id)
    .subscribe(data=>{
      //  console.log('editar',data);
       this.categorias  = data;
      
    })
  }

  Actualizar(categorias:DataCategoria){
    console.log('component',categorias[0].id);
    this.mantenimientosService.updateCategoria(categorias)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.categorias[0].nombre_categoria,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarcategoria"]);

      this.categorias[0] = data;

    })
  } 

}

