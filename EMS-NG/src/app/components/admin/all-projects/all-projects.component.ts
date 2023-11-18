import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent { 

  constructor(private projectService: ProjectsService, private router: Router){
    this.fetchProjects()
  }

  projects: project[] = []

  async fetchProjects(){
    let data = await this.projectService.getProjects()

    this.projects = data.projects

    console.log(this.projects);
    
  }

  async deleteProject(id: string){
    this.projectService.deleteProject(id).subscribe(res=>{
      console.log(res);
    })

    this.router.navigate(['/admin'])
  }


}
