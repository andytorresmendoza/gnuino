import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { DataEntradaSinOC } from '../../../models/entradasinOc';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listarentradasinocanulada',
  templateUrl: './listarentradasinocanulada.component.html',
  styleUrls: ['./listarentradasinocanulada.component.css']
})
export class ListarentradasinocanuladaComponent implements OnInit {
  entradaSinOc:DataEntradaSinOC[]=[];
  cargando = true; 
  constructor(private servicioKardex: KardexService , private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.EntradassinOcAnuladas();
  }

  EntradassinOcAnuladas(){

    this.servicioKardex.getEntradassinOcAnulada()
   .subscribe(resp => {
     
      this.entradaSinOc = resp; 
      this.cargando = false;
   console.log(resp);
  });
}

openForEdit(entradasinId: number) {

  this.router.navigate(['kardex/entradasinoc/'+entradasinId]);
}
}
