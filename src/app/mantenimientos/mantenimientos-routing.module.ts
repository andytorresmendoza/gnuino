import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientosComponent } from './mantenimientos.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { ListarNrocuentaComponent } from './nrocuenta/listar-nrocuenta/listar-nrocuenta.component';
import { AddNrocuentaComponent } from './nrocuenta/add-nrocuenta/add-nrocuenta.component';
import { EditarNrocuentaComponent } from './nrocuenta/editar-nrocuenta/editar-nrocuenta.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { AddCategoriaComponent } from './categoria/add-categoria/add-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ListarModeloComponent } from './modelo/listar-modelo/listar-modelo.component';
import { AddModeloComponent } from './modelo/add-modelo/add-modelo.component';
import { EditarModeloComponent } from './modelo/editar-modelo/editar-modelo.component';
import { ListarPerfilusuarioComponent } from './perfilusuario/listar-perfilusuario/listar-perfilusuario.component';
import { AddPerfilusuarioComponent } from './perfilusuario/add-perfilusuario/add-perfilusuario.component';
import { EditarPerfilusuarioComponent } from './perfilusuario/editar-perfilusuario/editar-perfilusuario.component';
import { ListarTipodocumentoComponent } from './tipodocumento/listar-tipodocumento/listar-tipodocumento.component';
import { AddTipodocumentoComponent } from './tipodocumento/add-tipodocumento/add-tipodocumento.component';
import { EditarTipodocumentoComponent } from './tipodocumento/editar-tipodocumento/editar-tipodocumento.component';
import { ListarEstadoflujoComponent } from './estadoflujo/listar-estadoflujo/listar-estadoflujo.component';
import { AddEstadoflujoComponent } from './estadoflujo/add-estadoflujo/add-estadoflujo.component';
import { EditarEstadoflujoComponent } from './estadoflujo/editar-estadoflujo/editar-estadoflujo.component';
import { ListarTipodevolucionComponent } from './tipodevolucion/listar-tipodevolucion/listar-tipodevolucion.component';
import { AddTipodevolucionComponent } from './tipodevolucion/add-tipodevolucion/add-tipodevolucion.component';
import { EditarTipodevolucionComponent } from './tipodevolucion/editar-tipodevolucion/editar-tipodevolucion.component';
import { AddTipoingresoComponent } from './tipoingreso/add-tipoingreso/add-tipoingreso.component';
import { EditarTipoingresoComponent } from './tipoingreso/editar-tipoingreso/editar-tipoingreso.component';
import { ListarTipoingresoComponent } from './tipoingreso/listar-tipoingreso/listar-tipoingreso.component';
import { ListarTiposalidaComponent } from './tiposalida/listar-tiposalida/listar-tiposalida.component';
import { AddTiposalidaComponent } from './tiposalida/add-tiposalida/add-tiposalida.component';
import { EditarTiposalidaComponent } from './tiposalida/editar-tiposalida/editar-tiposalida.component';
import { ListarTipopagoComponent } from './tipopago/listar-tipopago/listar-tipopago.component';
import { AddTipopagoComponent } from './tipopago/add-tipopago/add-tipopago.component';
import { EditarTipopagoComponent } from './tipopago/editar-tipopago/editar-tipopago.component';
import { ListarUnidadmedidaComponent } from './unidadmedida/listar-unidadmedida/listar-unidadmedida.component';
import { AddUnidadmedidaComponent } from './unidadmedida/add-unidadmedida/add-unidadmedida.component';
import { EditarUnidadmedidaComponent } from './unidadmedida/editar-unidadmedida/editar-unidadmedida.component';
import { ListarbancoComponent } from './banco/listarbanco/listarbanco.component';
import { AddbancoComponent } from './banco/addbanco/addbanco.component';
import { EditarbancoComponent } from './banco/editarbanco/editarbanco.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor.component';
import { AddProveedorComponent } from './proveedor/add-proveedor/add-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { ListaralmacenComponent } from './tipoalmacen/listaralmacen/listaralmacen.component';
import { AddalmacenComponent } from './tipoalmacen/addalmacen/addalmacen.component';
import { EditaralmacenComponent } from './tipoalmacen/editaralmacen/editaralmacen.component';
 
const routes: Routes = [
 
  {path:'mantenimientos', component:MantenimientosComponent,
   children:[
      // {path:'',component:HomeComponent},     
     {path:'listarnrocuenta', component: ListarNrocuentaComponent},
     {path:'addnrocuenta', component: AddNrocuentaComponent},
     {path:'editnrocuenta', component: EditarNrocuentaComponent},
     {path:'listarcategoria', component: ListarCategoriaComponent},
     {path:'addcategoria', component: AddCategoriaComponent},
     {path:'editcategoria', component: EditarCategoriaComponent},
     {path:'listarmodelo', component: ListarModeloComponent},
     {path:'addmodelo', component: AddModeloComponent},
     {path:'editmodelo', component: EditarModeloComponent},
     {path:'listarperfilusuario', component: ListarPerfilusuarioComponent},
     {path:'addperfilusuario', component: AddPerfilusuarioComponent},
     {path:'editperfilusuario', component: EditarPerfilusuarioComponent},
     {path:'listartipodocumento', component: ListarTipodocumentoComponent},
     {path:'addtipodocumento', component: AddTipodocumentoComponent},
     {path:'edittipodocumento', component: EditarTipodocumentoComponent},
     {path:'listarestadoflujo', component: ListarEstadoflujoComponent},
     {path:'addestadoflujo', component: AddEstadoflujoComponent},
     {path:'editestadoflujo', component: EditarEstadoflujoComponent},
     {path:'listartipodevolucion', component: ListarTipodevolucionComponent},
     {path:'addtipodevolucion', component: AddTipodevolucionComponent},
     {path:'edittipodevolucion', component: EditarTipodevolucionComponent},
     {path:'listartipoingreso', component: ListarTipoingresoComponent},
     {path:'addtipoingreso', component: AddTipoingresoComponent},
     {path:'edittipoingreso', component: EditarTipoingresoComponent},
     {path:'listartiposalida', component: ListarTiposalidaComponent},
     {path:'addtiposalida', component: AddTiposalidaComponent},
     {path:'edittiposalida', component: EditarTiposalidaComponent},
     {path:'listartipopago', component: ListarTipopagoComponent},
     {path:'addtipopago', component: AddTipopagoComponent},
     {path:'edittipopago', component: EditarTipopagoComponent},
     {path:'listarunidadmedida', component: ListarUnidadmedidaComponent},
     {path:'addunidadmedida', component: AddUnidadmedidaComponent},
     {path:'editunidadmedida', component: EditarUnidadmedidaComponent},
     {path:'listarbanco', component: ListarbancoComponent},
     {path:'addbanco', component: AddbancoComponent},
     {path:'editbanco', component: EditarbancoComponent},
     {path:'listarproducto', component: ListarProductoComponent},
     {path:'addproducto', component: AddProductoComponent},
     {path:'editproducto', component: EditarProductoComponent},
     {path:'listarproveedor', component: ListarProveedorComponent},
     {path:'addproveedor', component: AddProveedorComponent},
     {path:'editproveedor', component: EditarProveedorComponent},
     {path:'listarempleado', component: ListarEmpleadoComponent},
     {path:'addempleado', component: AddEmpleadoComponent},
     {path:'editempleado', component: EditarEmpleadoComponent},
     {path:'listaralmacen', component: ListaralmacenComponent},
     {path:'addalmacen', component: AddalmacenComponent},
     {path:'editalmacen', component: EditaralmacenComponent},
  ]
 },
];

@NgModule({
  imports:[ RouterModule.forChild(routes) ],
  exports:[ RouterModule ]
})
export class MantenimientosRoutingModule { }
