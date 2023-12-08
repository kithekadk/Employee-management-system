import { TestBed } from '@angular/core/testing';
import { SearchPipe } from './search.pipe';
import { Employee } from '../interfaces/employee';

describe('SearchPipe', () => {
  let pipe: SearchPipe
  let employees: Employee[] =[]

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [SearchPipe]
    })

    pipe = TestBed.inject(SearchPipe)

    employees = [
      {
        "employee_id": "0adbb3b5-dead-448f-9ca1-44f93d0e5527",
        "name": "Jane Doe",
        "email": "jane@yopmail.com",
        "phone_no": "0787556587",
        "id_no": 42347563,
        "KRA_PIN": "AD8968XKY3",
        "NHIF_NO": "868084J43",
        "NSSF_NO": "G687t9DS",
        "password": "$2b$05$S.fpxBj3qNllnIvd.sq/beDjNoP72TvaMAS.GrplxY75sFyh6qV7e",
        "role": "employee",
        "welcomed": true,
        "isDeleted": false
      },
      {
        "employee_id": "76a138de-9a6d-49e9-aca8-2a34ba3d940e",
        "name": "Cripin",
        "email": "crispin.khamala@thejitu.com",
        "phone_no": "074576562",
        "id_no": 303784563,
        "KRA_PIN": "ADjh32XXY3",
        "NHIF_NO": "00980784J43",
        "NSSF_NO": "kJ45r77n9DS",
        "password": "$2b$05$yKKUdW2HW0Z/VVXaKFOqaOPBxNpmKF8uUdpJhSBkIk6w9coeXpVP6",
        "role": "employee",
        "welcomed": true,
        "isDeleted": false
      }]
  })

  it('create an instance', () => {
    // const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms employees array based on email filter', ()=>{

      const result = pipe.transform(employees, 'jane')

      expect(result.length).toBe(1)

      expect(result[0].name).toBe('Jane Doe')
  })

  it('returns the original array when the filter is empty', () => {

    const result = pipe.transform(employees, '');

    expect(result).toEqual(employees);
  });
});
