import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //BH2WebAPI
  //private _loginUrl = "http://localhost:5400/api//SysNhanVien/login";
  private _loginUrl = "http://localhost/BH2WebAPI/api/SysNhanVien/login";

  constructor(
    private http: HttpClient
  ) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
