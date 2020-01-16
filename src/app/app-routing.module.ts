
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './Project/IGMC/add-product/add-product.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AddBrandComponent } from './Project/IGMC/add-brand/add-brand.component';
import { AddCategoryComponent } from './Project/IGMC/add-category/add-category.component';
import { AddDealerComponent } from './Project/IGMC/add-dealer/add-dealer.component';
import { AddHSNComponent } from './Project/IGMC/add-hsn/add-hsn.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'addbrand', component: AddBrandComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'adddealer', component: AddDealerComponent },
      { path: 'addhsn', component: AddHSNComponent },
     

    ]
  },

  {
    path: 'igmc',
    loadChildren: () => import('./Project/IGMC/igmc.module').then(mod => mod.IGMCModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
