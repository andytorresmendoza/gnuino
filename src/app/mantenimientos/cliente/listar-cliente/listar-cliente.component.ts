import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataCliente } from 'src/app/models/cliente';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Dni','details'];
  dataSource = new MatTableDataSource<DataCliente>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  // cliente:DataCliente[]=[];
  // cargando = true; 
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {

    this. getCliente();
  }

  getCliente(){

    this.mantenientoservice.getCliente()
   .subscribe(resp => {
    this.dataSource.data = resp as DataCliente[]; 
      // this.cliente = resp; 
     // console.log(resp);
      // this.cargando = false;
     //  console.log(resp);
  });
 } 
 openForEdit(CotizacionId: number) {

  this.router.navigate(['mantenimientos/cliente/'+CotizacionId]);
}

}
