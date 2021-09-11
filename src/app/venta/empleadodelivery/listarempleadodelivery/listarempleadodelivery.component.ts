import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatEmpleadoDelivery } from 'src/app/models/empleadodelivery';
import Swal from 'sweetalert2';
 
import { VentaService } from 'src/app/services/venta/venta.service';
import { EditarempleadodeliveryComponent } from '../editarempleadodelivery/editarempleadodelivery.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listarempleadodelivery',
  templateUrl: './listarempleadodelivery.component.html',
  styleUrls: ['./listarempleadodelivery.component.css']
})
export class ListarempleadodeliveryComponent implements OnInit {
  ordenes:any[]=[];
  cargando = true; 
  displayedColumns: string[] = ['Nro Despacho','Nro Orden Venta','Empleado','Fecha Envio','Detalle Envio','Estado' ,'Anular'];
  dataSource = new MatTableDataSource<DatEmpleadoDelivery>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor
  (private ventaService: VentaService, private router:Router,  private toastr: ToastrService,  private dialog: MatDialog ) { }


  ngOnInit(): void {
    this.getOrden();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getOrden(){ 
    this.ventaService.getListarPreDelivery()
   .subscribe(resp => {
     this.dataSource.data = resp as DatEmpleadoDelivery[]; 
       this.ordenes = resp;  
      this.cargando = false;
        // console.log(resp);
  });
  } 


    openEditDelivery(orderItemIndex,id:number) {    
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "55%";
      dialogConfig.data = {orderItemIndex,id}; 
       this.dialog.open(EditarempleadodeliveryComponent, dialogConfig).afterClosed().subscribe(resp=>{
    //  console.log(resp,'cierra popup');
     this.getOrden();
       });
     
      }  

      EstadoAnularDelivery(delivery: DatEmpleadoDelivery, i: number) {
        // console.log(cotizaciones,'1');
        // console.log(i,'index');
          const bodyform = {id:delivery.id, valorEstado: '3'}
         console.log(delivery);
          Swal.fire({
            title: 'Esta seguro?',
           text: `Que desea Anular  el depacho ${delivery.codigo_empdel_num_venta}`,
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
          }).then((resp) => {
            if (resp.value) {
              
              this.ordenes.splice(i, 1);
              // console.log( this.ordenes.splice(i, 1),'slice');
              this.ventaService.EstadoAnularDelivery(delivery.id,bodyform).subscribe(
                resp => {
                  this.toastr.error('Depacho Anulada');
                   this.ngOnInit();
         
              }
        
              );
            }
          });
        } 
}
