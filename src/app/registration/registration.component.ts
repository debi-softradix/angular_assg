import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegistrationserviceService } from '../registrationservice.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private _registrationservice: RegistrationserviceService) { }

  submitted = false;
  isPasswordMatched: boolean = false;
  passwordErrorMsg = "";
  registrationData: any;
  registrationForm: any;
  isEmailAddressValid: boolean = false;
  emailErrorMsg = "";

  ngOnInit(): void {
  }

  registration = new FormGroup({

    // registration: new FormControl('',Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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
      this.isPasswordMatched = false;
      // console.log('Password and confirm password did not match.');
    } else {
      this.isPasswordMatched = true;
    }

    this.emailErrorMsg = "Email is invalid";
    if (this.registration.value.email !== this.registration.value) {
      this.isEmailAddressValid = false;
    }
    else {
      this.isEmailAddressValid = true;
    }
  }

  registerUser() {
    this.submitted = true;
    if (this.registration.valid) {

      this.registrationData = this.registration.value;
      delete this.registrationData["confirmpassword"]
      console.log("registration data is", this.registrationData)

      // alert('Form submitted succesfully!!!\n check the value in browser console.')
      console.log(this.registration.value);

      this._registrationservice.registerUser(this.registrationData)
        .subscribe(
          Response => {
            console.log("response data", Response);
            if (Response["status"] == false) {

              swal(Response["message"]);
            }
            else {

              this.showSuccessAlert()
            }
            // this.router.navigate(['Login/'])
          },
          error => {
            console.log('error', error)
            swal("Error from API");
          }
        )
    }
    else {
      // alert('Error')

    }
  }

  showSuccessAlert() {
    swal({
      title: "Done",
      text: "User added successfully",
      icon: "warning",
      dangerMode: true,
    })
      .then(okClick => {
        if (okClick) {
          this.router.navigate(['Login/'])
        }
      });

  }
}

