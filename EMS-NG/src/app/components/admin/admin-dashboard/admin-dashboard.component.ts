import { Component } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../interfaces/employee';
import { Router } from '@angular/router';
import { APIService } from '../../../services/api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *', [
        style({
          backgroundColor: 'white', opacity: 0, padding: '10px'
        }),
        animate(500, style({backgroundColor: 'grey', opacity: 1, padding: '15px'}))
      ])
    ]),
    // trigger('sleep', [
    //   transition(':enter, :leave', [
    //     style({
    //       backgroundColor: 'gray'
    //     }),
    //     animate(500, style({
    //       backgroundColor: 'gray'
    //     }))
    //   ])
    // ]),
    trigger ('backIn', [
      state('void', style({opacity: 0, marginTop: '-50px'})),
      transition('void <=> *', [
        animate(500)
      ])
    ])
  ]
})
export class AdminDashboardComponent {
  employees:Employee[] = []
  filteredEmployees:Employee[] = []
  emplo = ['fwef','ewrwer']
  projects:project[] = []
  filter = ''
  createProject = false
  hide!:boolean
  sidebarAction : boolean = true
  activeUserAction : boolean = true
  projectCardActions:boolean[] = []


  constructor(private employeesService: EmployeesService, private router: Router, private apiService:APIService, private projectsService:ProjectsService){
    // this.fetchEmployees()
    
    this.getEmployees()
    this.getProjects()


    if((this.router.url).includes('create-project')){
      this.createProject = true
    }
    if((this.router.url).includes('admin/employees')){
      this.showUser(true)
    }

    
  }

  toggleActions(index:number){
    this.projectCardActions[index] = !this.projectCardActions[index]
  }

  viewDashboard(){
    this.sidebarAction = true
    this.createProject = false
    this.hide = false
    this.router.navigate(['/admin'])
  }

  viewProjects(){
    this.sidebarAction = true
    this.router.navigate(['/admin/projects'])
    this.createProject = false
    this.hide = true

    this.getProjects()
  }

  showRegisterForm(){
    this.sidebarAction = false
    this.activeUserAction = true
    this.router.navigate(['/admin/register'])
  }


  showUser(status: boolean){
    this.sidebarAction = false
    this.activeUserAction = false

    this.apiService.getEmployees().subscribe(res=>{    
      this.employees = res.employees

      this.filteredEmployees = this.employees.filter(employee=>{
        return employee.isDeleted == status
      })
    }) 

    this.router.navigate(['/admin/employees'])
  }

  getEmployees(){
    this.apiService.getEmployees().subscribe(res=>{
      // console.log(res.employees);     
      this.employees = res.employees
    }) 
  }

  // async fetchEmployees(){
  //   let employees = await this.employeesService.getEmployees()

  //   this.employees = employees.employees

  // }

  getEmployee(index: number){
    let emp = this.employees[index]
    
    this.router.navigate(['admin', emp.employee_id])

  }

  async getProjects(){
    let data = await this.projectsService.getProjects()

    this.projects = data.projects
  }

  deleteProject(id: string){
    this.projectsService.deleteProject(id).subscribe(res=>{
      console.log(res);
      this.getProjects()
  })    
  }


  createProjectForm(){
      this.sidebarAction = true
      this.createProject = true
      this.router.navigate(['admin/create-project'])
  }



  sidebar = [
    {
      value: 'Employees'
    },
    { 
      value: 'Projects'
    },
    {
      value: 'Teams'
    },
    {
      value: 'Payroll'
    },
    {
      value: 'Time-entry'
    },
    {
      value: 'Logout'
    }
  ]

  
}
