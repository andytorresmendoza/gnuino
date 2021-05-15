import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

////
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthModule } from './auth/auth.module'; 
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
 
import { AuthInterceptorService } from './services/token/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { KardexModule } from './kardex/kardex.module';
  import { ToastrModule } from 'ngx-toastr';
  import { NgSelectModule } from '@ng-select/ng-select';
 
 
@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    MantenimientosModule,
    KardexModule,
    AuthModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgSelectModule
  // MatDatepickerModule,
  //    MatNativeDateModule

    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
