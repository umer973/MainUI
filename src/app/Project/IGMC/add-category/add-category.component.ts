import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcategoryForm: FormGroup;
  submitted = false;

  constructor(private router:Router,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.addcategoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required]
    });

}

  get f() { return this.addcategoryForm.controls; }
  onBrandSave(){
    this.submitted = true;
    if (this.addcategoryForm.valid) {
      this.router.navigate(['/AddCategory'])
       // return;
    }
    return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addcategoryForm.value))
  }

}
