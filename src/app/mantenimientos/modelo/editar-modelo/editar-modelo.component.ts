import { Component, OnInit } from '@angular/core';
import { DataModelo } from 'src/app/models/modelo';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css']
})
export class EditarModeloComponent implements OnInit {
  modelos: DataModelo[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getModeloId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.modelos  = data;
      
    })
  }

  Actualizar(modelos:DataModelo){
    console.log('component',modelos[0].id);
    this.mantenimientosService.updateModelo(modelos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.modelos[0].nombre_modelo,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarmodelo"]);

      this.modelos[0] = data;

    })
  } 

}

