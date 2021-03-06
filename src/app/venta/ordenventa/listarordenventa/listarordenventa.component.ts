import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataOrdenVenta } from 'src/app/models/ordenVenta';
 
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import { AddempleadodeliveryComponent } from '../../empleadodelivery/addempleadodelivery/addempleadodelivery.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listarordenventa',
  templateUrl: './listarordenventa.component.html',
  styleUrls: ['./listarordenventa.component.css']
})
export class ListarordenventaComponent implements OnInit {
  ordenes:any[]=[];
  cargando = true; 
  isButtonVisible:boolean=true;
  displayedColumns: string[] = ['Nro Orden','Nro Cotizacion','Cliente','Empleado','Fecha Entrega','Pago Parcial','Total Orden','Estado','details','devolucion','Anular'];
  dataSource = new MatTableDataSource<DataOrdenVenta>();
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

    this.ventaService.getOrdenVenta()
   .subscribe(resp => {
     this.dataSource.data = resp as DataOrdenVenta[]; 
       this.ordenes = resp; 
       this.ventaService.detalleDelivery = resp;
    //  console.log(this.ventaService.detalleDelivery , 'detalle');
      //  this.ventaService.detalleCotizacion =  resp.detalleCotizacion.detalleCotizacion;
      //  console.log(this.ventaService.detalleCotizacion,'DETALLE');
      this.cargando = false;
      //  console.log(resp[0].idEstadoFlujo );
    /*  if (resp[0].idEstadoFlujo ==  2 || resp[0].idEstadoFlujo ==  3 ) {
        this.isButtonVisible=false;
       } else { 
        this.isButtonVisible=true;
       } */
  });
  } 
  openForEdit(OrdenId: number) {
     console.log(OrdenId,'editar');
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
    //  this.getListKardex();
       });
     
      }  

     
EstadoOrdenAnular(ordenes: DataOrdenVenta, i: number) { 
  const bodyform = {id:ordenes.id, estadoOrden: '3'}
  
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Anular ${ordenes.codigo_orden_num_venta}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      
      this.ordenes.splice(i, 1);
      this.ventaService.EstadoOrdenVentaAnular(ordenes.id,bodyform).subscribe(
        resp => { 
          // console.log(resp);
          this.toastr.error('Orden Venta Anulada');
          this.ngOnInit();
    
      }

      );
    }
  });
} 
EstadoDevolucion(ordenes: DataOrdenVenta, i: number) { 
  const bodyform = {id:ordenes.id, estadoOrden: '5'}
  
  Swal.fire({
    title: 'Esta seguro?',
    text: `Que desea Realizar la Devoluci??n ${ordenes.codigo_orden_num_venta}`,
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true,
  }).then((resp) => {
    if (resp.value) {
      
      this.ordenes.splice(i, 1);
      this.ventaService.EstadoDevolucionVenta(ordenes.id,bodyform).subscribe(
        resp => { 
          // console.log(resp);
          this.toastr.success('Se realizo la Devoluci??n');
          this.ngOnInit();
    
      }

      );
    }
  });
} 
}
