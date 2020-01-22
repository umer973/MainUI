import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addproductForm: FormGroup;
  submitted = false;
  addproductarray: [];

  constructor(private router: Router, private formBuilder: FormBuilder, private loaderservice: LoaderService) { }

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
    this.addproductarray = JSON.parse(JSON.stringify(this.addproductForm.getRawValue()))
    console.log(this.addproductarray,"Product Form")
    this.loaderservice.show();
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loaderservice.hide();
    }, 5000);

    // var loadProductData:postDataInterface ={
    //   "Mode": 0,
    //   "CurdType":CurdType.create,
    //   "SaveData":{
    //     "tbladdproduct":[addproductarray]
    //   }
    // }
    if (this.addproductForm.valid) {
      this.submitted = true;
      console.log(this.addproductForm.valid);
      alert("Data saved in an Array")
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
