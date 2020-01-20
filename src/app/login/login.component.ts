import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { LoginService } from '../login.service';
import { privateEncrypt } from 'crypto';
import { LoaderService } from '../loader.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user: User = new User();
  loading: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private loaderserice: LoaderService
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });


  }
  get f() { return this.loginForm.controls; }

  onLogin() {


    if (this.loginForm.valid) {
      this.submitted = true;
      console.log(this.loginForm.valid);
      this.user.password = this.loginForm.controls.password.value;
      this.user.userName = this.loginForm.controls.username.value;
      this.user.userType = 1;
      this.user.userId = 1

      // Calling API
      this.loaderserice.show();
      this.service.postLogin(this.user).subscribe(response => {
        let result: any = response;
        console.log(result);
        if (result.StatusCode == 200) {

          if (result.Result.userName == this.user.userName && result.Result.password == this.user.password) {
            alert('Sucess')
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/layout'], { queryParams: { 'user': result.Result.userName } });
          }
          else {
            alert('Login failed')
            localStorage.setItem('isLoggedin', 'true');
          }
          this.loaderserice.hide();


        }
        else {
          alert(result)
          this.loaderserice.hide();

        }

      }, err => {
        alert('error');
        this.loaderserice.hide();

      });

    }


  }



}
