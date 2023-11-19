import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  filter=''
  @Input('employees') filteredEmployees:Employee[] = []
  @Output() getEmployeesEvent = new EventEmitter<void>()

  constructor(private employeesService: EmployeesService){}

  async changeEmployeeStatus(employee_id: string, status:boolean){
    this.employeesService.changeEmployeeStatus(employee_id, status).subscribe(async res=>{
      let data = await this.employeesService.getEmployees()

      this.filteredEmployees = data.employees.filter((employee: any)=>{
        return employee.isDeleted == !status
      })

      console.log(this.filteredEmployees);
    })


    
    
  }

}
