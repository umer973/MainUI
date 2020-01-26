import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { DialogService } from 'src/app/dialog/dialog.service';
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
  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: AddCategoryService, private loaderservice: LoaderService, private dialog: DialogService) { }
 ngOnInit() {
  this.service.getCategory().subscribe(
    res => {
      console.log(res);
    }
  )
    this.addcategoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required],
      imagepath: [''],
      description: ['']
    });

  }
  get f() { return this.addcategoryForm.controls; }
  onCategorySave() {
    if (this.addcategoryForm.valid) {
      this.submitted = true;
      this.addcreatoryarray = JSON.parse(JSON.stringify(this.addcategoryForm.getRawValue()))
      console.log(this.addcreatoryarray, "Account Form")
      let postDataArray: any = {
        "Mode": 0,
        "dsdata": {
          "Category": [this.addcreatoryarray]
        }
      }
      this.loaderservice.show();
        this.service.postcategory(postDataArray).subscribe(response => {
          let result: any = response;
          alert("Data saved in an Array")
          if (result.StatusCode == 200) {
            if (result.Result != null) {
              alert('Sucess')
              // localStorage.setItem('isLoggedin', 'true');
              this.router.navigate(['/AddCategory'])
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
}
