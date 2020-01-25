import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeExpensesRoutingModule } from './office-expenses-routing.module';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'src/app/dialog/dialog.service';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker/public_api';



@NgModule({
  declarations: [
    AddExpenseTypeComponent,
    ExpensesReportComponent,
    
  ],
  imports: [
    CommonModule,
    OfficeExpensesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // BsDatepickerModule.forRoot()
  ],
  providers: [DialogService]
})
export class OfficeExpensesModule { }
