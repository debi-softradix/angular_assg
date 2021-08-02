import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor (private _http:HttpClient) { }

  registerUser(data:any){
    let url = "http://localhost:3030/add";
    return this._http.post<any>(url,data)
  }

  loginUser(data:any) {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
  });

    let url1 = "http://localhost:3030/login";
    return this._http.post<any>(url1,data); 

  }
  

}
