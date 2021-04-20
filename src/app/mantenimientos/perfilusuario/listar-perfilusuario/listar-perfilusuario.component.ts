import { Component, OnInit } from '@angular/core';
import { DataPerfilusuario } from 'src/app/models/perfilUsuario';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-perfilusuario',
  templateUrl: './listar-perfilusuario.component.html',
  styleUrls: ['./listar-perfilusuario.component.css']
})
export class ListarPerfilusuarioComponent implements OnInit {
  perfiles: DataPerfilusuario[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 
  ngOnInit(): void {
    this.mantemientosService.getPerfilusuario()
    .subscribe(resp => {
      
       this.perfiles = resp;
      this.cargando = false;
      // console.log(resp);
  
 
   },(err)=>{
     console.log('Erro en la categoria');
   });
  }
  Editar(categoria:DataPerfilusuario):void{
    localStorage.setItem("id",categoria.id.toString());
    this.router.navigate(["../mantenimientos/editperfilusuario"]);
  
  }

}
