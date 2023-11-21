import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { EmployeeDetails } from '../../../interfaces/employee';
import { APIService } from '../../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registrationForm!: FormGroup

  constructor(private authService: AuthService, private fb:FormBuilder, private apiService: APIService){
    // this.registrationForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   phone_no: new FormControl('', [Validators.required]),
    //   id_no: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //   KRA_PIN: new FormControl('', [Validators.required]),
    //   NHIF_NO: new FormControl('', [Validators.required]),
    //   NSSF_NO: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required]),
    // })

    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required]],
      id_no: [[Validators.required]],
      KRA_PIN: ['', [Validators.required]],
      NHIF_NO: ['', [Validators.required]],
      NSSF_NO: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    
    // this.registrationForm.get('phone_no')?.valueChanges.subscribe(res=>{
    //   this.registrationForm.get('phone_no')?.value

    //   let number:number =  (this.registrationForm.get('phone_no')?.value);

    //   return number.toString()
    // })
  }

  createEmployee(){
    console.log(this.registrationForm.value);


    let details: EmployeeDetails = this.registrationForm.value
    
    // this.authService.registerEmployee(details)
    this.apiService.createEmployee(details)
  }
}
