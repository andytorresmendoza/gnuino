import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import {MatTableDataSource} from '@angular/material/table';
import { DataUsuario } from '../../../models/usuario';
 

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {
 
 displayedColumns: string[] = ['username','Nombre Empleado','tipo_usuario'];
 dataSource = new MatTableDataSource<DataUsuario>();
  formdata:any[];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private mantenientoservice: MantenimientosService , private router:Router,  private toastr: ToastrService ) { }

  ngOnInit(): void {
    
    this.getUsuario();
  }
  getUsuario(){

    this.mantenientoservice.getUsuario()
   .subscribe(resp => { 
    this.dataSource.data = resp as DataUsuario[]; 
     console.log(resp);
 
  });
 } 
 openForEdit(id: number) {

  this.router.navigate(['mantenimientos/addusuario/'+id]);
}
}
