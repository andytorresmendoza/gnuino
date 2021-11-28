import { Component, OnInit ,ViewChild} from '@angular/core';
import jwt_decode from "jwt-decode";
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MantenimientosService } from 'src/app/services/mantenimientos/mantenimientos.service';
import { DataEmpleado } from '../../../models/empleado';
import { DataEstadoFlujo } from '../../../models/estadoflujo';
import { DataCliente } from '../../../models/cliente';
import { DataDepartamento, DataProvincia, DataDistrito } from '../../../models/countries';
import * as moment from 'moment';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog'; 
import { VistapreviadeliverytodosComponent } from '../vistapreviadeliverytodos/vistapreviadeliverytodos.component';
@Component({
  selector: 'app-listardeliverytodos',
  templateUrl: './listardeliverytodos.component.html',
  styleUrls: ['./listardeliverytodos.component.css']
})
export class ListardeliverytodosComponent implements OnInit {
  private decoded:any; 
  private iddelivery:any;
  public listaDelivery:any[]=[];
  public formData: any;
  empleados: DataEmpleado[];
  empleados2: DataEmpleado[];
  clientes: DataCliente[] = [];
  cargando = true; 
  loading = false; 
  estadoflujos: DataEstadoFlujo[] = [];
  public departamentos: DataDepartamento[] = [];
  public provincias: DataProvincia[] = [];
  public distritos: DataDistrito[] = [];
  displayedColumns: string[] = ['Vista','Nro','Tipo','Cliente','Distrito','Empleado','fecha','Total','Estado','Venta'];
  dataSource = new MatTableDataSource<any>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sort:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ventaService: VentaService, private router:Router,private mantenimientosService: MantenimientosService,  private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.resetForm();
  /*  this.ventaService.getDeliveryTodos()
    .subscribe(resp => {
      // this.dataSource.data = resp; 
        // this.listaDelivery = resp; 
        // this.ventaService.detalleCotizacion = resp; 
        this.cargando = false; 
        // console.log(resp);
   });*/
   this.getDepartamento();
   this.getProvinciaAll();
   this.getDistritoAll();
   this.mantenimientosService.getEmpleado().subscribe(resp => {
   
    // this.empleados = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario === 2)
    this.empleados = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario === 4)
    .map(empleados=>{ 
      empleados.nombre_empleado =   (empleados.nombre_empleado.concat(', ', empleados.apellidos_pat_empleado,' ', empleados.apellidos_mat_empleado,'- ',empleados.dni_empleado))
      return empleados;
    });
  });

  this.mantenimientosService.getEmpleado().subscribe(resp => {
   
    // this.empleados = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario === 2)
    this.empleados2 = (resp as DataEmpleado[]).filter(valor=>valor.idPerfilUsuario === 2)
    .map(empleados2=>{ 
      empleados2.nombre_empleado =   (empleados2.nombre_empleado.concat(', ', empleados2.apellidos_pat_empleado,' ', empleados2.apellidos_mat_empleado,'- ',empleados2.dni_empleado))
      return empleados2;
    });
  });
  this.mantenimientosService.getEstadoFlujo().subscribe((resp) => {
       
    this.estadoflujos =  (resp as DataEstadoFlujo[]).filter(valor=>valor.id == 1 || valor.id == 2)
 });
 this.mantenimientosService.getCliente().subscribe(resp => { 
 
   this.clientes = (resp as DataCliente[]).map(clientes=>{ 
    clientes.nombre_cliente =   (clientes.nombre_cliente.concat(', ', clientes.apellidos_pat_cliente,' ',clientes.apellidos_mat_cliente,'- ',clientes.dni_cliente))
     return clientes;
   }); 
 });
  }
  vistaPrevia( id) {
    // console.log(id,'vista');
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.disableClose = true;
   dialogConfig.width = "65%";
   dialogConfig.data = { id };
      this.dialog.open(VistapreviadeliverytodosComponent, dialogConfig).afterClosed().subscribe(resp=>{
  
    });
  
   }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getDepartamento() {
    this.mantenimientosService.getDepartamento().subscribe((response) => {
      this.departamentos = response;
      this.cargando = false;
    });
  }

  getProvinciaAll() {
    this.mantenimientosService.getProvinciaAll().subscribe((response) => {
      this.provincias = response;
      this.cargando = false;
    });
  }

  getDistritoAll() {
    this.mantenimientosService.getDistritoAll().subscribe((response) => {
      this.distritos = response;
      this.cargando = false;
    });
  }
  onSelectDepartamento($event: any): void {
    this.mantenimientosService.getProvincia($event).subscribe((response) => {
      //  console.log(response,'response');
      this.provincias = response;
    });
  }
  onSelectProvincia($event: any): void {
    this.mantenimientosService.getDistrito($event).subscribe((response) => {
      this.distritos = response;
      //  console.log(response);
    });
  }
  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.formData = {
    
     
      idEmpleado: null,
      finicio: null,
      ffin: null,
      estadoFlujo:null,
      idCliente:null,
      idDepartamento:null,
      idProvincia:null,
      idDistrito:null,
      idEmpleado2:null

    };
}
  openDelivery(id: number) {
    // console.log(id,'editar');
    this.router.navigate(['venta/adddeliverytodos/'+id]);
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
        form.value.idCliente ==null ? form.value.idCliente='' : form.value.idCliente;
        form.value.idDepartamento ==null ? form.value.idDepartamento='' : form.value.idDepartamento;
        form.value.idProvincia ==null ? form.value.idProvincia='' : form.value.idProvincia;
        form.value.idDistrito ==null ? form.value.idDistrito='' : form.value.idDistrito;
        form.value.idEmpleado2 ==null ? form.value.idEmpleado2='' : form.value.idEmpleado2;

          const url= 'pre-delivery/empleados?'+'idEmpleado='+form.value.idEmpleado+
                    '&finicio='+form.value.finicio+
                    '&ffin='+form.value.ffin+
                    '&estadoFlujo='+form.value.estadoFlujo+
                    '&idCliente='+form.value.idCliente+
                    '&idDepartamento='+form.value.idDepartamento+
                    '&idProvincia='+form.value.idProvincia+
                    '&idDistrito='+form.value.idDistrito+
                    '&idEmpleado2='+form.value.idEmpleado2;

                    this.ventaService.getDeliTodos(url).subscribe(
                      resp => { 
                       console.log(resp);
                        if( resp[0] == null   ){
                      //  console.log(resp);
                               this.listaDelivery = [];
                               this.cargando = true;
                          this.loading = false;  
                            }else{
                              this.dataSource.data = resp as any[]; 
                              this.listaDelivery = resp;  
                              this.loading = false;  
                              this.cargando = false;  
                            }   
                      });      
  }
}
