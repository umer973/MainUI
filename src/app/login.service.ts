import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/user';
import { ApiService } from './CommonSevices/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private url: ApiService) {

  }
    postLogin(data:any) {
    return this.http.post(this.url.BaseUrl + "Default", data);
  }

}
