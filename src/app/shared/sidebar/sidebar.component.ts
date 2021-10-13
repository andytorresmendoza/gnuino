import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SiderbarService } from '../../services/sidebar/siderbar.service';
import { DataPerfilusuario } from 'src/app/models/perfilUsuario';
import jwt_decode from "jwt-decode";
import { filter } from 'rxjs/operators';
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

      
      // console.log(sidebarService.menu,'QUE TRAE MENU');
      const token =   localStorage.getItem('access_token'); 
      this.decoded = jwt_decode(token); 
      this.perfilUsuario = this.decoded.user[0].detalleEmpleado
      console.log(this.perfilUsuario);
      const perfil = this.decoded.user[0].detalleEmpleado[0].idPerfilUsuario
      if (perfil == 1){
        this.menuItems = sidebarService.Administrador;

      }
      else if(perfil == 2){

        this.menuItems = sidebarService.Vendedor;
      }
      
      else if(perfil == 3){

        this.menuItems = sidebarService.Almacen;
      }
   
      else if(perfil == 4){

        this.menuItems = sidebarService.Delivery;
      }
      else if(perfil == 5){

        this.menuItems = sidebarService.Marketing;
      }

   
      // .filter(perfil=>perfil.id == 5 )
      // VER ACA EL LOG
     }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('../auth/login');
    }

}
