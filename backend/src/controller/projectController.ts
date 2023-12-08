import { Request, Response } from "express";
import {v4} from 'uuid'
import mssql from  'mssql'
import { sqlConfig } from "../config/sqlConfig";
import dbHelper from "../dbhelpers/dbhelpers"

export const createProject = async(req: Request, res: Response)=>{
    try {
        const id = v4()

        const {project_name, project_description, project_deadline, assigned_to} = req.body

        await dbHelper.execute('createProject',{
            project_id:id, project_name, project_description, project_deadline, assigned_to
        })

        return res.status(200).json({message: 'project created successfully'})
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const fetchProjects = async(req:Request, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        const projects = (await pool.request().execute('fetchAllProjects')).recordset

        return res.status(200).json({projects: projects})
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const fetchOneProject = async(req:Request, res:Response)=>{
    try {
        let {project_id} = req.params

        const pool = await mssql.connect(sqlConfig)
        
        const project = (await pool.request().input('project_id', project_id).execute('fetchOneProject')).recordset

        // console.log(project);
        return res.json({project: project})
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const deleteProject = async(req:Request, res:Response)=>{
    try {
        
        let {project_id} = req.params

        const pool = await mssql.connect(sqlConfig)

        const project = (await pool.request().input('project_id', project_id).execute('deleteProject')).rowsAffected

        
        if((project[0]) == 1){
            return res.status(200).json({ 
                message: "Project deleted successfully"
            })
        }else{
            return res.status(400).json({
                error: "No project with the given ID"
            })
        }

    } catch (error) {
        return res.json({
           error: "Server not running" 
        })
    }
}

export const updateProject = async(req:Request, res:Response) =>{
    try {
        
        let {project_id} = req.params

        const {project_name, project_description, project_deadline, assigned_to} = req.body

        const pool = await mssql.connect(sqlConfig)

        const project = await pool.request()
        .input('project_name', project_name)
        .input('project_description', project_description)
        .input('project_deadline', project_deadline)
        .input('assigned_to', assigned_to)
        .input('project_id', project_id)
        .execute('updateProject')

        console.log(project);
        

    } catch (error) {
        return res.json({
            error: error 
         })
    }
}