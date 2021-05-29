import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientosComponent } from './mantenimientos.component';
 import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
 import { HomeComponent } from './home/home.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{AutocompleteLibModule} from 'angular-ng-autocomplete'

//nuevos
 import { MatDatepickerModule} from '@angular/material/datepicker';
   import { MatNativeDateModule } from '@angular/material/core';
 
// MANTENIMIENTOS
import { ListarNrocuentaComponent } from './nrocuenta/listar-nrocuenta/listar-nrocuenta.component';
import { EditarNrocuentaComponent } from './nrocuenta/editar-nrocuenta/editar-nrocuenta.component'; 
import { AddNrocuentaComponent } from './nrocuenta/add-nrocuenta/add-nrocuenta.component';
import { AddCategoriaComponent } from './categoria/add-categoria/add-categoria.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ListarModeloComponent } from './modelo/listar-modelo/listar-modelo.component';
import { EditarModeloComponent } from './modelo/editar-modelo/editar-modelo.component';
import { AddModeloComponent } from './modelo/add-modelo/add-modelo.component';
import { ListarPerfilusuarioComponent } from './perfilusuario/listar-perfilusuario/listar-perfilusuario.component';
import { AddPerfilusuarioComponent } from './perfilusuario/add-perfilusuario/add-perfilusuario.component';
import { EditarPerfilusuarioComponent } from './perfilusuario/editar-perfilusuario/editar-perfilusuario.component';
import { ListarTipodocumentoComponent } from './tipodocumento/listar-tipodocumento/listar-tipodocumento.component';
import { EditarTipodocumentoComponent } from './tipodocumento/editar-tipodocumento/editar-tipodocumento.component';
import { AddTipodocumentoComponent } from './tipodocumento/add-tipodocumento/add-tipodocumento.component';
import { ListarEstadoflujoComponent } from './estadoflujo/listar-estadoflujo/listar-estadoflujo.component';
import { EditarEstadoflujoComponent } from './estadoflujo/editar-estadoflujo/editar-estadoflujo.component';
import { AddEstadoflujoComponent } from './estadoflujo/add-estadoflujo/add-estadoflujo.component';
import { ListarTipodevolucionComponent } from './tipodevolucion/listar-tipodevolucion/listar-tipodevolucion.component';
import { EditarTipodevolucionComponent } from './tipodevolucion/editar-tipodevolucion/editar-tipodevolucion.component';
import { AddTipodevolucionComponent } from './tipodevolucion/add-tipodevolucion/add-tipodevolucion.component';
import { ListarTipoingresoComponent } from './tipoingreso/listar-tipoingreso/listar-tipoingreso.component';
import { EditarTipoingresoComponent } from './tipoingreso/editar-tipoingreso/editar-tipoingreso.component';
import { AddTipoingresoComponent } from './tipoingreso/add-tipoingreso/add-tipoingreso.component';
import { ListarTiposalidaComponent } from './tiposalida/listar-tiposalida/listar-tiposalida.component';
import { EditarTiposalidaComponent } from './tiposalida/editar-tiposalida/editar-tiposalida.component';
import { AddTiposalidaComponent } from './tiposalida/add-tiposalida/add-tiposalida.component';
import { ListarTipopagoComponent } from './tipopago/listar-tipopago/listar-tipopago.component';
import { EditarTipopagoComponent } from './tipopago/editar-tipopago/editar-tipopago.component';
import { AddTipopagoComponent } from './tipopago/add-tipopago/add-tipopago.component';
import { AddUnidadmedidaComponent } from './unidadmedida/add-unidadmedida/add-unidadmedida.component';
import { ListarUnidadmedidaComponent } from './unidadmedida/listar-unidadmedida/listar-unidadmedida.component';
import { EditarUnidadmedidaComponent } from './unidadmedida/editar-unidadmedida/editar-unidadmedida.component';
import { ListarbancoComponent } from './banco/listarbanco/listarbanco.component';
import { EditarbancoComponent } from './banco/editarbanco/editarbanco.component';
import { AddbancoComponent } from './banco/addbanco/addbanco.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { AddProveedorComponent } from './proveedor/add-proveedor/add-proveedor.component';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { AuthInterceptorService } from '../services/token/auth-interceptor.service';
import { ListaralmacenComponent } from './tipoalmacen/listaralmacen/listaralmacen.component';
import { EditaralmacenComponent } from './tipoalmacen/editaralmacen/editaralmacen.component';
import { AddalmacenComponent } from './tipoalmacen/addalmacen/addalmacen.component';
import { ListarusuarioComponent } from './usuario/listarusuario/listarusuario.component';
import { AddusuarioComponent } from './usuario/addusuario/addusuario.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component'; 
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
 

//material
import {MatInputModule} from '@angular/material/input';
   import { MatTableModule} from '@angular/material/table';
   import {MatIconModule} from '@angular/material/icon';
   import {MatButtonModule} from '@angular/material/button';
   import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    HomeComponent,
    MantenimientosComponent,  
    ListarNrocuentaComponent,
    EditarNrocuentaComponent, 
    AddNrocuentaComponent, AddCategoriaComponent, ListarCategoriaComponent, EditarCategoriaComponent, ListarModeloComponent, EditarModeloComponent, AddModeloComponent, ListarPerfilusuarioComponent, AddPerfilusuarioComponent, EditarPerfilusuarioComponent, ListarTipodocumentoComponent, EditarTipodocumentoComponent, AddTipodocumentoComponent, ListarEstadoflujoComponent, EditarEstadoflujoComponent, AddEstadoflujoComponent, ListarTipodevolucionComponent, EditarTipodevolucionComponent, AddTipodevolucionComponent, ListarTipoingresoComponent, EditarTipoingresoComponent, AddTipoingresoComponent, ListarTiposalidaComponent, EditarTiposalidaComponent, AddTiposalidaComponent, ListarTipopagoComponent, EditarTipopagoComponent, AddTipopagoComponent, AddUnidadmedidaComponent, ListarUnidadmedidaComponent, EditarUnidadmedidaComponent, ListarbancoComponent, EditarbancoComponent, AddbancoComponent, ListarProductoComponent, EditarProductoComponent, AddProductoComponent, ListarProveedorComponent, EditarProveedorComponent, AddProveedorComponent, ListarEmpleadoComponent, EditarEmpleadoComponent, AddEmpleadoComponent, ListaralmacenComponent, EditaralmacenComponent, AddalmacenComponent, ListarusuarioComponent, AddusuarioComponent, AddClienteComponent, ListarClienteComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
  MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    NgSelectModule
   
  ],
  exports:[
    HomeComponent,
    MantenimientosComponent, 
  ], 
})
export class MantenimientosModule { }
