import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataOrdenVenta } from 'src/app/models/ordenVenta';
 
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import { AddempleadodeliveryComponent } from '../../empleadodelivery/addempleadodelivery/addempleadodelivery.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listarordenventapendiente',
  templateUrl: './listarordenventapendiente.component.html',
  styleUrls: ['./listarordenventapendiente.component.css']
})
export class ListarordenventapendienteComponent implements OnInit {

  ordenes:any[]=[];
  cargando = true; 
  isButtonVisible:boolean=true;
  displayedColumns: string[] = ['Nro Orden','Cliente','Empleado','Fecha Entrega','Pago Parcial','Total Orden','Estado','delivery'];
  dataSource = new MatTableDataSource<DataOrdenVenta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*
  sort:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;*/
  constructor
  (private ventaService: VentaService, private router:Router,  private toastr: ToastrService,  private dialog: MatDialog ) { }


  ngOnInit(): void {
    this.getOrden();
  }
 /* ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }*/
  getOrden(){

    this.ventaService.getOrdenVentaPendiente()
   .subscribe(resp => {
     this.dataSource.data = resp as DataOrdenVenta[]; 
       this.ordenes = resp;  
      this.ventaService.detalleDelivery = resp;
      this.cargando = false; 

       if (resp[0].idEstadoFlujo ==  4 ) {
        this.isButtonVisible=false;
       } else {
        this.isButtonVisible=true;
       } 
 
  });
  } 
  openForEdit(OrdenId: number) {
    // console.log(CotizacionId,'editar');
       this.router.navigate(['venta/editarordenventa/'+OrdenId]);
    }

    
    openDelivery(orderItemIndex,id:number) {   
      // console.log(id,'detalle');
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "55%";
      dialogConfig.data = {orderItemIndex,id}; 
       this.dialog.open(AddempleadodeliveryComponent, dialogConfig).afterClosed().subscribe(resp=>{
    //  console.log(resp,'cierra popup');
      this.getOrden();
       });
     
      }  
  
}
