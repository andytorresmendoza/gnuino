import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataTipodevolucion } from '../../../models/tipodevolucion';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-tipodevolucion',
  templateUrl: './editar-tipodevolucion.component.html',
  styleUrls: ['./editar-tipodevolucion.component.css']
})
export class EditarTipodevolucionComponent implements OnInit {
  tipodevoluciones: DataTipodevolucion[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 
  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getTipoDevolucionId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.tipodevoluciones  = data;
      
    })
  }


  Actualizar(tipodevoluciones:DataTipodevolucion){
    console.log('component',tipodevoluciones[0].id);
    this.mantenimientosService.updateTipoDevolucion(tipodevoluciones)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.tipodevoluciones[0].descripcion_devolucion,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipodevolucion"]);

      this.tipodevoluciones[0] = data;

    })
  } 

}


