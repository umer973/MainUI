import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/CommonSevices/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddDealerService {
  constructor(private http: HttpClient, private url: ApiService) {
  }
  postdealer(data: any) {
    return this.http.post(this.url.BaseUrl + "Dealer", data);
  }

  getDealer() {
    console.log(this.url.BaseUrl + "Dealer?mode=" + 0 + "&dealerId=" + 0);

    return this.http.get(this.url.BaseUrl + "Dealer?mode=" + 0 + "&dealerId=" + 0);
  }
}
