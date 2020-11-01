import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/CommonSevices/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {
  constructor(private http: HttpClient, private url: ApiService) {
  }
  postcategory(data: any) {
    return this.http.post(this.url.BaseUrl + "CreateUser", data);
  }

  getCategory() {
    console.log(this.url.BaseUrl + "Category?mode=" + 0 + "&categoryId=" + 0);

    return this.http.get(this.url.BaseUrl + "Category?mode=" + 0 + "&categoryId=" + 0);
  }
}
