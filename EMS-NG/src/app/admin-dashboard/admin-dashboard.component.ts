import { Component } from '@angular/core';
import { user } from '../interfaces/user';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../interfaces/employee';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  employees:any 

  allEmployees:Employee[]=[]


  constructor(private employeesService: EmployeesService, private router: Router, private apiService:APIService){
    // this.fetchEmployees()

    this.getEmployees()
  }

  getEmployees(){
    let data = this.apiService.getEmployees().subscribe(res=>{

      this.employees = res

      // console.log(this.employees.employees);

      let employees = this.employees.employees
      

      this.allEmployees = employees

      // console.log(this.allEmployees);
      
      
    })

    
    
  }

  async fetchEmployees(){
    let employees = await this.employeesService.getEmployees()

    this.employees = employees.employees

    console.log(this.employees);
    
  }

  getEmployee(index: number){
    console.log(index);
    let emp = this.employees[index]

    console.log(emp);
    
    this.router.navigate(['admin', emp.employee_id])

  }

  sidebar = [
    {
      value: 'Employee'

    },
    {
      value: 'project'
    },
    {
      value: 'Time-entry'
    },
    {
      value: 'Logout'
    }
  ]

  
}
