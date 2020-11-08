import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(private http: HttpClient, private url: ApiService) {

    }
    GetAllUsers(userId: any) {
        return this.http.get(this.url.BaseUrl + "GetUsers?userId=" + userId);
    }

}
