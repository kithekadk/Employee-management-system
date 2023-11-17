import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

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
