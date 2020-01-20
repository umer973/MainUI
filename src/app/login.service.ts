import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:any = 'http://localhost:60040/Api/Login'
  
  //url:any='http://192.168.0.194:8006/Api/Login'
  

  constructor(private http: HttpClient) { }

  getLogin() {

    return this.http.get(this.url);
  }
  postLogin(body:User)
  {
    return this.http.post(this.url,body);
  }

}
