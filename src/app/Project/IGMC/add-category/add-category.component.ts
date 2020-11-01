import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { AddCategoryService } from './add-category.service';
import { NotificationServiceService } from 'src/app/notification-service.service';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';
import { Users } from 'src/app/Models/users.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  userFormGroup: FormGroup;
  submitted = false;
  addcreatoryarray = [];
  user: Users;
  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: AddCategoryService, private loaderservice: LoaderService,
    private dialog: DialogService, private notifyService: NotificationServiceService) { }

  ngOnInit() {
    this.service.getCategory().subscribe(
      res => {
        console.log(res);
      }
    )
    this.userFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['', Validators.required],
      isActive: [],
      isAdmin: [],
      dataVisibility: []
    });

  }
  get f() { return this.userFormGroup.controls; }

  submit(event) {
    this.userFormGroup.reset;
    this.submitted = true;
    if (this.userFormGroup.valid) {

      this.user = this.userFormGroup.getRawValue();
      console.log(this.user);
      this.loaderservice.show();
      this.service.postcategory(this.user).subscribe(response => {
        let result: any = response;

        if (result.StatusCode == 200) {
          if (result.Result != null) {
            this.notifyService.showSuccess("Data Saved", "Radix");
            // this.userFormGroup.reset();
            // localStorage.setItem('isLoggedin', 'true');
            //this.router.navigate(['/AddCategory'])
            this.clear();
            this.submitted = false;


          }
          else {
            this.notifyService.showError("Internal server error !!", "Radix");
            localStorage.setItem('isLoggedin', 'true');
          }



        }
        else {
          this.notifyService.showError("Internal server error !!", "Radix");


        }
        this.loaderservice.hide();

      }, err => {
        this.notifyService.showError("Internal server error !!", "Radix");
        this.loaderservice.hide();

      });

    }
    else {
      this.submitted = false;
    }
  }

  clear() {
    this.userFormGroup.controls.userName.setValue('');
    this.userFormGroup.controls.reset;

  }


}
