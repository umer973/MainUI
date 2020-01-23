import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { CreateAccountService } from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createaccountForm: FormGroup;
  submitted = false;
  createaccountarray:[];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: CreateAccountService,
    private loaderservice: LoaderService) { }

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
   
    if (this.createaccountForm.valid) {
        this.submitted = true;
        console.log(this.createaccountForm.valid);
      
      this.submitted = true;
      this.router.navigate(['/CreateAccount'])
      this.createaccountarray = JSON.parse(JSON.stringify(this.createaccountForm.getRawValue()))
    console.log(this.createaccountarray,"Account Form")
    this.loaderservice.show();
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loaderservice.hide();
    }, 5000);

      // // Calling API
      // this.loaderserice.show();
      // this.service.postLogin(this.user).subscribe(response => {
      //   let result: any = response;
      //   console.log(result);
    // this.postmodal.Mode=1
    // this.postmodal.CurdType="Insert",
    // this.postmodal.SaveData.tbladdproduct.push(this.createaccountarray)
    // console.log(this.postmodal);
    alert("Data saved in an Array")
    
    }
    else {
      this.submitted = true;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createaccountForm.value))
        return;
   
  }}
}
