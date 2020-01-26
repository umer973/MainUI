import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { AddBrandService } from './add-brand.service';
import { DialogService } from 'src/app/dialog/dialog.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  addbrandForm: FormGroup;
  submitted = false;
  createbrandarray = []
  resultData = []
  search:number=5;
  searchArray=[];
  buttonMode="Save";

  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: AddBrandService, private loaderservice: LoaderService, private dialog: DialogService) { }

  ngOnInit() {

    this.getAllBrands();

    this.addbrandForm = this.formBuilder.group({
      BrandName: ['', Validators.required],
      ImagePath: [''],
      Description: ['']
    });

  }

  getAllBrands() {
    this.loaderservice.show();
    this.service.getBrand().subscribe(
      res => {
        let result: any = res;
        if (result.StatusCode == 200) {
          this.resultData = result.Result;
          console.log(this.resultData);
        }
        else {
          alert(result.StatusCode)
        }

      }, err => {

        alert('An error occurred')
      }

    )

    this.loaderservice.hide();

  }

  get f() { return this.addbrandForm.controls; }

  onBrandSave() {
    if (this.addbrandForm.valid) {
      this.submitted = true;
      this.createbrandarray = JSON.parse(JSON.stringify(this.addbrandForm.getRawValue()))
      console.log(this.createbrandarray, "Brand Form")
      let postDataArray: any = {
        "Mode": 0,
        "dsdata": {
          "Brand": [this.createbrandarray]
        }
      }
      this.loaderservice.show();
      this.service.postbrand(postDataArray).subscribe(response => {
        let result: any = response;

        if (result.StatusCode == 200) {
          if (result.Result != null) {
            alert('Data Saved')
            this.getAllBrands();

          }
          else {

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

  onEdit(index)
  {
    console.log(index);
    this.addbrandForm.controls.BrandName.setValue(index.BrandName)
    this.buttonMode="Update";
  }
  onDelete(data) {
    console.log(data);
  }

  public openConfirmationDialog(data) {
    this.dialog.confirm('Delete Record', 'Do you want to delete this record. ?')
      .then(res => {
        if (res == true) {
          this.onDelete(data);
        }
      });
  }
}

