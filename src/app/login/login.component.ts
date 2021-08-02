import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegistrationserviceService } from '../registrationservice.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
// import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private _registrationService: RegistrationserviceService, private _router: Router) { }

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
      console.log(this.login.value);

      // let params = new HttpParams()

      let params = this.login.value
      //  localStorage.setItem('','toString')
      console.log("login details", params);

      this._registrationService.loginUser(params)
        .subscribe(
          result => {
            console.log("result is", result);

            if (result["status"] == false) {
              swal(result["message"]);
            }
            else {
              this.showSuccessAlert()
            }
          },
          error => {
            console.log('error', error)
          }
        )
    }
  }

  showSuccessAlert() {
    swal({
      title: "Done",
      text: "User login successfully",
      icon: "warning",
      dangerMode: true,
    })
      .then(okClick => {
        if (okClick) {
          this._router.navigate(['Home/'])
        }
      });
  }
}
