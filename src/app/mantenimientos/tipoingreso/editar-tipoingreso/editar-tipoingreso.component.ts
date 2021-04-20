import { Component, OnInit } from '@angular/core';
import { DataTipoIngreso } from 'src/app/models/tipoingreso';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tipoingreso',
  templateUrl: './editar-tipoingreso.component.html',
  styleUrls: ['./editar-tipoingreso.component.css']
})
export class EditarTipoingresoComponent implements OnInit {
  tipoingresos: DataTipoIngreso[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getTipoingresoId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.tipoingresos  = data;
      
    })
  }
  
  Actualizar(tipoingresos:DataTipoIngreso){
    console.log('component',tipoingresos[0].id);
    this.mantenimientosService.updateTipoingreso(tipoingresos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.tipoingresos[0].descripcion_ingreso,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipoingreso"]);

      this.tipoingresos[0] = data;

    })
  } 

}


