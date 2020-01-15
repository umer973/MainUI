import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hsn',
  templateUrl: './add-hsn.component.html',
  styleUrls: ['./add-hsn.component.css']
})
export class AddHSNComponent implements OnInit {
  addhsnForm: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addhsnForm = this.formBuilder.group({
      brandname: ['', Validators.required]
    });

  }

  get f() { return this.addhsnForm.controls; }
  onHsnSave(){
    this.submitted = true;
    if (this.addhsnForm.valid) {
      this.router.navigate(['/AddHsn'])
       // return;
    }
    return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addhsnForm.value))
  }

}
