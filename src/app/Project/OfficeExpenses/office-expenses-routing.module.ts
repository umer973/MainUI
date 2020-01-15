import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';



const routes: Routes = [
  {
    path: 'expensestype',
    component: AddExpenseTypeComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeExpensesRoutingModule { }
