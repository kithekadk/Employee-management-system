export interface EmployeeDetails{
    name: string,
    email: string,
    phone_no: string,
    id_no: number,
    KRA_PIN: string,
    NHIF_NO: string,
    NSSF_NO: string,
    password: string
}

export interface Employee{
    name: string,
    email: string,
    phone_no: string,
    id_no: number,
    employee_id: string,
    KRA_PIN: string,
    NHIF_NO: string,
    NSSF_NO: string,
    password: string,
    welcomed: boolean,
    role: string
    isDeleted: boolean
}