import mssql from 'mssql'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {v4} from 'uuid'
import { loginEmployee, registerEmployee } from './employeesController'
import { Request, Response } from 'express'
import dbHelper from '../dbhelpers/dbhelpers'

jest.mock("../dbhelpers/dbhelpers")

describe ("Employee Registration", ()=>{
 
    let res:any;
    

    beforeEach(()=>{
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    })

    // it("successfully registers an employee", async()=>{
    //     const req = {
    //         body: {
    //             name: "Test Test", 
    //             email: "test@yopmail.com", 
    //             phone_no: "07857646576", 
    //             id_no: "367577998", 
    //             KRA_PIN: "jgjfuy86869", 
    //             NHIF_NO: "NHIFT86SF", 
    //             NSSF_NO: "NSSFLY986D", 
    //             password: "HashedPass@word123"
    //         }
    //     }

    //     // jest.mock('bcrypt', ()=>({
    //     //     hash: jest.fn().mockResolvedValue("hashedPassword_khfguhdg_dzgjdf")
    //     // }))

    //     jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce("HashedPass@word123" as never)

    //     const mockedInput = jest.fn().mockReturnThis() //makes it chainable

    //     const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

    //     const mockedRequest = {
    //         input: mockedInput,
    //         execute: mockedExecute
    //     }

    //     const mockedPool = { 
    //         request: jest.fn().mockReturnValue(mockedRequest)
    //     }

    //     // jest.mock('mssql', ()=>({
    //     //     connect: jest.fn().mockResolvedValue(mockedPool)
    //     // }))

    //     jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

    //     await registerEmployee(req as Request, res as any)

    //     // Assertions

    //     expect(res.json).toHaveBeenCalledWith({message: 'Employee registered successfully'})
    //     expect(res.status).toHaveBeenCalledWith(200)
    //     expect(mockedInput).toHaveBeenCalledWith('password',  mssql.VarChar, 'HashedPass@word123')
    //     expect(mockedInput).toHaveBeenCalledWith('name',  mssql.VarChar, 'Test Test')
    //     expect(mockedInput).toHaveBeenCalledWith('email',  mssql.VarChar, 'test@yopmail.com')
    //     expect(mockedInput).toHaveBeenCalledWith('id_no',  mssql.Int, '367577998')
    // })

    it('registers a user using dbhelpers' , async()=>{
        const req = {
            body: {
                name: "Test Test", 
                email: "test@yopmail.com", 
                phone_no: "07857646576", 
                id_no: "367577998", 
                KRA_PIN: "jgjfuy86869", 
                NHIF_NO: "NHIFT86SF", 
                NSSF_NO: "NSSFLY986D", 
                password: "HashedPass@word123"
            }
        }

        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce("HashedPass@word123" as never);

        ((dbHelper.execute as jest.Mock)).mockResolvedValueOnce({
            rowsAffected : [1]
        })

        await registerEmployee(req as Request, res as any)

        expect(res.json).toHaveBeenCalledWith({message: 'Employee registered successfully'})
        expect(res.status).toHaveBeenCalledWith(200)
    })

})


/**
 * 
 * TESTING LOGIN FUNCTIONALITY
 * 
 */

describe ("Testing Login Functionality", ()=>{

    let res:any

    beforeEach(()=>{
        res={
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('Returns an error if email or password is empty' ,async()=>{
        const req = {
            body:{
                email: "",
                password: ""
            }
        }

        await loginEmployee(req as Request, res)

        expect(res.json).toHaveBeenCalledWith({"error": "\"email\" is not allowed to be empty"})

    })

    it('Returns an error if email or password is missing' ,async()=>{
        const req = {
            body:{
                
            }
        }

        await loginEmployee(req as Request, res)

        expect(res.json).toHaveBeenCalledWith({"error": "\"email\" is required"})

    })

    it("Returns an error if email is not in database", async()=>{
        const req = {
            body:{
                email: "incorrect@email.com",
                password: "12345678"
            } 
        }

        jest.spyOn(mssql, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({recordset: []})
        } as never)
 
        await loginEmployee(req as Request, res)

        expect(res.json).toHaveBeenCalledWith({error: "Email not found"}) 
    })

    it("Handles incorrect password scenario", async()=>{
        const req = {
            body:{
                email: "correct@email.com",
                password: "wrongPassword"
            }
        }

        jest.spyOn(mssql, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({
                recordset: [{
                    email: 'correct@email.com',
                    password: 'hashedPwd'
                }]
            })
        } as never)

        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false as never)

        await loginEmployee(req as Request, res)

        expect(res.json).toHaveBeenCalledWith({error: "Incorrect password"})
    })

    it("successfully logs in a user and returns a token", async()=>{

        let expectedUser = {
            employee_id: "0adbb3b5-dead-448f-9ca1-44f93d0e5527",
            name: "Jane Doe",
            email: "correct@email.com",
            phone_no: '0754876562',
            id_no: 363784563,
            KRA_PIN: 'ADjCC22XXY3',
            NHIF_NO: '1170784J43',
            NSSF_NO: 'ksdhu7879DS',
            password: "$2b$05$S.fpxBj3qNllnIvd.sq/beDjNoP72TvaMAS.GrplxY75sFyh6qV7e",
            role: "employee",
            welcomed: true
        }

        const req = {
            body:{
                email: expectedUser.email,
                password: "correctPassword"
            }
        }

        jest.spyOn(mssql, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({recordset: [expectedUser]})
        } as never)

        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true as never)

        jest.spyOn(jwt, 'sign').mockReturnValueOnce("generate-token-jghjg-jyiugjxz-mmhjruyiu" as never)

        await loginEmployee(req as Request, res)

        expect(res.json).toHaveBeenCalledWith({
            message: "Logged in successfully",
            token: "generate-token-jghjg-jyiugjxz-mmhjruyiu"
        }) 
    }) 
}) 