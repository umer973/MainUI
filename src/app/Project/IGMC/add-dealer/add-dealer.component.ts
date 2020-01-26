import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { AddDealerService } from './add-dealer.service';
@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent implements OnInit {
  adddealerForm: FormGroup;
  submitted = false;
  adddealerarray = [];
  constructor(private router: Router, private formBuilder: FormBuilder,private service: AddDealerService, private loaderservice: LoaderService) {
    
   }

  ngOnInit() {

    this.adddealerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  get f() { return this.adddealerForm.controls; }
  onDealerSave() {
    if (this.adddealerForm.valid) {
      this.submitted = true;
      this.adddealerarray = JSON.parse(JSON.stringify(this.adddealerForm.getRawValue()))
      console.log(this.adddealerarray, "Account Form")
      let postDataArray: any = {
        "Mode": 0,
        "dsdata": {
          "Dealer": [this.adddealerarray]
        }
      }
      this.loaderservice.show();
      this.service.postdealer(postDataArray).subscribe(response => {
        let result: any = response;
        alert("Data saved in an Array")
        if (result.StatusCode == 200) {
          if (result.Result != null) {
            alert('Sucess')
            this.router.navigate(['/AddDealer'])
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
