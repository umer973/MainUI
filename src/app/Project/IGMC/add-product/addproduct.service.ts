import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { User } from './Models/user';
import { ApiService } from 'src/app/CommonSevices/api.service';
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  constructor(private http: HttpClient, private url: ApiService) {

  }
    postproduct(data:any) {
    return this.http.post(this.url.BaseUrl + "Default", data);
  }

}
