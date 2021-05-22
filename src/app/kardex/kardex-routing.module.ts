import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KardexComponent } from './kardex.component';
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
import { ListarsalidaproductoComponent } from './salidaproductos/listarsalidaproducto/listarsalidaproducto.component';
import { AddsalidaproductoComponent } from './salidaproductos/addsalidaproducto/addsalidaproducto.component';
import { ListarentradaanuladaComponent } from './entradaalmacen/listarentradaanulada/listarentradaanulada.component';
import { ListarentradasinocanuladaComponent } from './entradasinoc/listarentradasinocanulada/listarentradasinocanulada.component';
import { ListarsalidasinocComponent } from './salidaproductos/listarsalidasinoc/listarsalidasinoc.component';
import { AddsalidasinocComponent } from './salidaproductos/addsalidasinoc/addsalidasinoc.component';
import { ListardevolucionComponent } from './devolucion/listardevolucion/listardevolucion.component';
import { AdddevolucionComponent } from './devolucion/adddevolucion/adddevolucion.component';
import { ListartransferenciaComponent } from './transferencia/listartransferencia/listartransferencia.component';
import { AddtransferenciaComponent } from './transferencia/addtransferencia/addtransferencia.component';
import { ListartransferenciasinocComponent } from './transferencia/listartransferenciasinoc/listartransferenciasinoc.component';
import { AddtransferenciasinocComponent } from './transferencia/addtransferenciasinoc/addtransferenciasinoc.component';
import { ListardevolucionsinocComponent } from './devolucion/listardevolucionsinoc/listardevolucionsinoc.component';
import { AdddevolucionsinocComponent } from './devolucion/adddevolucionsinoc/adddevolucionsinoc.component';
import { TotaltransferenciasComponent } from './transferencia/totaltransferencias/totaltransferencias.component';
import { TotaltransferenciassinocComponent } from './transferencia/totaltransferenciassinoc/totaltransferenciassinoc.component';
import { TotaldevolucionComponent } from './devolucion/totaldevolucion/totaldevolucion.component';
import { TotaldevolucionsinocComponent } from './devolucion/totaldevolucionsinoc/totaldevolucionsinoc.component';
import { TotalsalidasComponent } from './salidaproductos/totalsalidas/totalsalidas.component';
import { TotalsalidasinocComponent } from './salidaproductos/totalsalidasinoc/totalsalidasinoc.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PagesComponent } from '../pages/pages.component';
import { KardexocComponent } from './kardexoc/kardexoc.component';
import { KardexsinocComponent } from './kardexsinoc/kardexsinoc.component';
import { ListapruebaComponent } from './listaprueba/listaprueba.component';
import { AuthGuard } from '../guards/auth.guard';
 
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
   {path:'entradasinoc/:id', component: AddentradasinocComponent, data:{titulo:'Entradas sin O/C'}},

   {path:'listarsalida', component: ListarsalidaproductoComponent, data:{titulo:'Salidas'}},
   {path:'salidas', component: TotalsalidasComponent, data:{titulo:'Salidas'}}, 
   {path:'salidaProducto/:id', component: AddsalidaproductoComponent, data:{titulo:'Salidas'}},

   {path:'listarsalidasinoc', component: ListarsalidasinocComponent, data:{titulo:'Salida sin O/C'}},
   {path:'salidassinoc', component: TotalsalidasinocComponent, data:{titulo:'Salida sin O/C'}}, 
    {path:'listarsalidasinoc/:id', component: AddsalidasinocComponent, data:{titulo:'Salida sin O/C'}},

    {path:'listardevolucion', component: ListardevolucionComponent, data:{titulo:'Devoluciones'}},   
    {path:'devoluciones', component: TotaldevolucionComponent, data:{titulo:'Devoluciones'}}, 
    {path:'devolucion/:id', component: AdddevolucionComponent, data:{titulo:'Devoluciones'}},
    {path:'listardevolucionsinoc', component: ListardevolucionsinocComponent, data:{titulo:'Devoluciones sin O/C'}},   
    {path:'devolucionessinoc', component: TotaldevolucionsinocComponent, data:{titulo:'Devoluciones sin O/C'}}, 
    {path:'devolucionsinoc/:id', component: AdddevolucionsinocComponent, data:{titulo:'Devoluciones sin O/C'}},

    {path:'listartransferencia', component: ListartransferenciaComponent, data:{titulo:'Transferencias'}}, 
    {path:'transferencias', component: TotaltransferenciasComponent, data:{titulo:'Transferencias'}}, 
    {path:'transferencia/:id', component: AddtransferenciaComponent, data:{titulo:'Transferencias'}}, 
    {path:'listartransferenciasinoc', component: ListartransferenciasinocComponent, data:{titulo:'Transferencias sin O/C'}}, 
    {path:'transferenciassinoc', component: TotaltransferenciassinocComponent, data:{titulo:'Transferencias sin O/C'}}, 
    {path:'transferenciasinoc/:id', component: AddtransferenciasinocComponent, data:{titulo:'Transferencias sin O/C'}}, 
    {path:'kardex', component: KardexocComponent, data:{titulo:'Kardex O/C'}}, 
    {path:'kardexsinoc', component: KardexsinocComponent, data:{titulo:'Kardex sin O/C'}}, 
    {path:'lista', component: ListapruebaComponent, data:{titulo:'Prueba'}}, 

  
  //  {path:'**', pathMatch:'full', redirectTo:''}
   
   ]
  }
 ];

 @NgModule({
  imports:[ RouterModule.forChild(routes) ],
  exports:[ RouterModule ]
})
export class KardexRoutingModule { }
