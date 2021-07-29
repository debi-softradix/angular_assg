import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private router:Router) { }
  submitted = false;

  ngOnInit(): void {
  }
  registration = new FormGroup({
    Firstname: new FormControl('',Validators.required),
    Lastname: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    Confirmpassword: new FormControl('',Validators.required),
    Phonenumber: new FormControl('',Validators.required),
    Age: new FormControl('',Validators.required)
  })
  get registrationFormControl() {
    return this.registration.controls;
  
  }
  getSubmitData() {
    this.submitted = true;
    if (this.registration) {
      console.log(this.registration.value);

}
  }
}
  
