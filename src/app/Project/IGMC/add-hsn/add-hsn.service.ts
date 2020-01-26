import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/CommonSevices/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddHSNService {
  constructor(private http: HttpClient, private url: ApiService) {
  }
  posthsn(data: any) {
    return this.http.post(this.url.BaseUrl + "Hsn", data);
  }

  getHsn() {
    console.log(this.url.BaseUrl + "Hsn?mode=" + 0 + "&hsnId=" + 0);

    return this.http.get(this.url.BaseUrl + "Hsn?mode=" + 0 + "&hsnId=" + 0);
  }
}
