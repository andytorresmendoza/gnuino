import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import {MatTableDataSource} from '@angular/material/table';
import { DetallesalidaproductoComponent } from '../../salidaproductos/detallesalidaproducto/detallesalidaproducto.component';
import { DetalleprecioventaComponent } from '../detalleprecioventa/detalleprecioventa.component';
import { DataKardex } from '../../../models/kardex';
import { DetalletransferenciaComponent } from '../../transferencia/detalletransferencia/detalletransferencia.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listarkardex',
  templateUrl: './listarkardex.component.html',
  styleUrls: ['./listarkardex.component.css']
})
export class ListarkardexComponent implements OnInit {
  ListIngresosCerrados:DataKardex []= [];
  kardex:DataKardex[]=[];
  cargando = true; 
 
  displayedColumns: string[] = ['Codigo Producto','Categoria', 'Producto','Modelo','Cantidad en Almacen','Cantidad en Reserva', 'Almacen','Salida','Transferencia','Movimientos'];
   dataSource = new MatTableDataSource<DataKardex>();
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
   sort:any;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   constructor
   (private kardexService: KardexService , private router:Router,private toastr: ToastrService ,  private dialog: MatDialog) { }
 
 
   ngOnInit(): void {
     this.getListKardex();
   }
 
   getListKardex(){ 
     this.kardexService.getListKardex()
    .subscribe(resp => {
      // console.log(resp);
      this.kardex = resp;
     this.dataSource.data = resp as DataKardex[];     
       this.cargando = false; 
   });
   
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  AddDetalleSalida( id:number) {   
   //  console.log(id,'detalle');
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.disableClose = true;
   dialogConfig.width = "55%";
   dialogConfig.data = {id }; 
    this.dialog.open(DetallesalidaproductoComponent, dialogConfig).afterClosed().subscribe(resp=>{
 //  console.log(resp,'cierra popup');
  this.getListKardex();
  
    });
  }  
 
  AddDetalleTransferencia( id:number) {   
    //  console.log(id,'detalle');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "65%";
    dialogConfig.data = {id }; 
     this.dialog.open(DetalletransferenciaComponent, dialogConfig).afterClosed().subscribe(resp=>{
  //  console.log(resp,'cierra popup');
  this.cargando = false; 
   this.getListKardex();

     });
   }  
   AddDetallePrecioVenta(orderItemIndex, id:number) {   
    //  console.log(id,'detalle');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.data = {orderItemIndex,id }; 
     this.dialog.open(DetalleprecioventaComponent, dialogConfig).afterClosed().subscribe(resp=>{
  //  console.log(resp,'cierra popup');
   this.getListKardex();
     });
   
    }  

    AddVerMovimientos( id:number) {   
      //  console.log(id,'detalle');
   this.router.navigate(['kardex/movimientoproductos/'+id]);
    //   this.router.navigate(['kardex/ListarPrueba/'+id]);
      }  

  /*openForEdit(SalidaID: number) {
 
   this.router.navigate(['kardex/salidaProducto/'+SalidaID]);
 } */
   
   }
 
  