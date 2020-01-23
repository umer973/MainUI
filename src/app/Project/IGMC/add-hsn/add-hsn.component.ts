import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { AddHSNService } from './add-hsn.service';

@Component({
  selector: 'app-add-hsn',
  templateUrl: './add-hsn.component.html',
  styleUrls: ['./add-hsn.component.css']
})
export class AddHSNComponent implements OnInit {
  addhsnForm: FormGroup;
  submitted = false;
  addhsnarray = []
  constructor(private router: Router, private formBuilder: FormBuilder,private service: AddHSNService, private loaderservice: LoaderService) { }

  ngOnInit() {
    this.addhsnForm = this.formBuilder.group({
      hsnname: ['', Validators.required]
    });

  }

  get f() { return this.addhsnForm.controls; }
  onHsnSave(){
   
    if (this.addhsnForm.valid) {
      this.submitted = true;
      this.router.navigate(['/AddHsn'])
      this.addhsnarray = JSON.parse(JSON.stringify(this.addhsnForm.getRawValue()))
      console.log(this.addhsnarray, "Account Form")
      this.loaderservice.show();
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.loaderservice.hide();
      }, 5000);
  
      // Calling API
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
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addhsnForm.value))
    return;

  }

}}
