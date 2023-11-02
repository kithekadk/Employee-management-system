import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title:string = 'Input credentials to proceed'

  link:string = 'https://cdn.pixabay.com/photo/2023/10/26/15/11/mercedes-8342911_640.jpg'

  onClick(){
    console.log('clicked');
    alert('clicked')
  }
}
