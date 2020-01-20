import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AccountsRoutingModule } from './accounts-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';



@NgModule({
  declarations: [
   CreateAccountComponent,
   ManageAccountComponent
  ],
  imports: [
    CommonModule,
   // AccountsRoutingModule
  ]
})
export class AccountsModule { }
