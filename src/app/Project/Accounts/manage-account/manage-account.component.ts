import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  manageaccountForm: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.manageaccountForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // username: ['', Validators.required],
      // email: ['', Validators.required],
      // password: ['', Validators.required],
      // role: ['', Validators.required]
    });
  }

}
