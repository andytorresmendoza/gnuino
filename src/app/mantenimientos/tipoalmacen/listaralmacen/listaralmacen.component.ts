import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import { DataTipoAlmacen } from '../../../models/tipoalmacen';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listaralmacen',
  templateUrl: './listaralmacen.component.html',
  styleUrls: ['./listaralmacen.component.css']
})
export class ListaralmacenComponent implements OnInit {

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Direccion','details'];
  dataSource = new MatTableDataSource<DataTipoAlmacen>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
almacenes: DataTipoAlmacen[]=[];
  cargando = true; 

   
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getTipoAlmacen()
    .subscribe(resp => {
      this.dataSource.data = resp as DataTipoAlmacen[]; 
      //  this.almacenes = resp; 
      this.cargando = false;
      console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  // Editar(almacenes:DataTipoAlmacen):void{
  //   localStorage.setItem("id",almacenes.id.toString());
  //   this.router.navigate(["../mantenimientos/editalmacen"]);
  
  // }
  openForEdit(idalmacen: number) {

    this.router.navigate(['mantenimientos/addalmacen/'+idalmacen]);
  }
}
