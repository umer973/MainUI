import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/CommonSevices/api.service';
@Injectable({
  providedIn: 'root'
})
export class AddBrandService {

  constructor(private http: HttpClient, private url: ApiService) {
  }
  postbrand(data: any) {
    return this.http.post(this.url.BaseUrl + "Brand", data);
  }

  getBrand() {
    console.log(this.url.BaseUrl + "Brand?mode=" + 0 + "&brandId=" + 0);

    return this.http.get(this.url.BaseUrl + "Brand?mode=" + 0 + "&brandId=" + 0);
  }
}