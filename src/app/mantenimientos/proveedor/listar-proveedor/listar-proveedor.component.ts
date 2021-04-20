import { Component, OnInit } from '@angular/core';
import { DataProveedor } from '../../../models/proveedor';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {
  proveedores: DataProveedor[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {
    this.mantemientosService.getProveedor()
    .subscribe(resp => {
      
       this.proveedores = resp; 
      this.cargando = false;
      //  console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }

  Editar(proveedor:DataProveedor):void{
    localStorage.setItem("id",proveedor.id.toString());
    this.router.navigate(["../mantenimientos/editproveedor"]);
  
  }
}
