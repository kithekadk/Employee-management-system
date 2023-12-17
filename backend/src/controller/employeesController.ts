import { Request, Response } from 'express'
import mssql from 'mssql' 
import {v4} from 'uuid'
import bcrypt from 'bcrypt'
import { sqlConfig } from '../config/sqlConfig'
import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
import { LoginEmployee } from '../interfaces/employee'
import { ExtendedEmployee } from '../middleware/verifyToken'
import { loginUserSchema, registerUserSchema } from '../validators/validators'
import { isEmpty } from 'lodash'
import dbHelper from '../dbhelpers/dbhelpers'

// const dbhelper = new Connection 
 
export const registerEmployee = async(req:Request, res: Response) =>{

    try {
        let {name, email, phone_no, id_no, KRA_PIN, NHIF_NO, NSSF_NO, password} = req.body

        let {error} = registerUserSchema.validate(req.body)

        if(error){
            return res.status(404).json({error: error.details})
        }

        // const emailTaken = (await dbHelper.query(`SELECT * FROM Employees WHERE email = '${email}'`)).recordset
        // const phonenoTaken = (await dbHelper.query(`SELECT * FROM Employees WHERE phone_no = '${phone_no}'`)).recordset
        // const id_no_Taken = (await dbHelper.query(`SELECT * FROM Employees WHERE id_no = '${id_no}'`)).recordset
        // const KRA_PIN_Taken = (await dbHelper.query(`SELECT * FROM Employees WHERE KRA_PIN = '${KRA_PIN}'`)).recordset
        // const NHIF_NO_Taken = (await dbHelper.query(`SELECT * FROM Employees WHERE NHIF_NO = '${NHIF_NO}'`)).recordset
        // const NSSF_NO_Taken = (await dbHelper.query(`SELECT * FROM Employees WHERE NSSF_NO = '${NSSF_NO}'`)).recordset

        // if(!isEmpty(emailTaken)){
        //     return res.json({error: "This email is already in use"})
        // }
        // if(!isEmpty(phonenoTaken)){
        //     return res.json({error: "This phone number is taken"})
        // }
        // if(!isEmpty(id_no_Taken)){
        //     return res.json({error: "This ID number is taken"})
        // }
        // if(!isEmpty(KRA_PIN_Taken)){
        //     return res.json({error: "This KRA PIN is taken"})
        // }
        // if(!isEmpty(NHIF_NO_Taken)){
        //     return res.json({error: "This NHIF Number is taken"})
        // }
        // if(!isEmpty(NSSF_NO_Taken)){
        //     return res.json({error: "This NSSF Number is taken"})
        // }

        let employee_id = v4()

        const hashedPwd = await bcrypt.hash(password, 5)

        // const pool = await mssql.connect(sqlConfig)

        // console.log("here");
        
        // let result = await pool.request()
        // .input("employee_id", mssql.VarChar, employee_id) 
        // .input("name", mssql.VarChar, name)
        // .input("email", mssql.VarChar, email)
        // .input("phone_no", mssql.VarChar, phone_no)
        // .input("id_no", mssql.Int, id_no)
        // .input("KRA_PIN", mssql.VarChar, KRA_PIN)
        // .input("NSSF_NO", mssql.VarChar, NSSF_NO)
        // .input("NHIF_NO", mssql.VarChar, NHIF_NO) 
        // .input("password", mssql.VarChar, hashedPwd)
        // .execute('registerEmployee')

        // // console.log("here")
         
        let result = await dbHelper.execute('registerEmployee', {
            employee_id, name, email, phone_no, id_no, KRA_PIN, NHIF_NO, NSSF_NO, password: hashedPwd
        })
        
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({
                message: "Something went wrong, employee not registered"
            })
        }else{
            return res.status(200).json({
                message: 'Employee registered successfully'
            })
        }

        
        
    } catch (error) {  
        return res.json({
            error: error
        })
    }
}

export const loginEmployee = async(req:Request, res: Response) =>{
    try {  
        const {email, password} = req.body

        const {error} = loginUserSchema.validate(req.body)

        if(error){
            return res.status(422).json({error: error.message})
        }

        const pool = await mssql.connect(sqlConfig)

        let user = await (await pool.request().input("email", email).input("password", password).execute('loginEmployee')).recordset

        console.log(user);
        
        
        if(user[0]?.email  == email){
            const CorrectPwd = await bcrypt.compare(password, user[0]?.password)

            if(!CorrectPwd){   
                return res.status(401).json({
                    error: "Incorrect password"
                })
            }

            const LoginCredentials = user.map(records =>{
                const {phone_no, id_no, KRA_PIN, password, NSSF_NO, NHIF_NO, welcomed, ...rest}=records

                return rest
            })

            // console.log(LoginCredentials);

            // dotenv.config()
            const token = jwt.sign(LoginCredentials[0], process.env.SECRET as string, {
                expiresIn: '24h'
            }) 

            return res.status(200).json({
                message: "Logged in successfully", token
            })
            
        }else{
            return res.json({
                error: "Email not found"
            })
        }

    } catch (error) {
        return res.json({
            error: "Internal server error"
        })
    }
}

export const getAllEmployees = async(req:Request, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        let employees = (await pool.request().execute('fetchAllEmployees')).recordset
        // let employees = (await pool.request().query('SELECT * FROM Employees')).recordset

        return res.status(200).json({
            employees: employees
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}
export const getOneEmployees = async(req:Request, res:Response)=>{
    try {

        let id = req.params.id 

        const pool = await mssql.connect(sqlConfig)

        let employee = (await pool.request().input('employee_id',id).execute('fetchOneEmployee')).recordset
        // let employees = (await pool.request().query('SELECT * FROM Employees')).recordset

        return res.status(200).json({
            employee: employee
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const employeeStatus = async (req: Request, res:Response)=>{
    try {
        
        let {employee_id} = req.params
        let {isDeleted} = req.body

        const pool = await mssql.connect(sqlConfig)

        const result = await pool.request()
        .input("employee_id", employee_id) 
        .input("isDeleted", isDeleted)
        .execute("deleteEmployee")
        
        console.log(result);

        return res.json({message: result})

    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const checkUserDetails = async (req:ExtendedEmployee, res:Response)=>{
    
    if(req.info){

        return res.json({
            info: req.info 
        }) 
    }
    
} 