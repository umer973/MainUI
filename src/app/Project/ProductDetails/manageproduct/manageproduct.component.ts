import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

  manageproductForm: FormGroup;
  submitted = false;

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.manageproductForm = this.formBuilder.group({
      fromdate: ['', Validators.required],
      todate: ['', [Validators.required]],

    });
  }
  get f() { return this.manageproductForm.controls; }

  onSearch(){
    this.submitted = true;
    if (this.manageproductForm.valid) {
       return;
    }
    else
    {
      this.submitted=true;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.manageproductForm.value))
    }
  }

}
