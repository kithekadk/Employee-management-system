import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Employee[], name: string): Employee[] {
    if(!employees || name == ''){
      return employees
    }
    
    const filtered : Employee[] = []

    for (let employee of employees){
      if(employee.name.toLowerCase().includes(name.toLowerCase())){
        filtered.push(employee)
      }
    }

    return filtered
  }

}
