import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { DataBancoVenta } from '../../../models/bancoventa';

@Component({
  selector: 'app-listarbancoventa',
  templateUrl: './listarbancoventa.component.html',
  styleUrls: ['./listarbancoventa.component.css']
})
export class ListarbancoventaComponent implements OnInit {
  displayedColumns: string[] = ['Banco','details'];
  dataSource = new MatTableDataSource<DataBancoVenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this. getBancoVenta();
  }
  getBancoVenta(){

    this.mantenientoservice.getBancoVenta()
   .subscribe(resp => {
    this.dataSource.data = resp as DataBancoVenta[]; 
      // this.cliente = resp; 
    // console.log(resp);
      // this.cargando = false;
     //  console.log(resp);
  });
 } 
 openForEdit(bancoId: number) {

  this.router.navigate(['mantenimientos/bancoventa/'+bancoId]);
}
}
