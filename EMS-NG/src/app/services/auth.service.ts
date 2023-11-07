import { Injectable } from '@angular/core';
import { userLogin } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(userLogins: userLogin){
    // console.log(userLogins);
    
    let response = await fetch('http://localhost:4400/employee/login', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userLogins)
    })

    // console.log(response);

    const data = await response.json()

    let token = data.token

    localStorage.setItem('token', token)

    return data
  }

  
}
