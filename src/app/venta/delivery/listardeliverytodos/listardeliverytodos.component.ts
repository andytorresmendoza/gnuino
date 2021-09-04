import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listardeliverytodos',
  templateUrl: './listardeliverytodos.component.html',
  styleUrls: ['./listardeliverytodos.component.css']
})
export class ListardeliverytodosComponent implements OnInit {
  private decoded:any; 
  private iddelivery:any;
  public listaDelivery:any[]=[];

  displayedColumns: string[] = ['Nro','Cliente','Distrito','Total','Estado','Venta'];
  dataSource = new MatTableDataSource<any>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private ventaService: VentaService, private router:Router) { }

  ngOnInit(): void {
    this.ventaService.getDeliveryTodos()
    .subscribe(resp => {
      this.dataSource.data = resp; 
        this.listaDelivery = resp; 
        this.ventaService.detalleCotizacion = resp; 
       //  console.log(resp);
   });
  }

  openDelivery(id: number) {
    // console.log(id,'editar');
    this.router.navigate(['venta/adddeliverytodos/'+id]);
  } 

}
