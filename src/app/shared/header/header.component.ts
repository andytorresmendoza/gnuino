import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  private decoded:any;
  public perfilUsuario:any[]=[];
  constructor(private auth: AuthService,
  private router: Router) {
  const token =   localStorage.getItem('access_token'); 
  this.decoded = jwt_decode(token); 
  this.perfilUsuario = this.decoded.user[0].detalleEmpleado;
  //  console.log( this.perfilUsuario,'QUE PERFIL');
  //  console.log(this.decoded.user[0].detalleEmpleado[0].nombre_empleado,'QUE TRAEMOS');
     }

  ngOnInit(): void {
  }
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
    }

}
