import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../CommonSevices/main.service';
import { LoaderService } from '../loader.service';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  userId: any;

  constructor(private route: Router, private service: MainService
    , private loaderService: LoaderService, private notifyService: NotificationServiceService) { }


  ngOnInit() {
    this.userId= localStorage.getItem('UserId');
    this.getAllUsers();
  }
  addNewUser() {
    this.route.navigate(['layout/addUser']);
  }

  getAllUsers() {
    this.loaderService.show();
    this.service.GetAllUsers(this.userId).subscribe(response => {
      let result: any = response;
      if (result.StatusCode == 200) {

        if (result != null) {
          
          this.loaderService.hide();
          this.users=result.Result;
          console.log(this.users);

        }
        else {
          //this.notifyService.showInfo('No user found', 'Radix');
          this.loaderService.hide();
        }
      }
      else {
        this.notifyService.showWarning(result.Result, 'Radix');
        this.loaderService.hide();
      }
    }, err => {
      this.notifyService.showError(err, 'Radix');
      this.loaderService.hide();


    });
  }

  ViewDetails(Userdata:any)
  {
     //console.log(data);
     //this.route.navigate(['layout/addUser'],{ queryParams: { 'userData': data } });
     this.route.navigate(['layout/addUser'], {state: {data:Userdata }});
     
  }
}
