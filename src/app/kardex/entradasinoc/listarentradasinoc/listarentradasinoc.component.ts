import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataEntradaSinOC } from '../../../models/entradasinOc';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarentradasinoc',
  templateUrl: './listarentradasinoc.component.html',
  styleUrls: ['./listarentradasinoc.component.css']
})
export class ListarentradasinocComponent implements OnInit {
  entradaSinOc:DataEntradaSinOC[]=[];
  cargando = true; 
  constructor (private servicioKardex: KardexService , private router:Router,  private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getEntradasinOC();
  }
  getEntradasinOC(){

    this.servicioKardex.getIngresoSinOC()
   .subscribe(resp => {
     
      this.entradaSinOc = resp; 
      this.cargando = false;
      //  console.log(resp);
  });
 } 

 EstadoEntradasinOcAnular(entradas: DataEntradaSinOC, i: number) {

  const bodyform = {id:entradas.id, estadoIngreso: '3'}
  // console.log(entradas.id);
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Anular el Ingreso ${entradas.codigoIngresoSinOc}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      
      this.entradaSinOc.splice(i, 1);
      this.servicioKardex.EstadoEntradasinocAnular(entradas.id,bodyform).subscribe(
        resp => {
          this.toastr.error('Ingreso Anulado');
  // console.log(resp);
         //  console.log(resp);
      }

      );
    }
  });
}
 openForEdit(Entradaid: number) {

  this.router.navigate(['kardex/entradasinoc/'+Entradaid]);
}



}
