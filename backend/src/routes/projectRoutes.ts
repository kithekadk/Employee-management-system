import { Router } from "express";
import { createProject, fetchProjects } from "../controller/projectController";

const projects_router = Router()

projects_router.post('/create', createProject)
projects_router.get('/', fetchProjects)

export default projects_router;