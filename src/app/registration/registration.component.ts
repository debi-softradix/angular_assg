import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationserviceService} from '../registrationservice.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,private fb:FormBuilder,private _registrationservice:RegistrationserviceService) { }

  submitted = false;
  isPasswordMatched: boolean = false;
  passwordErrorMsg = "";
  registrationData:any;

  ngOnInit(): void {
  }

  registration = new FormGroup({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)

  })

  get registrationFormControl() {
    return this.registration.controls;
  }
  onBlurPassword() {
    this.passwordErrorMsg = "Password and confirm password did not match";
    if (this.registration.value.password !== this.registration.value.confirmpassword) {
      this.isPasswordMatched = true;
      console.log('Password and confirm password did not match.');
    } else {
      this.isPasswordMatched = false;
    }
  }

  registerUser() {
    this.submitted = true;
    if (this.registration.valid) {
      alert('Form submitted succesfully!!!\n check the value in browser console.')
      console.log(this.registration.value);
      this._registrationservice.registerUser(this.registrationData)
      .subscribe(
        Response => {
          console.log('response data',Response)
        }
      )
    }
    else{
      alert('Error')

    }
    this.registrationData = this.registration.value;
     delete this.registrationData["confirmpassword"]
     console.log("registration data is",this.registrationData)
   
  }
}

