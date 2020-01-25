import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  BaseUrl = 'http://warals1.ddns.net:8006//Api/'

  //BaseUrl='http://localhost:50394/API/'

}
