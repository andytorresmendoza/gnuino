import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { UserI } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
      password : new FormControl('', Validators.required)
   })
   constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onLogin(form: UserI):void{
    //  console.log('Login', form.value);
         this.authService.login(form).subscribe(res=>{
          // console.log(res );
         
          this.router.navigate(['/dashboard']);
          err=> console.log(err);
         
      });

 
  
    }
  }
  

    //  console.log('Login', form.value);
      //    this.authService.login(form).subscribe(res=>{
      //     console.log(res );
      //     this.router.navigate(['/auth/register']);
         
      // });
  
  
 
  