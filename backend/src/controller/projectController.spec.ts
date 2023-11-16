import { Request, Response } from "express";
import {v4} from 'uuid'
import mssql from  'mssql'
import { fetchOneProject, fetchProjects } from "./projectController";

describe ("Testing projects controller", ()=>{

    let res:any;

    beforeEach(()=>{
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it("getting a single project", async()=>{ 
        const req = {
            params:{
                project_id: 'my-project-id1'
            }
        }

        let expectedProject = {
            project_id: "2e402706-075f-4dea-80cf-1ecfa3842ae5",
            project_name: "Project ABC",
            project_description: "Build a construction ABC",
            project_deadline: "2023-04-05",
            assigned_to: "",
            status: "pending",
            isDeleted: true
        }

        jest.spyOn(mssql, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({recordset: [expectedProject]})
        } as never)

        await fetchOneProject(req as any, res as Response)

        expect (res.json).toHaveBeenCalledWith({project: [expectedProject]})
    })

    it('gets all projects', async()=>{ 
        const req = {

        }

        let expectedProjects = [
            {
            project_id: "2e402706-075f-4dea-80cf-1ecfa3842ae5",
            project_name: "Project ABC",
            project_description: "Build a construction ABC",
            project_deadline: "2023-04-05",
            assigned_to: "",
            status: "pending",
            isDeleted: true
            },
            {
            project_id: "UIUYY402706-075f-4dea-80cf-1ecfa3842ae5",
            project_name: "Project XYZ",
            project_description: "Build a construction XYZ",
            project_deadline: "2023-04-05",
            assigned_to: "",
            status: "pending",
            isDeleted: true
            }
        ]

        jest.spyOn(mssql, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({recordset: expectedProjects})
        } as never)

        await fetchProjects(req as Request, res as Response)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({projects: expectedProjects})
    })
}) 