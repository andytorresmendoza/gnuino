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

const routes: Routes = [
 
  {path:'kardex', component:KardexComponent,
  children:[
    // {path:'',component:HomeComponent},     
   {path:'listarcotizacion', component: ListarcotizacionComponent},
   {path:'listarcotianulada', component: ListarcotianuladasComponent},
   {path:'cotizacion/:id', component: AddcotizacionComponent},
   {path:'listarordencompra', component: ListarordencompraComponent},
   {path:'listarordenanulada', component: ListarordanuladasComponent},
   {path:'ordencompra', component: OrdencompraComponent},
   {path:'editordencompra/:id', component: EditarordencompraComponent},
   {path:'listarentrada', component: ListarentradaalmacenComponent},
   {path:'listarentradaanulada', component: ListarentradaanuladaComponent},
   {path:'ingresoalmacen', component: AddentradaalmacenComponent},
   {path:'editingresoalmacen/:id', component: EditingresoalmacenComponent},

   {path:'listarentradasinoc', component: ListarentradasinocComponent}, 
   {path:'listarentradasinanulada', component: ListarentradasinocanuladaComponent}, 
   {path:'entradasinoc/:id', component: AddentradasinocComponent},

   {path:'listarsalida', component: ListarsalidaproductoComponent},
   {path:'salidaProducto/:id', component: AddsalidaproductoComponent},

   {path:'listarsalidasinoc', component: ListarsalidasinocComponent},
    {path:'listarsalidasinoc/:id', component: AddsalidasinocComponent},

    {path:'listardevolucion', component: ListardevolucionComponent},   
    {path:'devolucion/:id', component: AdddevolucionComponent},
    {path:'listardevolucionsinoc', component: ListardevolucionsinocComponent},   
    {path:'devolucionsinoc/:id', component: AdddevolucionsinocComponent},

    {path:'listartransferencia', component: ListartransferenciaComponent}, 
    {path:'transferencia/:id', component: AddtransferenciaComponent}, 
    {path:'listartransferenciasinoc', component: ListartransferenciasinocComponent}, 
    {path:'transferenciasinoc/:id', component: AddtransferenciasinocComponent}, 
   {path:'**', pathMatch:'full', redirectTo:''}
   
   ]
  }
 ];

 @NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class KardexRoutingModule { }
