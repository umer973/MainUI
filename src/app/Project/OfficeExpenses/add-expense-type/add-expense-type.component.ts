import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';
import { User } from 'src/app/Models/user';
import { AddExpenseTypeService } from './add-expense-type.service';
import { DialogService } from 'src/app/dialog/dialog.service';

@Component({
  selector: 'app-add-expense-type',
  templateUrl: './add-expense-type.component.html',
  styleUrls: ['./add-expense-type.component.css']
})
export class AddExpenseTypeComponent implements OnInit {
  addexpensesForm: FormGroup;
  submitted = false;
  addexpensesarray: [];

  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: AddExpenseTypeService, private loaderservice: LoaderService,private dialog: DialogService) { }
  
  ngOnInit() {
    this.addexpensesForm = this.formBuilder.group({
      categorytype: ['', Validators.required],
      ondate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    
    });
  }
  get f() { return this.addexpensesForm.controls; }
  onAddExpenses() {
    debugger
    if (this.addexpensesForm.valid) {
      this.submitted = true;
      console.log(this.addexpensesForm.valid);
    this.addexpensesarray = JSON.parse(JSON.stringify(this.addexpensesForm.getRawValue()))
    console.log(this.addexpensesarray,"Product Form")
    this.loaderservice.show();
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loaderservice.hide();
    }, 5000);
    // this.postmodal.SaveData.tbladdproduct.push(this.addproductarray)
    // console.log(this.postmodal);
    // alert("Data saved in an Array")
      // // Calling API
      // this.loaderserice.show();
      // this.service.postLogin(this.user).subscribe(response => {
      //   let result: any = response;
      //   console.log(result);
    // var loadProductData:postDataInterface ={
    //   "Mode": 0,
    //   "CurdType":CurdType.create,
    //   "SaveData":{
    //     "tbladdproduct":[addproductarray]
    //   }
    // }
  }
    else {
      this.submitted = true;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addexpensesForm.value))
    }
    //
  }
  openExpenseCategory(){
    alert('Open Dialog Here')
  }
  
  // public openConfirmationDialog(data) {
  //   this.dialog.confirm('Delete Record', 'Do you want to delete this record. ?')
  //     .then(res => {
  //       if (res == true) {
  //         //this.onDelete(data);
  //       }
  //     });
  // }
}

