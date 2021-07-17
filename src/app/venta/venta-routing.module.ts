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
const routes: Routes = [
 
  {path:'venta', component:PagesComponent,
  canActivate:[AuthGuard],
  children:[
   {path:'',component:DashboardComponent},     
   {path:'listarventa', component: ListarcotizacionComponent, data:{titulo:'Venta'}},
    {path:'venta/:id', component: AddcotizacionComponent, data:{titulo:'Venta'}},
    {path:'listarordenventa', component: ListarordenventaComponent, data:{titulo:'Orden Venta'}},
    {path:'ordenventa', component: AddordenventaComponent, data:{titulo:'Orden Venta'}},
    {path:'editarordenventa/:id', component: EditarordenventaComponent, data:{titulo:'Orden Venta'}},
    {path:'listarpredelivery', component: ListarordenventapendienteComponent, data:{titulo:'Orden Venta Pendiente'}},
    {path:'listarempleadoDelivery', component: ListarempleadodeliveryComponent, data:{titulo:'Asignar Delivery'}},
    {path:'addpredelivery', component: ListarempleadodeliveryComponent, data:{titulo:'Asignar Delivery'}},
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
