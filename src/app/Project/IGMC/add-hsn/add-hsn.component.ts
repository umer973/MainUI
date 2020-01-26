import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { AddHSNService } from './add-hsn.service';
import { DialogService } from 'src/app/dialog/dialog.service';
@Component({
  selector: 'app-add-hsn',
  templateUrl: './add-hsn.component.html',
  styleUrls: ['./add-hsn.component.css']
})
export class AddHSNComponent implements OnInit {
  addhsnForm: FormGroup;
  submitted = false;
  addhsnarray = []
  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: AddHSNService, private loaderservice: LoaderService, private dialog: DialogService) { }
  ngOnInit() {
    this.addhsnForm = this.formBuilder.group({
      hsnname: ['', Validators.required]
    });
  }
  get f() { return this.addhsnForm.controls; }
  onHsnSave(){
   if (this.addhsnForm.valid) {
      this.submitted = true;
      this.addhsnarray = JSON.parse(JSON.stringify(this.addhsnForm.getRawValue()))
      console.log(this.addhsnarray, "HSN Form")
        let postDataArray: any = {
          "Mode": 0,
          "dsdata": {
            "Hsn": [this.addhsnarray]
          }
        }
        this.loaderservice.show();
        this.service.posthsn(postDataArray).subscribe(response => {
          let result: any = response;
          alert("Data saved in an Array")
          if (result.StatusCode == 200) {
            if (result.Result != null) {
              alert('Sucess')
              this.router.navigate(['/AddHsn'])
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
