import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { AddBrandService } from './add-brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  addbrandForm: FormGroup;
  submitted = false;
  createbrandarray = []

  constructor(private router: Router, private formBuilder: FormBuilder, private service: AddBrandService, private loaderservice: LoaderService) { }

  ngOnInit() {
    this.addbrandForm = this.formBuilder.group({
      brandname: ['', Validators.required]
    });

  }

  get f() { return this.addbrandForm.controls; }
  onBrandSave() {
    if (this.addbrandForm.valid) {
      this.submitted = true;
      this.router.navigate(['/AddBrand'])
      this.createbrandarray = JSON.parse(JSON.stringify(this.addbrandForm.getRawValue()))
      console.log(this.createbrandarray, "Account Form")
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
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addbrandForm.value))
      return;

    }
  }
}

