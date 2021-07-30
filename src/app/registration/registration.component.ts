import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationserviceService } from '../registrationservice.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private _registrationservice: RegistrationserviceService) { }

  submitted = true;
  isPasswordMatched: boolean = false;
  passwordErrorMsg = "";
  registrationData: any;
  registrationForm:any;
  isEmailAddressValid: boolean =false;
  emailErrorMsg ="";

  ngOnInit(): void {
  }

  registration = new FormGroup({

    // registration: new FormControl('',Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    phone_no: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)

  })

  get registrationFormControl() {
    return this.registration.controls;
  }
  onBlurPassword() {
    this.passwordErrorMsg = "Password and confirm password did not match";
    if (this.registration.value.password !== this.registration.value.confirmpassword) {
      this.isPasswordMatched = true;
      // console.log('Password and confirm password did not match.');
    } else {
      this.isPasswordMatched = false;
    }
    
    this.emailErrorMsg = "Email is invalid";
    if(this.registration.value.enteremail !== this.registration.value ) {
      this.isEmailAddressValid = false;
    }
    else{
      this.isEmailAddressValid = true;
    }
  }
  

  registerUser() {
    this.submitted = false;
    if (this.registration.valid) {
      debugger
      this.registrationData = this.registration.value;
      delete this.registrationData["confirmpassword"]
      console.log("registration data is", this.registrationData)

      alert('Form submitted succesfully!!!\n check the value in browser console.')
      console.log(this.registration.value);

      this._registrationservice.registerUser(this.registrationData)
        .subscribe(
          Response => {
            this.router.navigate(['Login/'])
            console.log("response data", Response);
          },
          error => {
            console.log('error', error)
          }
        )
    }
    else {
      // alert('Error')

    }

    



    

  }
}

