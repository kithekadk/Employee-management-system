import { Router } from "express";
import { createProject, deleteProject, fetchOneProject, fetchProjects, updateProject } from "../controller/projectController";

const projects_router = Router()

projects_router.post('/create', createProject)
projects_router.get('/', fetchProjects)
projects_router.get('/:project_id', fetchOneProject)
projects_router.delete('/:project_id', deleteProject)
projects_router.put('/:project_id', updateProject)

export default projects_router;