import { Request, Response } from 'express'
import mssql from 'mssql'
import {v4} from 'uuid'
import { sqlConfig } from '../config/sqlConfig'

export const createTeam = async(req: Request, res:Response)=>{
    try {
        const {team_Name, members, project_assigned} = req.body

        const team_ID = v4()

        const pool = await mssql.connect(sqlConfig)

        const result = await pool.request()
        .input('team_ID', team_ID)
        .input('team_Name', team_Name)
        .input('members', members)
        .input('project_assigned', project_assigned)
        .execute('createTeam')

        console.log(result);

        res.status(200).json({
            message: `Project created Successfully`  
        })
        

    } catch (error) {
        res.json({
            error: error
        })
    }
}

export const getTeams = async(req:Request, res: Response)=>{

    try {
        
        const pool = await mssql.connect(sqlConfig)

        const teams = (await pool.request().execute('fetchAllTeams')).recordset

        return res.status(200).json({
            teams: teams
        })

    } catch (error) {
        res.json({
            error: error
        })
    }

}

export const getOneTeam = async(req:Request, res: Response)=>{

    try {
        const {team_ID} = req.params
        
        const pool = await mssql.connect(sqlConfig)

        const team = (await pool.request().input('team_ID', team_ID).execute('fetchOneTeam')).recordset

        return res.status(200).json({
            team: team
        })

    } catch (error) {
        res.json({
            error: error
        })
    }

}
