import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { Validators, FormBuilder} from '@angular/forms'
import { UserI } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  // Respuesta :any
  public loginForm = this.fb.group({
    username: [localStorage.getItem('username')|| 'soporte', Validators.required ], 
    password: ['secret', Validators.required ],
    remember:[false]
     
    // terminos: [ true, Validators.required ],
  });
   constructor(private  fb: FormBuilder,private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
 
login(){
 
  this.authService.Login(this.loginForm.value)
  .subscribe((resp:any) => {  
    if(this.loginForm.get('remember').value){
      localStorage.setItem('username',this.loginForm.get('username').value);
    
    }
    else{
      localStorage.removeItem('username');
    }
  //  console.log(resp,'resouesta')
    resp.code === 404 || resp.status === 422  ?  
    Swal.fire({
      title: resp.userMessage , 
      icon: 'error',
    }): 
    this.toastr.success('Bienvenido al Sistema');
   this.router.navigate(['/dashboard']);
 

}
  )
}

 /* login(form: UserI):void{
    //  console.log('Login', form.value);
         this.authService.login(form).subscribe(res=>{
          // console.log(res );
         
          this.router.navigate(['/dashboard']);
          err=> console.log(err);
         
      });

 
  
    }*/
  }
  
 
  