import { Component, OnInit } from '@angular/core';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';

import { DataNrocuenta, NrocuentaI } from 'src/app/models/nrocuenta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-nrocuenta',
  templateUrl: './editar-nrocuenta.component.html',
  styleUrls: ['./editar-nrocuenta.component.css']
})
export class EditarNrocuentaComponent implements OnInit {
  nrocuentas: DataNrocuenta[] = [];
  constructor(private mantenimientosService: MantenimientosService
    , private router:Router) { }
 
  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.mantenimientosService.getNrocuentaId(+id)
    .subscribe(data=>{
        // console.log('editar',data);
       this.nrocuentas  = data;
      
    })
  }
  Actualizar(nrocuentas:DataNrocuenta){
    console.log('component',nrocuentas[0].id);
    this.mantenimientosService.updateNrocuenta(nrocuentas)
    .subscribe(data=>{

      // console.log('actualizar',data);
      // alert("se actualizo");
      Swal.fire({
        title: this.nrocuentas[0].descripcion_cuenta,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
      this.router.navigate(["../mantenimientos/listarnrocuenta"]);

      this.nrocuentas[0] = data;

    })
  } 

}
