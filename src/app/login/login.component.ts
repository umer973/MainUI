import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoaderService } from '../loader.service';
import { NotificationServiceService } from '../notification-service.service';
import { Users } from '../Models/users.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  user: Users;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private loaderservice: LoaderService,
    private notificationService:NotificationServiceService
  ) { }

  ngOnInit() {

    this.clear();
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });


  }
  get f() { return this.loginForm.controls; }

  login() {
    debugger;

    if (this.loginForm.valid) {
      this.submitted = true;
      this.user = this.loginForm.getRawValue();
      this.user.email="";
      this.user.contactNo="";
      


      // Calling API
      this.loaderservice.show();
      this.service.postLogin(this.user).subscribe(response => {
        let result: any = response;
        console.log(result);
        if (result.StatusCode == 200) {

          if (result.Result.length>0) {
            // alert('Sucess')
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/layout'], { queryParams: { 'user': result.Result.userName } });
            this.clear();
          }
          else {
            this.notificationService.showInfo("Invalid login ", "Radix")
            localStorage.setItem('isLoggedin', 'true');
          }
         


        }
        else {
          this.notificationService.showError("Internal server error", "Radix")
          
          

        }

      }, err => {
        this.notificationService.showError("Internal server error", "Radix");
        this.loaderservice.hide();

      },);
      

    }
    else {
      this.submitted = true;
    }

  }
  clear() {

  }



}
