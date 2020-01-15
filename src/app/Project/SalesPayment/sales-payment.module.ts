import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesPaymentRoutingModule } from './sales-payment-routing.module';
import { AddBillComponent } from './add-bill/add-bill.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ReturnItemsComponent } from './return-items/return-items.component';


@NgModule({
  declarations: [
    AddBillComponent,
    SalesReportComponent,
    ReturnItemsComponent
  ],
  imports: [
    CommonModule,
    SalesPaymentRoutingModule
  ]
})
export class SalesPaymentModule { }
