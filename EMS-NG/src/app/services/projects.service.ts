import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  createProject(project: project){
    return this.http.post(`http://localhost:4400/projects/create`, project).subscribe(res=>{
      console.log(res);
      
    })
  }

  async getProjects(){
    let projects = await fetch('http://localhost:4400/projects/',{
      method: "GET"
    })

    let data = await projects.json()
    
    return data
  }

  deleteProject(id:string){
    return this.http.delete(`http://localhost:4400/projects/${id}`)
  }
}
