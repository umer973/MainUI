import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { User } from 'src/app/Models/user';
import { AddproductService } from './addproduct.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addproductForm: FormGroup;
  submitted = false;
  addproductarray: [];

  constructor(private router: Router, private formBuilder: FormBuilder,private service: AddproductService, private loaderservice: LoaderService) { }
  usermodel=new User();
  postmodal:any=this.usermodel.getModal();
  ngOnInit() {
    this.addproductForm = this.formBuilder.group({
      title: ['', Validators.required],
      costprice: ['', [Validators.required]],
      sellingprice: ['', [Validators.required]],
      cgst: ['', [Validators.required]],
      sgst: ['', [Validators.required]],
      category: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      pieces: ['', [Validators.required]],
      expirydate: ['', [Validators.required]],
      hsn: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      image: ['', [Validators.required]],
      companydiscount:[]

    });
  }
  get f() { return this.addproductForm.controls; }

  onSave() {
    //this.submitted = true;
    debugger
    if (this.addproductForm.valid) {
      this.submitted = true;
      console.log(this.addproductForm.valid);
    
    this.addproductarray = JSON.parse(JSON.stringify(this.addproductForm.getRawValue()))
    console.log(this.addproductarray,"Product Form")
    this.loaderservice.show();
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loaderservice.hide();
    }, 5000);

    this.postmodal.Mode=1
    this.postmodal.CurdType="Insert",
    this.postmodal.SaveData.tbladdproduct.push(this.addproductarray)
    console.log(this.postmodal);
    alert("Data saved in an Array")
    
      // // Calling API
      // this.loaderserice.show();
      // this.service.postLogin(this.user).subscribe(response => {
      //   let result: any = response;
      //   console.log(result);
    // var loadProductData:postDataInterface ={
    //   "Mode": 0,
    //   "CurdType":CurdType.create,
    //   "SaveData":{
    //     "tbladdproduct":[addproductarray]
    //   }
    // }
  }
    else {
      this.submitted = true;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value))
  }
  onSaveAndContinue() {
    this.submitted = true;
    if (this.addproductForm.valid) {
      return;
    }
    else {
      this.submitted = true;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value))
    }
  }
}
