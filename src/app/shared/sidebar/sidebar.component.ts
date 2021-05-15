import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SiderbarService } from '../../services/sidebar/siderbar.service';
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth: AuthService,private sidebarService:SiderbarService,
    private router: Router) {

      this.menuItems = sidebarService.menu;

     }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('../auth/login');
    }

}
