import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  addbrandForm: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addbrandForm = this.formBuilder.group({
      brandname: ['', Validators.required]
    });

}

  get f() { return this.addbrandForm.controls; }
  onBrandSave(){
    this.submitted = true;
    if (this.addbrandForm.valid) {
      this.router.navigate(['/AddBrand'])
       // return;
    }
    return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addbrandForm.value))
  }
}
