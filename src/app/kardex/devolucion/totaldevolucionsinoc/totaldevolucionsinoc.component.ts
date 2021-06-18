import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataDevolucionSinOc } from '../../../models/devolucionsinoc';
@Component({
  selector: 'app-totaldevolucionsinoc',
  templateUrl: './totaldevolucionsinoc.component.html',
  styleUrls: ['./totaldevolucionsinoc.component.css']
})
export class TotaldevolucionsinocComponent implements OnInit {
  ListDevolucionessinoc :DataDevolucionSinOc []= [];
  cargando = true; 
  constructor  (private servicioKardex: KardexService) { }


  ngOnInit(): void {
this.getListDevolucionessinoc();

  }
  getListDevolucionessinoc(){

    this.servicioKardex.getLisDevolucionesSinOc()
   .subscribe(resp => {
     
      this.ListDevolucionessinoc = resp; 
      this.cargando = false;
      // this.cargando = false;
     // console.log(resp);
  });
  }
}
