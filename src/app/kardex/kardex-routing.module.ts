import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { ListarcotizacionComponent } from './cotizacion/listarcotizacion/listarcotizacion.component';
import { AddcotizacionComponent } from './cotizacion/addcotizacion/addcotizacion.component';
import { ListarordencompraComponent } from './ordencompra/listarordencompra/listarordencompra.component';
import { OrdencompraComponent } from './ordencompra/ordencompra/ordencompra.component';
import { EditarordencompraComponent } from './ordencompra/editarordencompra/editarordencompra.component';
import { ListarentradaalmacenComponent } from './entradaalmacen/listarentradaalmacen/listarentradaalmacen.component';
import { AddentradaalmacenComponent } from './entradaalmacen/addentradaalmacen/addentradaalmacen.component';
import { ListarcotianuladasComponent } from './cotizacion/listarcotianuladas/listarcotianuladas.component';
import { ListarordanuladasComponent } from './ordencompra/listarordanuladas/listarordanuladas.component';
import { EditingresoalmacenComponent } from './entradaalmacen/editingresoalmacen/editingresoalmacen.component';
import { ListarentradasinocComponent } from './entradasinoc/listarentradasinoc/listarentradasinoc.component';
import { AddentradasinocComponent } from './entradasinoc/addentradasinoc/addentradasinoc.component'; 
import { ListarentradaanuladaComponent } from './entradaalmacen/listarentradaanulada/listarentradaanulada.component';
import { ListarentradasinocanuladaComponent } from './entradasinoc/listarentradasinocanulada/listarentradasinocanulada.component';
 
import { ListardevolucionComponent } from './devolucion/listardevolucion/listardevolucion.component';
import { AdddevolucionComponent } from './devolucion/adddevolucion/adddevolucion.component'; 
import { ListardevolucionsinocComponent } from './devolucion/listardevolucionsinoc/listardevolucionsinoc.component';
import { AdddevolucionsinocComponent } from './devolucion/adddevolucionsinoc/adddevolucionsinoc.component';
import { TotaltransferenciasComponent } from './transferencia/totaltransferencias/totaltransferencias.component';
 
import { TotaldevolucionComponent } from './devolucion/totaldevolucion/totaldevolucion.component';
import { TotaldevolucionsinocComponent } from './devolucion/totaldevolucionsinoc/totaldevolucionsinoc.component';
import { TotalsalidasComponent } from './salidaproductos/totalsalidas/totalsalidas.component'; 
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PagesComponent } from '../pages/pages.component'; 
import { AuthGuard } from '../guards/auth.guard';
import { ListarkardexComponent } from './kardex/listarkardex/listarkardex.component';
import { EditentradasinocComponent } from './entradasinoc/editentradasinoc/editentradasinoc.component';
import { MovimientosproductosComponent } from './kardex/movimientosproductos/movimientosproductos.component';
import { ListapruebaComponent } from './listaprueba/listaprueba.component';
 
const routes: Routes = [
 
  {path:'kardex', component:PagesComponent,
  canActivate:[AuthGuard],
  children:[
   {path:'',component:DashboardComponent},     
   {path:'listarcotizacion', component: ListarcotizacionComponent, data:{titulo:'Cotización'}},
   {path:'listarcotianulada', component: ListarcotianuladasComponent, data:{titulo:'Cotización'}},
   {path:'cotizacion/:id', component: AddcotizacionComponent, data:{titulo:'Cotización'}},
   {path:'listarordencompra', component: ListarordencompraComponent, data:{titulo:'Orden Compra'}},
   {path:'listarordenanulada', component: ListarordanuladasComponent, data:{titulo:'Orden Compra'}},
   {path:'ordencompra', component: OrdencompraComponent, data:{titulo:'Orden Compra'}},
   {path:'editordencompra/:id', component: EditarordencompraComponent, data:{titulo:'Orden Compra'}},

   {path:'listarentrada', component: ListarentradaalmacenComponent, data:{titulo:'Entrada Almacén'}},
   {path:'listarentradaanulada', component: ListarentradaanuladaComponent, data:{titulo:'Entrada Almacén'}},
   {path:'ingresoalmacen', component: AddentradaalmacenComponent, data:{titulo:'Entrada Almacén'}},
   {path:'editingresoalmacen/:id', component: EditingresoalmacenComponent, data:{titulo:'Entrada Almacén'}},

   {path:'listarentradasinoc', component: ListarentradasinocComponent, data:{titulo:'Entradas sin O/C'}}, 
   {path:'listarentradasinanulada', component: ListarentradasinocanuladaComponent, data:{titulo:'Entradas sin O/C'}},
   {path:'entradasinoc', component: AddentradasinocComponent, data:{titulo:'Entradas sin O/C'}},
   {path:'editingresosinoc/:id', component: EditentradasinocComponent, data:{titulo:'Entradas sin O/C'}},  
   {path:'salidas', component: TotalsalidasComponent, data:{titulo:'Salidas'}},   
    {path:'listardevolucion', component: ListardevolucionComponent, data:{titulo:'Devoluciones'}},   
    {path:'devoluciones', component: TotaldevolucionComponent, data:{titulo:'Devoluciones'}}, 
    {path:'devolucion/:id', component: AdddevolucionComponent, data:{titulo:'Devoluciones'}},
    {path:'listardevolucionsinoc', component: ListardevolucionsinocComponent, data:{titulo:'Devoluciones sin O/C'}},   
    {path:'devolucionessinoc', component: TotaldevolucionsinocComponent, data:{titulo:'Devoluciones sin O/C'}}, 
    {path:'devolucionsinoc/:id', component: AdddevolucionsinocComponent, data:{titulo:'Devoluciones sin O/C'}}, 
    {path:'transferencias', component: TotaltransferenciasComponent, data:{titulo:'Transferencias'}},  
    {path:'Listarkardex', component: ListarkardexComponent, data:{titulo:'Kardex'}}, 
    {path:'movimientoproductos/:id', component: MovimientosproductosComponent, data:{titulo:'Movimientos'}}, 
    {path:'ListarPrueba/:id', component: ListapruebaComponent, data:{titulo:'prueba'}}, 
   
   ]
  }
 ];

 @NgModule({
  imports:[ RouterModule.forChild(routes) ],
  exports:[ RouterModule ]
})
export class KardexRoutingModule { }
