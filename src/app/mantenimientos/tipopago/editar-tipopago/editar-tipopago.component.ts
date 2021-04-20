import { Component, OnInit } from '@angular/core';
import { DataTipoPago } from 'src/app/models/tipopago';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tipopago',
  templateUrl: './editar-tipopago.component.html',
  styleUrls: ['./editar-tipopago.component.css']
})
export class EditarTipopagoComponent implements OnInit {

  tipopagos: DataTipoPago[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getTipopagoId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.tipopagos  = data;
      
    })
  }
  
  Actualizar(tipopagos:DataTipoPago){
    console.log('component',tipopagos[0].id);
    this.mantenimientosService.updateTipopago(tipopagos)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.tipopagos[0].descripcion_pago,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listartipopago"]);

      this.tipopagos[0] = data;

    })
  } 

}

