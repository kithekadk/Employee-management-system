import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { APIService } from './api.service';

describe('APIService', () => {
  let service: APIService; 
  let httpMock : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [APIService]
    });
    service = TestBed.inject(APIService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should get Employees', () => {
    const mockEmployees = {
      employees: [
        {
          employee_id: "0adbb3b5-dead-448f-9ca1-44f93d0e5527",
          name: "Jane Doe",
          email: "jane@yopmail.com",
          phone_no: "0787556587",
          id_no: 42347563,
          KRA_PIN: "AD8968XKY3",
          NHIF_NO: "868084J43",
          NSSF_NO: "G687t9DS",
          password: "$2b$05$S.fpxBj3qNllnIvd.sq/beDjNoP72TvaMAS.GrplxY75sFyh6qV7e",
          role: "employee",
          welcomed: true,
          isDeleted: false
        },
        {
          employee_id: "0adbb3b5-dead-448f-9ca1-44f93d0e5527",
          name: "Jane Doe",
          email: "jane@yopmail.com",
          phone_no: "0787556587",
          id_no: 42347563,
          KRA_PIN: "AD8968XKY3",
          NHIF_NO: "868084J43",
          NSSF_NO: "G687t9DS",
          password: "$2b$05$S.fpxBj3qNllnIvd.sq/beDjNoP72TvaMAS.GrplxY75sFyh6qV7e",
          role: "employee",
          welcomed: true,
          isDeleted: true
        }
    ] 
    }

    service.getEmployees().subscribe(res=>{
      expect(res).toEqual(mockEmployees)
    })

    const req = httpMock.expectOne('http://localhost:4400/employee');
    expect(req.request.method).toBe('GET')
  });

  it('should create an employee', ()=>{
    let mockEmployee ={
        name: "Daniel Kitheka",
        email: "daniel09@yopmail.com",
        phone_no: "750079564",
        id_no: 39744563,
        KRA_PIN: "AJF792XXY3",
        NHIF_NO: "NHIF997H43",
        NSSF_NO: "NSS88N9DS",
        password: "12345678"
    }

    service.createEmployee(mockEmployee).subscribe(res=>{
      expect(res).toEqual({"message": "Employee registered successfully"})
    })

    const req = httpMock.expectOne('http://localhost:4400/employee/register');
    expect(req.request.method).toEqual('POST')
    expect(req.request.body).toBe(mockEmployee)

    req.flush({"message": "Employee registered successfully"})
  })
}); 
