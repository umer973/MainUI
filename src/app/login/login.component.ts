import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user: User = new User();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


  }
  get f() { return this.loginForm.controls; }

  onLogin() {


    this.user.password = this.loginForm.controls.password.value;
    this.user.userName = this.loginForm.controls.username.value;
    this.user.userType = 1;
    this.user.userId = 1

    console.log(this.user);

    this.service.postLogin(this.user).subscribe(response => {
      let result: any = response;
      console.log(result);
      if (result.StatusCode == 200) {
        console.log(result.response);
        this.router.navigate(['/layout'], { queryParams: { "user": this.user.userName.value } });

      }
      else {
        console.log(result.StatusCode)
      }

    }, err => {
      console.log(err);
    });




  }



}
