import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  submitted = false;

  ngOnInit(): void {
  }
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get loginFormControl() {
    return this.login.controls;
  }
  loginUser() {
    this.submitted = true;
    if (this.login.valid) {
      alert('Form submitted succesfully!!!\n check the value in browser console.')
      console.log(this.login.value);

    }
  }
}
