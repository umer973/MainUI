import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeExpensesRoutingModule } from './office-expenses-routing.module';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';



@NgModule({
  declarations: [
    AddExpenseTypeComponent,
    ExpensesReportComponent,
    
  ],
  imports: [
    CommonModule,
    OfficeExpensesRoutingModule
  ]
})
export class OfficeExpensesModule { }
