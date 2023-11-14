import { Request, Response } from "express";
import {v4} from 'uuid'
import Connection from "../dbhelpers/dbhelpers";
const dbhelper = new Connection

export const createProject = async(req: Request, res: Response)=>{
    try {
        const id = v4()

        const {project_name, project_description, project_deadline, assigned_to} = req.body

        dbhelper.execute('createProject',{
            project_id:id, project_name, project_description, project_deadline, assigned_to
        })

        return res.status(200).json({message: 'project created successfully'})
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const fetchProjects = async(req: Request, res:Response)=>{
    try {
        const projects = (await dbhelper.execute('fetchAllProjects')).recordset

        return res.status(200).json({projects: projects})
    } catch (error) {
        return res.json({
            error: error
        })
    }
}