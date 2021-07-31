import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map} from 'rxjs/operators'
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo: string;
  public tituloSub$: Subscription;
  private decoded:any;
  public perfilUsuario:any[]=[];

  constructor(private router:Router) {
    this.tituloSub$ =   this.getArgumentosRuta()
    .subscribe( data =>{
      console.log(data.titulo);
       this.titulo = data.titulo;
       document.title = `Gnuino - ${this.titulo}`;
  
       const token =   localStorage.getItem('access_token'); 
       this.decoded = jwt_decode(token); 
       this.perfilUsuario = this.decoded.user[0].detalleEmpleado;
        // console.log( this.perfilUsuario,'QUE PERFIL'); 
     });

   

   }



  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe(); 
  }

 
getArgumentosRuta(){
  return this.router.events
   .pipe( 
   filter(event=> event instanceof ActivationEnd),
   filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
   map((event:ActivationEnd)=> event.snapshot.data)
   );
 
 } 

}
