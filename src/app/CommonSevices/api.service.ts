import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //BaseUrl = 'http://192.168.0.194:8006/Api/'

  BaseUrl='http://localhost:50394/API/'




}
