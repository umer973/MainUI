import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  BaseUrl = 'http://localhost:58138/api/'

  //BaseUrl='http://localhost:50394/API/'

}
