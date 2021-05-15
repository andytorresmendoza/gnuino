import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private  linkThemen = document.querySelector('#theme');
  constructor() {
    console.log('ingreso');
    const url=  localStorage.getItem('theme') ||  './assets/css//colors/default-dark.css'
    this.linkThemen.setAttribute('href',url);
  //  localStorage.getItem('theme',url)
  //  console.log(url);
   }
   changeTheme(theme:string){
 
    const url = `./assets/css/colors/${theme}.css`
    this.linkThemen.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  
    // console.log(url);
  }
  checkCurrentTheme(){
    const  links =  document.querySelectorAll('.selector');
    links.forEach(elem =>{
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`; 
      const currentTheme = this.linkThemen.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        elem.classList.add('working')
      }
  
    })
 
  }
}
