import { Component, OnInit } from '@angular/core';
import { DataCategoria } from 'src/app/models/categoria';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
  categorias: DataCategoria[] = [];
  cargando = true; 

  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getCategoria()
    .subscribe(resp => {
      
       this.categorias = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
    
  }
  Editar(categoria:DataCategoria):void{
    localStorage.setItem("id",categoria.id.toString());
    this.router.navigate(["../mantenimientos/editcategoria"]);
  
  }


  Delete(categorias:DataCategoria, i: number  ){
    //  console.log('component',nrocuentas.id);
      Swal.fire({
        title: 'Esta seguro?',
     text: `Esta seguro que desea borrar a ${categorias.nombre_categoria}`,
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
      }).then((resp) => {
        if (resp.value) { 
          // console.log('todo',nrocuentas ); 
          // console.log('indice',i ); 
          //  this.nrocuentas.splice(i, 1); //eliminado automatico de la grilla
           this.mantemientosService.deleteCategoria(categorias).subscribe();
        }
      });
    }
     
    }