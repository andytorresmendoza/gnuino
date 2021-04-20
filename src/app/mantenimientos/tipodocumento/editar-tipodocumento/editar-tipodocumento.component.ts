import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataTipodocumento } from 'src/app/models/tipodocumento';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-tipodocumento',
  templateUrl: './editar-tipodocumento.component.html',
  styleUrls: ['./editar-tipodocumento.component.css']
})
export class EditarTipodocumentoComponent implements OnInit {
  tipodocumentos: DataTipodocumento[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getTipodocumentoId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.tipodocumentos  = data;
      
    })
  }
  
  Actualizar(tipodocumentos:DataTipodocumento){
    console.log('component',tipodocumentos[0].id);
    this.mantenimientosService.updateTipodocumento(tipodocumentos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.tipodocumentos[0].tipo_documento,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipodocumento"]);

      this.tipodocumentos[0] = data;

    })
  } 

}

