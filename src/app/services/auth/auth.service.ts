import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../../interfaces/user';
import { JwtResponseI } from '../../interfaces/jwt-response';
import { tap } from 'rxjs/operators';
import { observable, BehaviorSubject, Observable, noop } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../../models/login-Form';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string = environment.apiURL;
  authSubject = new BehaviorSubject(false);
  public token: string;
 
  constructor(private httpClient: HttpClient) {
    // console.log('entro auth');
  }

  Login(formData: LoginForm) {
    return this.httpClient.post(`${this.baseURL}login`, formData).pipe(
      tap((resp: any) => {
        this.saveToken(resp.access_token);
      })
    );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('access_token');
  }

  saveToken(token: string): void {
    if (token) {
      localStorage.setItem('access_token', token);
      this.token = token;
      //  this.validarToken();
    }
  }
 
 
}
