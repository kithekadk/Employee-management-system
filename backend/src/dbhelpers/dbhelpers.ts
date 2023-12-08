import mssql from 'mssql'
import { sqlConfig } from '../config/sqlConfig'

export default class dbHelper{

    // private pool: Promise <mssql.ConnectionPool>

    // constructor(){
    //     this.pool = this.getConnection()
    // }

<<<<<<< HEAD
    
=======
>>>>>>> 6cfe072809d2eac56d8aeae0043e2e5e2b22c448
    // async getConnection():Promise<mssql.ConnectionPool>{
    //     const pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;

    //     return pool
    // }

    // createRequest(request: mssql.Request, data: {[c:string | number]:string | number}){
    //     const keys = Object.keys(data)

    //     keys.map((keyName)=>{
    //         const keyValue = data[keyName]
    //         request.input(keyName, keyValue)
    //     })

    //     return request
    // }

    static async query (query: string){
<<<<<<< HEAD
        let pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;
=======
        const pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;
>>>>>>> 6cfe072809d2eac56d8aeae0043e2e5e2b22c448
        const results = (await pool).request().query(query)

        return results
    }

    static async execute(procedureName: string, data:{[c:string | number]: string | number} = {}){
<<<<<<< HEAD
        let pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;

        let request = (await (await pool).request()) as mssql.Request

        for (let key in data) {
            request.input(key, data[key]);
        }

        // request = this.createRequest(request, data)
=======
        const pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;

        let request = ((await pool).request()) as mssql.Request

        // request = this.createRequest(request, data)

        for(let key in data){
            request.input(key, data[key])
        }
>>>>>>> 6cfe072809d2eac56d8aeae0043e2e5e2b22c448

        const result = await request.execute(procedureName)

        return result
    }

}