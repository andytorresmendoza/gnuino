import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataEstadoFlujo } from 'src/app/models/estadoflujo';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-estadoflujo',
  templateUrl: './editar-estadoflujo.component.html',
  styleUrls: ['./editar-estadoflujo.component.css']
})
export class EditarEstadoflujoComponent implements OnInit {
  estadoflujos: DataEstadoFlujo[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getEstadoflujoId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.estadoflujos  = data;
      
    })
  }


  Actualizar(estadoflujos:DataEstadoFlujo){
    console.log('component',estadoflujos[0].id);
    this.mantenimientosService.updateEstadoflujo(estadoflujos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.estadoflujos[0].detalle_estado,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarestadoflujo"]);

      this.estadoflujos[0] = data;

    })
  } 
}
