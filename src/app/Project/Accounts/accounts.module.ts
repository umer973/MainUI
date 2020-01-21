import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AccountsRoutingModule } from './accounts-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   CreateAccountComponent,
   ManageAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
   // AccountsRoutingModule
  ]
})
export class AccountsModule { }
