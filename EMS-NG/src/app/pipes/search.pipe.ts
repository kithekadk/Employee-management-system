import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Employee[], email: string): Employee[] {
    if(!employees || email == ''){
      return employees
    }
    
    const filtered : Employee[] = []

    for (let employee of employees){
      if(employee.email.toLowerCase().includes(email.toLowerCase())){
        filtered.push(employee)
      }
    }

    return filtered
  }

}
