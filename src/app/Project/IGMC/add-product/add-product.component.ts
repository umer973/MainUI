import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { User } from 'src/app/Models/user';
import { AddproductService } from './addproduct.service';
import { DialogService } from 'src/app/dialog/dialog.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addproductForm: FormGroup;
  submitted = false;
  addproductarray: [];

  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: AddproductService, private loaderservice: LoaderService,private dialog: DialogService) { }
  // usermodel=new User();
  // postmodal:any=this.usermodel.getModal();
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
      this.addproductarray = JSON.parse(JSON.stringify(this.addproductForm.getRawValue()))
      console.log(this.addproductForm.valid);
      let postDataArray: any = {
        "Mode": 0,
        "dsdata": {
          "Product": [this.addproductarray]
        }
      }
      this.loaderservice.show();
      this.service.postproduct(postDataArray).subscribe(response => {
        let result: any = response;
    alert("Data saved in an Array")
  if (result.StatusCode == 200) {

    if (result.Result != null) {
      alert('Sucess')
     // localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/AddProduct'])
     // this.clear();
    }
    else {
      alert('Login failed')
      localStorage.setItem('isLoggedin', 'true');
    }
    this.loaderservice.hide();


  }
  else {
    alert("Internal Server Error")
    this.loaderservice.hide();

  }

}, err => {
  alert('An error occured please try again');
  this.loaderservice.hide();

});

}
else {
  this.submitted = true;
}

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
