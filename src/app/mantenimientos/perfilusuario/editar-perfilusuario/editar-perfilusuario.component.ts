import { Component, OnInit } from '@angular/core';
import { DataPerfilusuario } from 'src/app/models/perfilUsuario';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-perfilusuario',
  templateUrl: './editar-perfilusuario.component.html',
  styleUrls: ['./editar-perfilusuario.component.css']
})
export class EditarPerfilusuarioComponent implements OnInit {
  perfiles: DataPerfilusuario[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 
  ngOnInit(): void {
    this.Editar();
  }
  
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getPerfilesId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.perfiles  = data;
      
    })
  }

  Actualizar(perfiles:DataPerfilusuario){
    console.log('component',perfiles[0].id);
    this.mantenimientosService.updatePerfil(perfiles)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.perfiles[0].tipo_usuario,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarperfilusuario"]);

      this.perfiles[0] = data;

    })
  } 

}

