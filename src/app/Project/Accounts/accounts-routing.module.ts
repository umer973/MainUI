import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';


const routes: Routes = [
  {
    path: 'createaccount',
    component: CreateAccountComponent
  },
  {
    path: 'manageaccount',
    component: ManageAccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
