import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ExpiredProductsComponent } from './expired-products/expired-products.component';
import { ReturnExpiredComponent } from './return-expired/return-expired.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';



@NgModule({
  declarations: [
    ExpiredProductsComponent,
    ReturnExpiredComponent,
    ProductReportsComponent
    
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
