import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataOrdenVenta } from 'src/app/models/ordenVenta';
 
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import { AddempleadodeliveryComponent } from '../../empleadodelivery/addempleadodelivery/addempleadodelivery.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarordenventaanulada',
  templateUrl: './listarordenventaanulada.component.html',
  styleUrls: ['./listarordenventaanulada.component.css']
})
export class ListarordenventaanuladaComponent implements OnInit {

  ordenes:any[]=[];
  cargando = true; 
  isButtonVisible:boolean=true;
  displayedColumns: string[] = ['Nro Orden','Cliente','Empleado','Fecha Entrega','Pago Parcial','Total Orden','Estado','details'];
  dataSource = new MatTableDataSource<DataOrdenVenta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor
  (private ventaService: VentaService, private router:Router,  private toastr: ToastrService,  private dialog: MatDialog ) { }


  ngOnInit(): void {
    this.getOrden();
  }

  getOrden(){

    this.ventaService.getOrdenVentaAnulada()
   .subscribe(resp => {
     this.dataSource.data = (resp as any[]).filter(valor=>valor.idEstadoFlujo === 3)
      //  this.ordenes = resp; 
      // this.ordenes = (resp as any[]).filter(valor=>valor.idEstadoFlujo === 1)
      //  this.ventaService.detalleDelivery = resp;
      // console.log(resp);
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
    //  this.getListKardex();
       });
     
      }  


}
