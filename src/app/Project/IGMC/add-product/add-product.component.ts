import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addproductForm: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder,private loaderservice:LoaderService) { }

  ngOnInit() {
    this.addproductForm = this.formBuilder.group({
      date: null,
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


    });
  }
  get f() { return this.addproductForm.controls; }

  onSave(){
    //this.submitted = true;

    this.loaderservice.show();
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loaderservice.hide();
    }, 5000);
    
    if (this.addproductForm.valid) {
    
       // return;
    }
    
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value))
  }
  onSaveAndContinue(){
    this.submitted = true;
    if (this.addproductForm.valid) {
       return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value))
  }
}
