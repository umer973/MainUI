import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addproductForm: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addproductForm = this.formBuilder.group({
      title: ['', Validators.required],
      costprice: ['', [Validators.required]],
      sellingprice: ['', [Validators.required]],
      cgst: ['', [Validators.required]],
      sgst: ['', [Validators.required]],
      category: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      pieces: [''],
      expirydate: [''],
      hsn: [''],
      weight: [''],

    });
  }
  get f() { return this.addproductForm.controls; }
  onSave(){
    this.submitted = true;
    
    if (this.addproductForm.valid) {
      this.router.navigate(['/AddProduct'])
       // return;
    }
    return;
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
