import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('http interceptor');
    req = req.clone({
      // setHeaders: {'Authorization': 'Bearer-  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4MFwvbG9naW4iLCJpYXQiOjE2MTcyMDg2ODYsImV4cCI6MTYxOTgzNjY4NiwibmJmIjoxNjE3MjA4Njg2LCJqdGkiOiJFRnp2WmNZektqNEJOajh6Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIiwidXNlciI6eyJoZWFkZXJzIjp7fSwib3JpZ2luYWwiOlt7ImlkIjoxLCJpZEVtcGxlYWRvIjoiMSIsImRldGFsbGVFbXBsZWFkbyI6W3siZGV0YWxsZVBlcmZpbFVzdWFyaW8iOlt7ImlkIjo1LCJ0aXBvX3VzdWFyaW8iOiJBRE1JTklTVFJBRE9SIiwiZXN0YWRvIjoxLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yNVQwMzoyMjowMS4wMDAwMDBaIiwidXBkYXRlZF9hdCI6IjIwMjEtMDQtMjVUMDM6MjI6MDEuMDAwMDAwWiJ9XX1dLCJ1c2VybmFtZSI6InNvcG9ydGUifV0sImV4Y2VwdGlvbiI6bnVsbH19.691NwefozBbTd-nMFf4oGalIiQ3BaGgpnup8zTo3Qw8'}
      setHeaders: {'Authorization': 'Bearer ' +  (localStorage.getItem('access_token'))}
    });
    return next.handle(req);
  }

}
