import { Component, OnInit ,ViewChild} from '@angular/core';
import jwt_decode from "jwt-decode";
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listardeliverytodos',
  templateUrl: './listardeliverytodos.component.html',
  styleUrls: ['./listardeliverytodos.component.css']
})
export class ListardeliverytodosComponent implements OnInit {
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
  constructor(private ventaService: VentaService, private router:Router) { }

  ngOnInit(): void {
    this.ventaService.getDeliveryTodos()
    .subscribe(resp => {
      this.dataSource.data = resp; 
        this.listaDelivery = resp; 
        this.ventaService.detalleCotizacion = resp; 
        this.cargando = false; 
        // console.log(resp);
   });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openDelivery(id: number) {
    // console.log(id,'editar');
    this.router.navigate(['venta/adddeliverytodos/'+id]);
  } 

}
