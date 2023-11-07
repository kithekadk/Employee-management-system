import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup

  constructor(private authService: AuthService, private fb:FormBuilder){
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
      id_no: [[Validators.required, Validators.min(8)]],
      KRA_PIN: ['', [Validators.required]],
      NHIF_NO: ['', [Validators.required]],
      NSSF_NO: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  createEmployee(){
    console.log(this.registrationForm);
    // this.authService.registerEmployee(this.registrationForm.value)
  }
}
