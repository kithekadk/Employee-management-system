import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { userLogin } from '../../../interfaces/login';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor (private userAuth: AuthService, private employeeService: EmployeesService, private router: Router){}

  title:string = 'Input credentials to Login'

  errorMessage:string = ''
  successMessage:string = ''
  loggingIn:boolean = false
  loggedInState:boolean = false

  loggedIn = false

  link:string = 'https://cdn.pixabay.com/photo/2022/03/31/13/50/login-7103076_640.png'

  async authenticateUser(values:userLogin){

    let response = await this.userAuth.login(values)

    // console.log(response);

    if(response.error){
      this.loggingIn = true
      this.errorMessage = response.error

      setTimeout(() => {
        this.errorMessage = ''
        this.loggingIn = false
      }, 3000);
    }else if(response.message){
      this.loggedInState = true
      this.successMessage = response.message
      this.link = 'https://www.architecturaldigest.in/wp-content/themes/cntraveller/images/check-circle.gif'
      this.loggedIn = true

      localStorage.setItem('loggedIn', `${this.loggedIn}`)  

      let role = await this.employeeService.checkDetails()
      
      console.log(role);
      

      setTimeout( async() => {
        this.successMessage = ''
        this.loggedInState = false
        
        if(role == 'admin'){
          this.router.navigate(['admin'])
        }else if(role == 'employee'){
          this.router.navigate(['employee'])
        }
      }, 2000);
 
    }
    

  }
}
