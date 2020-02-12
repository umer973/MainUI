import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { IGMCRoutingModule } from './igmc-routing.module';
import { MaterialModule } from '../material.module';
import { AddCategoryComponent } from '../IGMC/add-category/add-category.component';
import { AddBrandComponent } from '../IGMC/add-brand/add-brand.component';
import { AddHSNComponent } from '../IGMC/add-hsn/add-hsn.component';
import { AddDealerComponent } from '../IGMC/add-dealer/add-dealer.component';
 import { AddProductComponent } from '../IGMC/add-product/add-product.component';
// import { MatInputModule } from '@angular/material/input';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AddCategoryComponent,
    AddBrandComponent,
    AddHSNComponent,
    AddDealerComponent,
    AddProductComponent,

  ],
  imports: [
    CommonModule,
   // IGMCRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),// ToastrModule added
    BsDatepickerModule.forRoot(),
    
    
  ]
})
export class IGMCModule { }


