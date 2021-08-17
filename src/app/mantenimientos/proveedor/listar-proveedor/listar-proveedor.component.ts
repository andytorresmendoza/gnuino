import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProveedor } from '../../../models/proveedor';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {
  // proveedores: DataProveedor[] = [];
  // cargando = true; 
  displayedColumns: string[] = ['Nombre Proveedor', 'RUC', 'Email','Telefono','details'];
  dataSource = new MatTableDataSource<DataProveedor>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  constructor(private mantemientosService: MantenimientosService,  private toastr: ToastrService , private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getProveedor()
    .subscribe(resp => {
      this.dataSource.data = resp as DataProveedor[]; 
      //  this.proveedores = resp; 
      // this.cargando = false;
       console.log(resp);
  
 
   });
  }

  /*Editar(proveedor:DataProveedor):void{
    localStorage.setItem("id",proveedor.id.toString());
    this.router.navigate(["../mantenimientos/editproveedor"]);
  
  }*/

  openForEdit(idProveedor: number) {

    this.router.navigate(['../mantenimientos/addproveedor/'+idProveedor]);
  }
  
}
