import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../CommonSevices/main.service';
import { LoaderService } from '../loader.service';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() userId: any = 1;
  users: string[];
  constructor(private service: MainService, private loaderService: LoaderService
    , private notifyService: NotificationServiceService) { }

  ngOnInit() {

    this.loaderService.show();
    this.service.GetAllUsers(this.userId).subscribe(response => {
      let result: any = response;
      if (result.StatusCode == 200) {

        if (result != null) {
          this.notifyService.showSuccess(result.Result, 'Radix');
          this.loaderService.hide();

        }
        else {
          this.notifyService.showInfo('No user found', 'Radix');
          this.loaderService.hide();
        }
      }
      else {
        this.notifyService.showWarning(result, 'Radix');
        this.loaderService.hide();
      }
    }, err => {
      this.notifyService.showError(err, 'Radix');
      this.loaderService.hide();


    });
  }
}
