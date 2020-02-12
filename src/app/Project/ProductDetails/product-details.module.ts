import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ExpiredProductsComponent } from './expired-products/expired-products.component';
import { ReturnExpiredComponent } from './return-expired/return-expired.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoredetailsComponent } from './moredetails/moredetails.component';
import { AllproductdetailsComponent } from './allproductdetails/allproductdetails.component';


@NgModule({
  declarations: [
    ExpiredProductsComponent,
    ReturnExpiredComponent,
    ProductReportsComponent,
    ManageproductComponent,
    MoredetailsComponent,
    AllproductdetailsComponent
    
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ProductDetailsModule { }
