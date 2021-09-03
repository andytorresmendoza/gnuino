import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SiderbarService } from '../../services/sidebar/siderbar.service';
import { DataPerfilusuario } from 'src/app/models/perfilUsuario';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  private decoded:any;
  public perfilUsuario: any[]=[];
  constructor(private auth: AuthService,private sidebarService:SiderbarService,
    private router: Router) {

      this.menuItems = sidebarService.menu;
      // console.log(sidebarService.menu,'QUE TRAE MENU');
      const token =   localStorage.getItem('access_token'); 
      this.decoded = jwt_decode(token); 
      console.log(this.decoded,'DECODE');
      this.perfilUsuario = this.decoded.user[0].detalleEmpleado;
      // VER ACA EL LOG
     }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('../auth/login');
    }

}
