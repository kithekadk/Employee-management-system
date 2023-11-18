import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../interfaces/employee';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css']
})
export class SingleEmployeeComponent {

  constructor(private employeeService:EmployeesService, private router:Router, private route:ActivatedRoute){
    this.getEmployee()
  }

  id:string = ''
  id2 :string = ''

  employee:Employee[] = []

  async getEmployee(){
    // let url = (this.router.url);

    this.route.params.subscribe(params=>{
      this.id2 = params['employee_id']
    })

    let user =  await this.employeeService.getOneEmployee(this.id2)

    console.log(user);

    this.employee = user
    


    
    
    // if(url.includes('/admin/')){
    //   this.id = url.replace('/admin/', '')
      
    //   let emp = await this.employeeService.getOneEmployee(this.id)     
      
    //   this.employee = emp

    //   console.log(this.employee);
      
    // }
  }
}
