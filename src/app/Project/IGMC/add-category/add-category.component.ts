import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { AddCategoryService } from './add-category.service';
import { NotificationServiceService } from 'src/app/notification-service.service';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  userFormGroup: FormGroup;
  submitted = false;
  addcreatoryarray = [];
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
      isActive:[],
      isAdmin:[],
      dataVisibility:[]
    });

  }
  get f() { return this.userFormGroup.controls; }

  submit(event) {

    console.log(this.userFormGroup);
    this.submitted = true;
    if (this.userFormGroup.valid) {
      
      this.addcreatoryarray = JSON.parse(JSON.stringify(this.userFormGroup.getRawValue()))

      //document.getElementById('buttonSave').innerHTML = "Please wait saving user....";
      //document.getElementById('buttonSave'). = true;




      console.log(this.addcreatoryarray, "User")
      let postDataArray: any = {
        "Mode": 0,
        "dsdata": {
          "Category": [this.addcreatoryarray]
        }
      }

      console.log(postDataArray);
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
        this.notifyService.showError("Internal server error !!", "Radix");
        this.loaderservice.hide();

      });

    }
    else {
      this.submitted = false;
    }
  }
}
