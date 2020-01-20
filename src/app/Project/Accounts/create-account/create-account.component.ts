import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createaccountForm: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createaccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });

}

  get f() { return this.createaccountForm.controls; }
  onCreateAccount(){
    this.submitted = true;
    if (this.createaccountForm.valid) {
      this.router.navigate(['/CreateAccount'])
       // return;
    }
    return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createaccountForm.value))
  }
}
