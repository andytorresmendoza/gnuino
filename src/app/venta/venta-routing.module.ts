import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ListarcotizacionComponent } from './cotizacion/listarcotizacion/listarcotizacion.component';
import { AddcotizacionComponent } from './cotizacion/addcotizacion/addcotizacion.component';
import { ListarordenventaComponent } from './ordenventa/listarordenventa/listarordenventa.component';
import { AddordenventaComponent } from './ordenventa/addordenventa/addordenventa.component';
import { EditarordenventaComponent } from './ordenventa/editarordenventa/editarordenventa.component';
import { ListarempleadodeliveryComponent } from './empleadodelivery/listarempleadodelivery/listarempleadodelivery.component';
import { ListarordenventapendienteComponent } from './ordenventa/listarordenventapendiente/listarordenventapendiente.component';
import { ListarcotiventaanuladaComponent } from './cotizacion/listarcotiventaanulada/listarcotiventaanulada.component';
import { ListardeliveryComponent } from './delivery/listardelivery/listardelivery.component';
import { AdddeliveryComponent } from './delivery/adddelivery/adddelivery.component';
import { ListarordenventaanuladaComponent } from './ordenventa/listarordenventaanulada/listarordenventaanulada.component';
import { ListarventadirectaComponent } from './ventadirecta/listarventadirecta/listarventadirecta.component';
import { ListarventadirectaanuladoComponent } from './ventadirecta/listarventadirectaanulado/listarventadirectaanulado.component';
import { AddventadirectaComponent } from './ventadirecta/addventadirecta/addventadirecta.component';
import { ListarcambiomedidaComponent } from './cotizacion/listarcambiomedida/listarcambiomedida.component';
import { ListardeliverytodosComponent } from './delivery/listardeliverytodos/listardeliverytodos.component';
import { AdddeliverytodosComponent } from './delivery/adddeliverytodos/adddeliverytodos.component';
// import { ReportestockComponent } from './reportestock/reportestock.component';
import { StockComponent } from './reportes/stock/stock.component';
import { MovimientosComponent } from './reportes/movimientos/movimientos.component';
import { ClientesComponent } from './reportes/clientes/clientes.component';
import { ProveedoresreportComponent } from './reportes/proveedoresreport/proveedoresreport.component';
import { OrdenventareportComponent } from './reportes/ordenventareport/ordenventareport.component';
import { VentadirectareportComponent } from './reportes/ventadirectareport/ventadirectareport.component';
import { OrdencomprareportComponent } from './reportes/ordencomprareport/ordencomprareport.component';
import { PreciosreportComponent } from './reportes/preciosreport/preciosreport.component';
import { OrdensinocreportComponent } from './reportes/ordensinocreport/ordensinocreport.component';
 
const routes: Routes = [
 
  {path:'venta', component:PagesComponent,
  canActivate:[AuthGuard],
  children:[
   {path:'',component:DashboardComponent},     
   {path:'listarventa', component: ListarcotizacionComponent, data:{titulo:'Venta'}},
   {path:'listarventaanulado', component: ListarcotiventaanuladaComponent, data:{titulo:'Venta-Anulada'}},
    {path:'venta/:id', component: AddcotizacionComponent, data:{titulo:'Venta'}},
    {path:'listarordenventa', component: ListarordenventaComponent, data:{titulo:'Orden Venta'}},
    {path:'listarordenventaanulada', component: ListarordenventaanuladaComponent, data:{titulo:'Orden Venta'}},
    {path:'ordenventa', component: AddordenventaComponent, data:{titulo:'Orden Venta'}},
    {path:'editarordenventa/:id', component: EditarordenventaComponent, data:{titulo:'Orden Venta'}},
    {path:'listarpredelivery', component: ListarordenventapendienteComponent, data:{titulo:'Orden Venta Pendiente'}},
    {path:'listarempleadoDelivery', component: ListarempleadodeliveryComponent, data:{titulo:'Asignar Delivery'}},
    {path:'addpredelivery', component: ListarempleadodeliveryComponent, data:{titulo:'Asignar Delivery'}},
    {path:'listardelivery', component: ListardeliveryComponent, data:{titulo:'Delivery'}},
    {path:'adddelivery/:id', component: AdddeliveryComponent, data:{titulo:'Delivery'}},
    {path:'listarventadirecta', component: ListarventadirectaComponent, data:{titulo:'Venta Directa'}},
    {path:'listarventadirectaanulado', component: ListarventadirectaanuladoComponent, data:{titulo:'Venta Directa'}},
    {path:'ventadirecta/:id', component: AddventadirectaComponent, data:{titulo:'Venta Directa'}},
    {path:'listarcambiomedida', component: ListarcambiomedidaComponent, data:{titulo:'Cambio Medida'}},
    {path:'listardeliverytodos', component: ListardeliverytodosComponent, data:{titulo:'Delivery Todos'}},
    {path:'adddeliverytodos/:id', component: AdddeliverytodosComponent, data:{titulo:'Delivery Todos'}},
    {path:'ReporteStock', component: StockComponent, data:{titulo:'Reporte Stock'}},
    {path:'Movimientos', component: MovimientosComponent, data:{titulo:' Reporte Movimientos'}},
    {path:'Clientes', component: ClientesComponent, data:{titulo:'Reporte Clientes'}},
    {path:'Proveedores', component: ProveedoresreportComponent, data:{titulo:'Reporte Proveedores'}},
    {path:'ordenVenta', component: OrdenventareportComponent, data:{titulo:'Reporte Orden Venta'}}, 
   {path:'VentaTienda', component: VentadirectareportComponent, data:{titulo:'Reporte Venta Tienda'}},
   {path:'ordenCompra', component: OrdencomprareportComponent, data:{titulo:'Reporte Orden Compra'}},
   {path:'ReportePrecio', component: PreciosreportComponent, data:{titulo:'Reporte Precios'}},
   {path:'ReporteSinOc', component: OrdensinocreportComponent, data:{titulo:'Reporte Sin Oc'}},
    // {path:'listarpredelivery/:id', component: ListarempleadodeliveryComponent, data:{titulo:'Asignar Delivery'}},
   

  
  //  {path:'**', pathMatch:'full', redirectTo:''}
   
   ]
  }
 ];
 @NgModule({
  imports:[ RouterModule.forChild(routes) ],
  exports:[ RouterModule ]
})
export class VentaRoutingModule { }
