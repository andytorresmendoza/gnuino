import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { MantenimientosRoutingModule } from './mantenimientos/mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
// import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { KardexComponent } from './kardex/kardex.component';
import { KardexRoutingModule } from './kardex/kardex-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




const routes: Routes =[
  // {path:'', redirectTo:'/dashboard', pathMatch:'full'},  
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'mantenimientos',  component: MantenimientosComponent},
  {path:'kardex',  component: KardexComponent},
  {path:'auth',component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[
    RouterModule,
    PagesRoutingModule,
    AuthRoutingModule,
    MantenimientosRoutingModule,
    KardexRoutingModule
  ]
})
export class AppRoutingModule { }
