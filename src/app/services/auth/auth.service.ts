import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserI} from '../../interfaces/user';
import {JwtResponseI} from '../../interfaces/jwt-response'
import {tap} from 'rxjs/operators'
import {observable, BehaviorSubject, Observable} from 'rxjs'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  baseURL: string = environment.apiURL;
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) { }


 
  login(user: UserI):Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.baseURL}login`,user).
    pipe(tap(
      (res:JwtResponseI) =>{
        if(res){
        //  console.log(res.access_token);
          this.saveToken(res.access_token, res.expires_in)
        }
      })
   );
  }
  logout():void{
    this.token='';
    localStorage.removeItem("access_token")
    localStorage.removeItem("expires_in")
  }
  private saveToken(token:string, expiresIn:string):void{
    localStorage.setItem("access_token",token);
    localStorage.setItem("expires_in", expiresIn);
    this.token=token;
  }
  
  private getToken(token:string):string{
    if(!this.token){
      this.token=localStorage.getItem("access_token");
    }
    return this.token;
  }
  }
  