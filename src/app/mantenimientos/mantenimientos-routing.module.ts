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
// import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor.component';
import { AddProveedorComponent } from './proveedor/add-proveedor/add-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { ListaralmacenComponent } from './tipoalmacen/listaralmacen/listaralmacen.component';
import { AddalmacenComponent } from './tipoalmacen/addalmacen/addalmacen.component';
import { EditaralmacenComponent } from './tipoalmacen/editaralmacen/editaralmacen.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ListarusuarioComponent } from './usuario/listarusuario/listarusuario.component';
import { AddusuarioComponent } from './usuario/addusuario/addusuario.component';
import { AuthGuard } from '../guards/auth.guard'; 
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { ListarPrecioVentaComponent } from './precioventa/listar-precio-venta/listar-precio-venta.component';
import { AddPrecioVentaComponent } from './precioventa/add-precio-venta/add-precio-venta.component';
import { ListarPrecioDeliveryComponent } from './preciodelivery/listar-precio-delivery/listar-precio-delivery.component';
import { AddPrecioDeliveryComponent } from './preciodelivery/add-precio-delivery/add-precio-delivery.component';
 
const routes: Routes = [
 
  {path:'mantenimientos', component:PagesComponent,
  canActivate:[AuthGuard],
   children:[
        {path:'',component:DashboardComponent},     
     {path:'listarnrocuenta', component: ListarNrocuentaComponent, data:{titulo:'Numero Cuenta'}},
     {path:'addnrocuenta', component: AddNrocuentaComponent, data:{titulo:'Numero Cuenta'}},
     {path:'editnrocuenta', component: EditarNrocuentaComponent, data:{titulo:'Numero Cuenta'}},
     {path:'listarcategoria', component: ListarCategoriaComponent, data:{titulo:'Categoría'}},
     {path:'addcategoria', component: AddCategoriaComponent, data:{titulo:'Categoría'}},
     {path:'editcategoria', component: EditarCategoriaComponent, data:{titulo:'Categoría'}},
     {path:'listarmodelo', component: ListarModeloComponent, data:{titulo:'Modelo'}},
     {path:'addmodelo', component: AddModeloComponent, data:{titulo:'Modelo'}},
     {path:'editmodelo', component: EditarModeloComponent,data:{titulo:'Modelo'}},
     {path:'listarperfilusuario', component: ListarPerfilusuarioComponent, data:{titulo:'Perfil Usuario'}},
     {path:'addperfilusuario', component: AddPerfilusuarioComponent, data:{titulo:'Perfil Usuario'}},
     {path:'editperfilusuario', component: EditarPerfilusuarioComponent, data:{titulo:'Perfil Usuario'}},
     {path:'listartipodocumento', component: ListarTipodocumentoComponent, data:{titulo:'Tipo Documento'}},
     {path:'addtipodocumento', component: AddTipodocumentoComponent, data:{titulo:'Tipo Documento'}},
     {path:'edittipodocumento', component: EditarTipodocumentoComponent, data:{titulo:'Tipo Documento'}},
     {path:'listarestadoflujo', component: ListarEstadoflujoComponent, data:{titulo:'Estado Flujo'}},
     {path:'addestadoflujo', component: AddEstadoflujoComponent, data:{titulo:'Estado Flujo'}},
     {path:'editestadoflujo', component: EditarEstadoflujoComponent, data:{titulo:'Estado Flujo'}},
     {path:'listartipodevolucion', component: ListarTipodevolucionComponent, data:{titulo:'Tipo Devolución'}},
     {path:'addtipodevolucion', component: AddTipodevolucionComponent, data:{titulo:'Tipo Devolución'}},
     {path:'edittipodevolucion', component: EditarTipodevolucionComponent, data:{titulo:'Tipo Devolución'}},
     {path:'listartipoingreso', component: ListarTipoingresoComponent, data:{titulo:'Tipo Ingreso'}},
     {path:'addtipoingreso', component: AddTipoingresoComponent, data:{titulo:'Tipo Ingreso'}},
     {path:'edittipoingreso', component: EditarTipoingresoComponent, data:{titulo:'Tipo Ingreso'}},
     {path:'listartiposalida', component: ListarTiposalidaComponent, data:{titulo:'Tipo Salida'}},
     {path:'addtiposalida', component: AddTiposalidaComponent, data:{titulo:'Tipo Salida'}},
     {path:'edittiposalida', component: EditarTiposalidaComponent, data:{titulo:'Tipo Salida'}},
     {path:'listartipopago', component: ListarTipopagoComponent, data:{titulo:'Tipo Pago'}},
     {path:'addtipopago', component: AddTipopagoComponent, data:{titulo:'Tipo Pago'}},
     {path:'edittipopago', component: EditarTipopagoComponent, data:{titulo:'Tipo Pago'}},
     {path:'listarunidadmedida', component: ListarUnidadmedidaComponent, data:{titulo:'Unidad Medida'}},
     {path:'addunidadmedida', component: AddUnidadmedidaComponent, data:{titulo:'Unidad Medida'}},
     {path:'editunidadmedida', component: EditarUnidadmedidaComponent, data:{titulo:'Unidad Medida'}},
     {path:'listarbanco', component: ListarbancoComponent, data:{titulo:'Banco'}},
     {path:'addbanco', component: AddbancoComponent, data:{titulo:'Banco'}},
     {path:'editbanco', component: EditarbancoComponent, data:{titulo:'Banco'}},
     {path:'listarproducto', component: ListarProductoComponent, data:{titulo:'Productos'}},
     {path:'addproducto/:id', component: AddProductoComponent, data:{titulo:'Productos'}},
    //  {path:'editproducto', component: EditarProductoComponent, data:{titulo:'Productos'}},
     {path:'listarproveedor', component: ListarProveedorComponent, data:{titulo:'Proveedor'}},
     {path:'addproveedor', component: AddProveedorComponent, data:{titulo:'Proveedora'}},
     {path:'editproveedor', component: EditarProveedorComponent, data:{titulo:'Proveedor'}},
     {path:'listarempleado', component: ListarEmpleadoComponent, data:{titulo:'Empleado'}},
     {path:'addempleado/:id', component: AddEmpleadoComponent, data:{titulo:'Empleado'}},
    // {path:'addempleado', component: AddEmpleadoComponent, data:{titulo:'Empleado'}},
     //{path:'editempleado', component: EditarEmpleadoComponent, data:{titulo:'Empleado'}},
     {path:'listaralmacen', component: ListaralmacenComponent, data:{titulo:'Almacén'}},
     {path:'addalmacen', component: AddalmacenComponent, data:{titulo:'Almacén'}},
     {path:'editalmacen', component: EditaralmacenComponent, data:{titulo:'Almacén'}},
     {path:'listarusuarios', component: ListarusuarioComponent, data:{titulo:'Usuarios'}},
     {path:'addusuario/:id', component: AddusuarioComponent, data:{titulo:'Usuarios'}},
    //  {path:'editcliente', component: EditarClienteComponent, data:{titulo:'Cliente'}},
     {path:'listarcliente', component: ListarClienteComponent, data:{titulo:'Cliente'}},
     {path:'cliente/:id', component: AddClienteComponent, data:{titulo:'Cliente'}},
     {path:'listarprecioventa', component: ListarPrecioVentaComponent, data:{titulo:'Precio Venta'}},
     {path:'precioventa/:id', component: AddPrecioVentaComponent, data:{titulo:'Precio Venta'}},
   
     {path:'listarpreciodelivery', component: ListarPrecioDeliveryComponent, data:{titulo:'Precio Venta'}},
     {path:'preciodelivery/:id', component: AddPrecioDeliveryComponent, data:{titulo:'Precio Delivery'}},
  ]

 },
];

@NgModule({
  imports:
  [ 
    RouterModule.forChild(routes) ]
  
  ,
  exports:[ RouterModule ]
})
export class MantenimientosRoutingModule { }
