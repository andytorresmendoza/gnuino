import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
 
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor ( private authService:AuthService){
   
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
/*    this.authService.validarToken().subscribe(resp=>{
        console.log(resp);
      })
      console.log('paso por el canactive');*/
    return false;
  }
  
}
