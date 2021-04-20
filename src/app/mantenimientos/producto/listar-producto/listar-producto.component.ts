import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProducto } from 'src/app/models/producto';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos: DataProducto[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getProducto()
    .subscribe(resp => {
      
       this.productos = resp; 
      this.cargando = false;
  console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });

  }

  Editar(producto:DataProducto):void{
    localStorage.setItem("id",producto.id.toString());
    this.router.navigate(["../mantenimientos/editproducto"]);
  
  }
}
