import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import {MatTableDataSource} from '@angular/material/table';
import { DetallesalidaproductoComponent } from '../../salidaproductos/detallesalidaproducto/detallesalidaproducto.component';
import { DetalleprecioventaComponent } from '../detalleprecioventa/detalleprecioventa.component';
import { DataKardex } from '../../../models/kardex';
 
@Component({
  selector: 'app-listarkardex',
  templateUrl: './listarkardex.component.html',
  styleUrls: ['./listarkardex.component.css']
})
export class ListarkardexComponent implements OnInit {
  ListIngresosCerrados:DataKardex []= [];
  cargando = true; 
 
  displayedColumns: string[] = ['Codigo Producto', 'Producto', 'Cantidad por O/C', 'Cantidad por sin O/C', 'Cantidad Total','Precio Unidad O/C','Precio Unidad sin O/C','Precio Promedio','Salida','Venta'];
   dataSource = new MatTableDataSource<DataKardex>();
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
  
   constructor
   (private kardexService: KardexService , private router:Router,private toastr: ToastrService ,  private dialog: MatDialog) { }
 
 
   ngOnInit(): void {
     this.getListKardex();
   }
 
   getListKardex(){ 
     this.kardexService.getListKardex()
    .subscribe(resp => {
     this.dataSource.data = resp as DataKardex[]; 
 
       this.kardexService.detalleSalida = resp;
       this.cargando = false;
       // this.cargando = false;
         console.log(resp,'listado');
   });
  }
 
  AddDetalleSalida(orderItemIndex, id:number) {   
   //  console.log(id,'detalle');
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.disableClose = true;
   dialogConfig.width = "55%";
   dialogConfig.data = {orderItemIndex,id }; 
    this.dialog.open(DetallesalidaproductoComponent, dialogConfig).afterClosed().subscribe(resp=>{
 //  console.log(resp,'cierra popup');
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
  /*openForEdit(SalidaID: number) {
 
   this.router.navigate(['kardex/salidaProducto/'+SalidaID]);
 } */
   
   }
 
  