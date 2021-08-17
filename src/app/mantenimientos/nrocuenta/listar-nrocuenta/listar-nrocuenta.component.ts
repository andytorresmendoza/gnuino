import { Component, OnInit } from '@angular/core';
import { DataNrocuenta, NrocuentaI } from 'src/app/models/nrocuenta';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listar-nrocuenta',
  templateUrl: './listar-nrocuenta.component.html',
  styleUrls: ['./listar-nrocuenta.component.css']
})
export class ListarNrocuentaComponent implements OnInit {
  displayedColumns: string[] = ['Nro de Cuenta','Empleado Cuenta','details'];
  dataSource = new MatTableDataSource<DataNrocuenta>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // nrocuentas: DataNrocuenta[] = [];
  cargando = true; 
  constructor(private mantemientosService: MantenimientosService, private router:Router) { }
 

  ngOnInit(): void {

 
    this.mantemientosService.getNroCuenta()
    .subscribe(resp => {
      this.dataSource.data = resp as DataNrocuenta[]; 
      //  this.nrocuentas = resp;
      this.cargando = false;
     console.log(resp);
  
   });
    
 }

//  getNroCuenta(){

//  }
 
/*Editar(nrocuenta:DataNrocuenta):void{
  localStorage.setItem("id",nrocuenta.id.toString());
  this.router.navigate(["../mantenimientos/editnrocuenta"]);

}*/
openForEdit(nrocuenta: number) {

  this.router.navigate(['mantenimientos/addnrocuenta/'+nrocuenta]);
}


/*no se usa */
Delete(nrocuentas:DataNrocuenta, i: number  ){
//  console.log('component',nrocuentas.id);
  Swal.fire({
    title: 'Esta seguro?',
 text: `Esta seguro que desea borrar a ${nrocuentas.descripcion_cuenta}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) { 
      // console.log('todo',nrocuentas ); 
      // console.log('indice',i ); 
      //  this.nrocuentas.splice(i, 1); //eliminado automatico de la grilla
       this.mantemientosService.deleteNroCuenta(nrocuentas).subscribe();
    }
  });
}
 
}
