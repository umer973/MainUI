import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoaderService } from '../loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  userDataArray = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private loaderservice: LoaderService
  ) { }

  ngOnInit() {

    this.clear();
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });


  }
  get f() { return this.loginForm.controls; }

  onLogin() {

    if (this.loginForm.valid) {
      this.submitted = true;
      this.userDataArray = JSON.parse(JSON.stringify(this.loginForm.getRawValue()))
      let postDataArray: any = {
        "Mode": 0,
        "dsdata": {
          "User": [this.userDataArray]
        }
      }
      console.log(postDataArray)
      // Calling API
      this.loaderservice.show();
      this.service.postLogin(postDataArray).subscribe(response => {
        let result: any = response;
        console.log(result);
        if (result.StatusCode == 200) {

          if (result.Result != null) {
           // alert('Sucess')
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/layout'], { queryParams: { 'user': result.Result.userName } });
            this.clear();
          }
          else {
            alert('Login failed')
            localStorage.setItem('isLoggedin', 'true');
          }
          this.loaderservice.hide();


        }
        else {
          alert("Internal Server Error")
          this.loaderservice.hide();

        }

      }, err => {
        alert('An error occured please try again');
        this.loaderservice.hide();

      });

    }
    else {
      this.submitted = true;
    }

  }
  clear()
  {
   
  }



}
