import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataOrdenVenta } from 'src/app/models/ordenVenta';
import { NgForm } from '@angular/forms';
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import { AddempleadodeliveryComponent } from '../../empleadodelivery/addempleadodelivery/addempleadodelivery.component';
import { MatPaginator } from '@angular/material/paginator';
import { MantenimientosService } from '../../../services/mantenimientos/mantenimientos.service';
import { DataEmpleado } from '../../../models/empleado';
import { DataEstadoFlujo } from '../../../models/estadoflujo';
import * as moment from 'moment';
@Component({
  selector: 'app-listarordenventapendiente',
  templateUrl: './listarordenventapendiente.component.html',
  styleUrls: ['./listarordenventapendiente.component.css']
})
export class ListarordenventapendienteComponent implements OnInit {

  ordenes:any[]=[];
  public formData: any;
  cargando = true; 
  loading = false; 
  isButtonVisible:boolean=true;
  empleados: DataEmpleado[];
  estadoflujos: DataEstadoFlujo[] = [];
  displayedColumns: string[] = ['Nro Orden','Cliente','Empleado','Fecha Entrega','Pago Parcial','Total Orden','Estado','delivery'];
  dataSource = new MatTableDataSource<DataOrdenVenta>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  sort:any;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  constructor
  (private ventaService: VentaService,private mantenimientosService: MantenimientosService, private router:Router,  private toastr: ToastrService,  private dialog: MatDialog ) { }


  ngOnInit(): void {
    this.resetForm();
    // this.getOrden();
    this.mantenimientosService.getEmpleado().subscribe(resp => {
   
      this.empleados = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario === 2)
      .map(empleados=>{ 
        empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado,'- ',empleados.dni_empleado))
        return empleados;
      });
    });
    this.mantenimientosService.getEstadoFlujo().subscribe((resp) => {
       
       this.estadoflujos =  (resp as DataEstadoFlujo[]).filter(valor=>valor.id == 1 || valor.id == 4)
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
 

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
     
      idEmpleado: null,
      finicio: null,
      ffin: null,
      estadoFlujo:null
    };
}
  openForEdit(OrdenId: number) {
    // console.log(CotizacionId,'editar');
       this.router.navigate(['venta/editarordenventa/'+OrdenId]);
    }

    
    openDelivery(id:number) {   
      // console.log(id,'detalle');
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "55%";
      dialogConfig.data = {id}; 
       this.dialog.open(AddempleadodeliveryComponent, dialogConfig).afterClosed().subscribe(resp=>{
    //  console.log(resp,'cierra popup');
      // this.getOrden();
      const url= 'orden-venta-pendientes?'+'idEmpleado='+''+
      '&finicio='+''+
      '&ffin='+''+
      '&estadoFlujo='+''; 
      this.ventaService.getPreDelivery(url).subscribe(
        resp => { 
         
          if( resp[0] == null   ){
         
                 this.ordenes = [];
                 this.cargando = true;
            this.loading = false;  
              }else{
                this.dataSource.data = resp as DataOrdenVenta[]; 
                this.ordenes = resp;  
                this.loading = false;  
                this.cargando = false;  
              }  
   
        }); 
       });
     
      }  
      onSubmit(form: NgForm) { 
       
      this.loading = true;  
          let fechaParseada: any;
          fechaParseada = moment(form.value.finicio).format('YYYY-MM-DD');
          form.value.finicio = fechaParseada;
          let fechaParseada2: any;
          fechaParseada2 = moment(form.value.ffin).format('YYYY-MM-DD');
          form.value.ffin = fechaParseada2;

        form.value.idEmpleado ==null ? form.value.idEmpleado='' : form.value.idEmpleado;
        form.value.finicio === 'Invalid date' ? form.value.finicio='' : form.value.finicio;
        form.value.ffin === 'Invalid date' ? form.value.ffin='' : form.value.ffin;
        form.value.estadoFlujo ==null ? form.value.estadoFlujo='' : form.value.estadoFlujo;
          const url= 'orden-venta-pendientes?'+'idEmpleado='+form.value.idEmpleado+
                    '&finicio='+form.value.finicio+
                    '&ffin='+form.value.ffin+
                    '&estadoFlujo='+form.value.estadoFlujo; 
 
        this.ventaService.getPreDelivery(url).subscribe(
          resp => { 
            if( resp[0] == null   ){
           
                   this.ordenes = [];
                   this.cargando = true;
              this.loading = false;  
                }else{
                  this.dataSource.data = resp as DataOrdenVenta[]; 
                  this.ordenes = resp;  
                  this.loading = false;  
                  this.cargando = false;  
                }  
     
          });      
      }
    
}
