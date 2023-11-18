import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit{

  @Input('employees') employees!: Employee[]
  @Input('hide') hide!: boolean
  @Input('createProject') createProject!: boolean

  constructor(private projectService: ProjectsService, private router:Router){
    
  }


  ngOnInit(): void {

  }


  createnewProject(form: NgForm){
    console.log(form.value);
    this.projectService.createProject(form.value)
    
    form.resetForm()
  }

  // viewProjects(){
  //   this.router.navigate(['/admin/projects'])
  // }

}
