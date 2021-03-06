import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KardexService } from '../../../services/kardex/kardex.service';
import { DataDevolucionSinOc } from 'src/app/models/devolucionsinoc';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listardevolucionsinoc',
  templateUrl: './listardevolucionsinoc.component.html',
  styleUrls: ['./listardevolucionsinoc.component.css']
})
export class ListardevolucionsinocComponent implements OnInit {
  ListIngresoSinOcCerrados:DataDevolucionSinOc []= [];
  cargando = true; 
  displayedColumns: string[] = ['Nro Ingreso', 'Tipo Movimiento', 'Fecha','Estado','details' ];
  dataSource = new MatTableDataSource<DataDevolucionSinOc>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor  (private servicioKardex: KardexService , private router:Router,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getListIngresosCerrados();
  }
  getListIngresosCerrados(){

    this.servicioKardex.getListIngresossinocCerrados()
   .subscribe(resp => {
    this.dataSource.data = resp as DataDevolucionSinOc[]; 
      this.ListIngresoSinOcCerrados = resp; 
      this.cargando = false;
  
     // console.log(resp);
  });
 }

 openForEdit(DevolucionID: number) {

  this.router.navigate(['kardex/devolucionsinoc/'+DevolucionID]);
}
}
