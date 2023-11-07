import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  async getEmployees(){
    let token:string = localStorage.getItem('token')!;

    let res = await fetch('http://localhost:4400/employee', {
      headers:{
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await res.json()

    console.log(data);
    
  }
}
