import mssql from 'mssql'
import bcrypt from 'bcrypt'
import {v4} from 'uuid'
import { registerEmployee } from './employeesController'
import { Request, Response } from 'express'

describe ("Employee Registration", ()=>{

    beforeEach(()=>{
        
    })

    it("successfully registers an employee", async()=>{
        const req = {
            body: {
                name: "Test Test", 
                email: "test@yopmail.com", 
                phone_no: "07857646576", 
                id_no: "367577998", 
                KRA_PIN: "jgjfuy86869", 
                NHIF_NO: "NHIFT86SF", 
                NSSF_NO: "NSSFLY986D", 
                password: "12345678"
            }
        }

        let responseObj = {}

        const response: Partial<Response> = {
            json: jest.fn().mockImplementation((result)=>{
                responseObj = result
                // return res
            })
        };

        jest.mock('bcrypt', ()=>({
            hash: jest.fn().mockResolvedValue("hashedPassword_khfguhdg_dzgjdf")
        }))


        jest.mock('uuid', ()=>({
            v4: jest.fn()
        }))

        const mockedV4 = jest.requireMock('uuid').v4

        mockedV4.mockImplementation(()=> 'unique_id_dskjfgkjhf_dfkjgsj')

        const mockedInput = jest.fn().mockReturnThis() //makes it chainable

        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.mock('mssql', ()=>({
            connect: jest.fn().mockResolvedValue(mockedPool)
        }))

        await registerEmployee(req as Request, response as Response)

        // Assertions

        expect(responseObj).toEqual({message: 'Employee registered successfully'})
    })
})