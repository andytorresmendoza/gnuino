import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from '../../../services/kardex/kardex.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataSalidaProductos } from 'src/app/models/salidaproductoscerrados';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import {MatTableDataSource} from '@angular/material/table';
import { DetallesalidaproductoComponent } from '../detallesalidaproducto/detallesalidaproducto.component';
@Component({
  selector: 'app-listarsalidaproducto',
  templateUrl: './listarsalidaproducto.component.html',
  styleUrls: ['./listarsalidaproducto.component.css']
})
export class ListarsalidaproductoComponent implements OnInit {
 ListIngresosCerrados:DataSalidaProductos []= [];
 cargando = true; 

 displayedColumns: string[] = ['Codigo Producto', 'Producto', 'Cantidad por O/C', 'Cantidad por sin O/C', 'Cantidad Total','Precio Unidad O/C','Precio Unidad sin O/C','Precio Promedio','Salida'];
  dataSource = new MatTableDataSource<DataSalidaProductos>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  constructor
  (private kardexService: KardexService , private router:Router,private toastr: ToastrService ,  private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getListIngresosCerrados();
  }

  getListIngresosCerrados(){ 
    this.kardexService.getListKardex()
   .subscribe(resp => {
    this.dataSource.data = resp as DataSalidaProductos[]; 
      // this.ListIngresosCerrados = resp; 
      this.kardexService.detalleSalida = resp;
      this.cargando = false;
      // this.cargando = false;
        // console.log(resp,'listado');
  });
 }

 AddDetalleSalida(orderItemIndex, id:number) {   
  //  console.log(id,'detalle');
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "55%";
  dialogConfig.data = {orderItemIndex,id };
  // console.log( orderItemIndex,id);
  // afterClosed().subscribe; es para cuando se cierre el poput actualize el rpecio
   this.dialog.open(DetallesalidaproductoComponent, dialogConfig).afterClosed().subscribe(resp=>{
//  console.log(resp,'cierra popup');
 this.getListIngresosCerrados();
   });
 
  } 





 openForEdit(SalidaID: number) {

  this.router.navigate(['kardex/salidaProducto/'+SalidaID]);
}

 
  
  }

 