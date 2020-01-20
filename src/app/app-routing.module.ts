
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
import { AuthGuardService } from './auth-guard.service';
import { CreateAccountComponent } from './Project/Accounts/create-account/create-account.component';
import { ManageAccountComponent } from './Project/Accounts/manage-account/manage-account.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout', component: LayoutComponent,
    canActivateChild:[AuthGuardService],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'addbrand', component: AddBrandComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'adddealer', component: AddDealerComponent },
      { path: 'addhsn', component: AddHSNComponent },
      { path: 'createaccount', component: CreateAccountComponent },
      { path: 'manageaccount', component: ManageAccountComponent },
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
