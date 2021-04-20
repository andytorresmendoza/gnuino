import { Component, OnInit } from '@angular/core';
import { DataTipoSalida } from 'src/app/models/tiposalida';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tiposalida',
  templateUrl: './editar-tiposalida.component.html',
  styleUrls: ['./editar-tiposalida.component.css']
})
export class EditarTiposalidaComponent implements OnInit {
  tiposalidas: DataTipoSalida[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getTiposalidaId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.tiposalidas  = data;
      
    })
  }
  Actualizar(tiposalidas:DataTipoSalida){
    console.log('component',tiposalidas[0].id);
    this.mantenimientosService.updateTiposalida(tiposalidas)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.tiposalidas[0].descripcion_salida,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartiposalida"]);

      this.tiposalidas[0] = data;

    })
  } 

}

