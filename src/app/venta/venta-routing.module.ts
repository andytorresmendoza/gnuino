import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ListarcotizacionComponent } from './cotizacion/listarcotizacion/listarcotizacion.component';
import { AddcotizacionComponent } from './cotizacion/addcotizacion/addcotizacion.component';
const routes: Routes = [
 
  {path:'venta', component:PagesComponent,
  canActivate:[AuthGuard],
  children:[
   {path:'',component:DashboardComponent},     
   {path:'listarventa', component: ListarcotizacionComponent, data:{titulo:'Venta'}},
    {path:'venta/:id', component: AddcotizacionComponent, data:{titulo:'Venta'}},
   

  
  //  {path:'**', pathMatch:'full', redirectTo:''}
   
   ]
  }
 ];
 @NgModule({
  imports:[ RouterModule.forChild(routes) ],
  exports:[ RouterModule ]
})
export class VentaRoutingModule { }
