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
      this.router.navigate(['/AddDealer'])

      this.adddealerarray = JSON.parse(JSON.stringify(this.adddealerForm.getRawValue()))
      console.log(this.adddealerarray, "Account Form")
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
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.adddealerForm.value))
      return;
    }

  }

}
