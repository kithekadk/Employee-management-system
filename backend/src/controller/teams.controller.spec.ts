import request from 'supertest'
import app from '../server'


describe('TDD For Teams Controller', ()=>{

    it('gets all teams' , async()=>{ 

        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZV9pZCI6ImRmZTI4ZDA3LTJhM2EtNDdmNC05MDBjLWNmMzc2ZTE5OThkYiIsIm5hbWUiOiJEYW5pZWwgS2l0aGVrYSIsImVtYWlsIjoiZGFuQHlvcG1haWwuY29tIiwicm9sZSI6ImVtcGxveWVlIiwiaXNEZWxldGVkIjp0cnVlLCJpYXQiOjE3MDEyNDIzNTIsImV4cCI6MTcwMTMyODc1Mn0.4aGT9qS9r-bT7cVHZ3A8Ouzlyw_mKU-yB99kEFs2crE'

        const res = await request(app).get('/teams').set('token', token).expect(200)

        expect(res.status).toBe(200)
        expect(res.body.teams).toBeInstanceOf(Array) 
    }) 

    it('gets a single team by ID', async()=>{
        const res = await request(app).get('/teams/41177255-ccd1-4020-b301-8209ff3650a3')

        expect(res.statusCode).toBe(200)

        expect(res.body.team).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    team_ID: expect.any(String),
                    team_Name: expect.any(String),
                    members: expect.any(String),
                    project_assigned: expect.any(String),
                    isAssigned: expect.any(Boolean)
                })
            ])
        )
    })
})