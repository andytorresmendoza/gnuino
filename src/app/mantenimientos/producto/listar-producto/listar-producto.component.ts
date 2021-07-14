import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProducto } from 'src/app/models/producto';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  displayedColumns: string[] = ['Codigo Producto', 'Nombre Codigo', 'Nombre Producto', 'Unidad de Medida','details'];
  dataSource = new MatTableDataSource<DataProducto>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // productos: DataProducto[] = [];
  // cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getProducto()
    .subscribe(resp => {
      this.dataSource.data = resp as DataProducto[]; 
      //  this.productos = resp; 
      // this.cargando = false;
  //  console.log(resp); 
   });

  }

  // Editar(producto:DataProducto):void{
  //   localStorage.setItem("id",producto.id.toString());
  //   this.router.navigate(["../mantenimientos/editproducto"]);
  
  // }

  openForEdit(ProductoId: number) {

    this.router.navigate(['mantenimientos/addproducto/'+ProductoId]);
  }
}
