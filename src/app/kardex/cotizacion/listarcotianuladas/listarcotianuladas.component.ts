import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { DataCotizacion } from '../../../models/cotizacion';

@Component({
  selector: 'app-listarcotianuladas',
  templateUrl: './listarcotianuladas.component.html',
  styleUrls: ['./listarcotianuladas.component.css']
})
export class ListarcotianuladasComponent implements OnInit {
  cotizaciones:DataCotizacion[]=[];
  cargando = true; 
  constructor
  (private servicioKardex: KardexService , private router:Router ) { }


  ngOnInit(): void {
    this. getCotizacionAnuladas();
  }
  getCotizacionAnuladas(){

    this.servicioKardex.getCotizacionAnuladas()
   .subscribe(resp => {
     
      this.cotizaciones = resp; 
      this.cargando = false;
     //  console.log(resp);
  });
 } 
 openForEdit(CotizacionId: number) {

  this.router.navigate(['kardex/cotizacion/'+CotizacionId]);
}

}
