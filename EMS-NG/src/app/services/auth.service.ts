import { Injectable } from '@angular/core';
import { userLogin } from '../interfaces/login';
import { EmployeeDetails } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(userLogins: userLogin){
    let response = await fetch('http://localhost:4400/employee/login', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userLogins)
    })

    const data = await response.json()
    let token = data.token
    localStorage.setItem('token', token)

    console.log(token);
    

    return data
  }

  async registerEmployee (employeedetails: EmployeeDetails){
    let response = await fetch('http://localhost:4400/employee/register', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(employeedetails)
    })

    const data = await response.json()

    console.log(data); 

    return data
  }
}
