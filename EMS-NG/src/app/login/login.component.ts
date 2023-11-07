import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { userLogin } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private userAuth: AuthService){}

  title:string = 'Input credentials to Login'

  errorMessage:string = ''
  successMessage:string = ''
  loggingIn:boolean = false
  loggedIn:boolean = false

  link:string = 'https://cdn.pixabay.com/photo/2022/03/31/13/50/login-7103076_640.png'

  async authenticateUser(data:userLogin){

    let response = await this.userAuth.login(data)

    console.log(response);

    if(response.error){
      this.loggingIn = true
      this.errorMessage = response.error

      setTimeout(() => {
        this.errorMessage = ''
        this.loggingIn = false
      }, 3000);
    }else if(response.message){
      this.loggedIn = true
      this.successMessage = response.message
      this.link = 'https://www.architecturaldigest.in/wp-content/themes/cntraveller/images/check-circle.gif'

      setTimeout(() => {
        this.successMessage = ''
        this.loggedIn = true
      }, 2000);

      localStorage.setItem('loggedIn', `${this.loggedIn}`)
    }
    

  }
}
