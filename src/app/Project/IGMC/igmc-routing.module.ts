import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddHSNComponent } from './add-hsn/add-hsn.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'addbrand',
    pathMatch: 'full'
  },
  {
    path: 'addbrand',
    component: AddBrandComponent
  },
  {
    path: 'addcategory',
    component: AddCategoryComponent
  },
  {
    path: 'addproduct',
    component: AddProductComponent
  },
  {
    path: 'addhsn',
    component: AddHSNComponent
  },
  {
    path: 'adddealer',
    component: AddDealerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IGMCRoutingModule { }
