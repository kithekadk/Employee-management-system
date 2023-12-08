import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee, EmployeeDetails } from '../interfaces/employee';
import { project } from '../interfaces/project';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    let token = localStorage.getItem('token') as string
    return this.http.get<{employees: Employee[]}>('http://localhost:4400/employee', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': token
      })
    })
  }

  createEmployee (employee: EmployeeDetails){
    return this.http.post('http://localhost:4400/employee/register', employee)
  }

  // GET ALL PROJECTS
  getProjects(){
    return this.http.get<{projects: project[]}>('http://localhost:4400/projects')
  }
}
