import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor (private _http:HttpClient) { }
  registerUser(data:any){
    let url = "http://localhost:3000/users/";
    return this._http.post<any>(url,data)
  }

}
