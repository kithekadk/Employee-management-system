import { Component } from '@angular/core';
import { user } from '../interfaces/user';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../interfaces/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  employees:Employee[] = []


  constructor(private employeesService: EmployeesService, private router: Router){
    this.fetchEmployees()
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
