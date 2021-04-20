import { Component, OnInit } from '@angular/core';
import { DataUnidadMedida } from 'src/app/models/unidadmedida';
import Swal from 'sweetalert2';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-unidadmedida',
  templateUrl: './editar-unidadmedida.component.html',
  styleUrls: ['./editar-unidadmedida.component.css']
})
export class EditarUnidadmedidaComponent implements OnInit {
  unidadmedidas: DataUnidadMedida[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 


  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getUnidadmedidaId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.unidadmedidas  = data;
      
    })
  }

  Actualizar(unidadmedidas:DataUnidadMedida){
    console.log('component',unidadmedidas[0].id);
    this.mantenimientosService.updateUnidadmedida(unidadmedidas)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.unidadmedidas[0].detalle,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarunidadmedida"]);

      this.unidadmedidas[0] = data;

    })
  } 

}

