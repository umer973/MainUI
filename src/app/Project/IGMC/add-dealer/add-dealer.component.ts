import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent implements OnInit {
  adddealerForm: FormGroup;
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.adddealerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  get f() { return this.adddealerForm.controls; }
  onDealerSave(){
    this.submitted = true;
    if (this.adddealerForm.valid) {
      this.router.navigate(['/AddDealer'])
       // return;
    }
    return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.adddealerForm.value))
  }
}
