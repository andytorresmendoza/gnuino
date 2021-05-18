import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../services/kardex/kardex.service';
@Component({
  selector: 'app-kardexsinoc',
  templateUrl: './kardexsinoc.component.html',
  styleUrls: ['./kardexsinoc.component.css']
})
export class KardexsinocComponent implements OnInit {
  ListKardex :any []= [];
  cargando = true; 
  constructor  (private servicioKardex: KardexService) { }

  ngOnInit(): void {
    this.getListKardexsinoc();
  }
  getListKardexsinoc(){

    this.servicioKardex.getLisKardexsinoc()
   .subscribe(resp => {
     
      this.ListKardex = resp; 
      this.cargando = false;
      // this.cargando = false;
      // console.log(resp);
  });
  }
}
