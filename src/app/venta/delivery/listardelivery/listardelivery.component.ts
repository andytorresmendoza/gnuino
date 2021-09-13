import { Component, OnInit,ViewChild } from '@angular/core';
import jwt_decode from "jwt-decode";
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listardelivery',
  templateUrl: './listardelivery.component.html',
  styleUrls: ['./listardelivery.component.css']
})
export class ListardeliveryComponent implements OnInit {
  private decoded:any; 
  private iddelivery:any;
  public listaDelivery:any[]=[];
  cargando = true; 
  displayedColumns: string[] = ['Nro','Tipo','Cliente','Distrito','Empleado','Total','Estado','Venta'];
  dataSource = new MatTableDataSource<any>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( public ventaService: VentaService, private router:Router) {
  
    const token =   localStorage.getItem('access_token'); 
    this.decoded = jwt_decode(token); 
    this.iddelivery = this.decoded.user[0].detalleEmpleado[0].id; 
    // console.log(this.iddelivery,'que es');
   }
   ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.ventaService.getListarDeliveryById(this.iddelivery).subscribe(res => {
      this.dataSource.data = res as any[];
      this.listaDelivery = res;
      this.cargando = false; 
  //  console.log(res,'idempleado?');
      });  
  }
  openDelivery(id: number) {
      // console.log(id,'editar');
      this.router.navigate(['venta/adddelivery/'+id]);
    } 

}
