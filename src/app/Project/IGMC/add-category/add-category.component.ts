import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { AddCategoryService } from './add-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcategoryForm: FormGroup;
  submitted = false;
  addcreatoryarray = [];

  constructor(private router: Router, private formBuilder: FormBuilder,private service: AddCategoryService, private loaderservice: LoaderService) { }
  ngOnInit() {
    this.addcategoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required]
    });

  }

  get f() { return this.addcategoryForm.controls; }
  onCategorySave() {

    if (this.addcategoryForm.valid) {
      this.submitted = true;
      this.router.navigate(['/AddCategory'])

      this.addcreatoryarray = JSON.parse(JSON.stringify(this.addcategoryForm.getRawValue()))
      console.log(this.addcreatoryarray, "Account Form")
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
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addcategoryForm.value))
      return;

    }
  }
}
