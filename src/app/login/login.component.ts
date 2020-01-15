import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }

  onLogin()
  {
   // debugger
    //this.submitted = true;
   
   // if (this.loginForm.valid) {
      this.router.navigate(['/layout'])
       
    }
   
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  //}

}
