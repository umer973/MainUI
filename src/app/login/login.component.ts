import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user:User = new User();
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  
  }
  get f() { return this.loginForm.controls; }

  onLogin() {

    
    this.user.userName=this.loginForm.controls.username;
    console.log(this.user.userName.value);
    this.router.navigate(['/layout'], { queryParams: { "user": this.user.userName.value} });

  }



}
