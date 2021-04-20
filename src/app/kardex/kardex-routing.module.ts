import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KardexComponent } from './kardex.component';
import { ListarcotizacionComponent } from './cotizacion/listarcotizacion/listarcotizacion.component';
import { AddcotizacionComponent } from './cotizacion/addcotizacion/addcotizacion.component';
import { ListarordencompraComponent } from './ordencompra/listarordencompra/listarordencompra.component';
import { OrdencompraComponent } from './ordencompra/ordencompra/ordencompra.component';

const routes: Routes = [
 
  {path:'kardex', component:KardexComponent,
  children:[
    // {path:'',component:HomeComponent},     
   {path:'listarcotizacion', component: ListarcotizacionComponent},
   {path:'cotizacion/:id', component: AddcotizacionComponent},
   {path:'listarordencompra', component: ListarordencompraComponent},
   {path:'ordencompra/:id', component: OrdencompraComponent},
   {path:'**', pathMatch:'full', redirectTo:''}
   
   ]
  }
 ];

 @NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class KardexRoutingModule { }
