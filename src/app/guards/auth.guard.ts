 
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
 
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor ( private authService:AuthService, private router: Router){
    // const token = authService.token;
    // console.log(this.authService.validarToken(),'que envia?');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
//  console.log(this.authService.token, 'service');
      if(localStorage.getItem('access_token') ){
       return true;
        }else{
          this.router.navigateByUrl('auth/login')
      return false;
    
        }
 
  }
  
}
