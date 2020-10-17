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
import { ManageproductComponent } from './Project/ProductDetails/manageproduct/manageproduct.component';
import { MoredetailsComponent } from './Project/ProductDetails/moredetails/moredetails.component';
import { ExpiredProductsComponent } from './Project/ProductDetails/expired-products/expired-products.component';
import { AddExpenseTypeComponent } from './Project/OfficeExpenses/add-expense-type/add-expense-type.component';
import { AllproductdetailsComponent } from './Project/ProductDetails/allproductdetails/allproductdetails.component';
import { AddBillComponent } from './Project/SalesPayment/add-bill/add-bill.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout', component: LayoutComponent,
    canActivateChild:[AuthGuardService],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'addbrand', component: AddBrandComponent },
      { path: 'addUser', component: AddCategoryComponent },
      { path: 'adddealer', component: AddDealerComponent },
      { path: 'addhsn', component: AddHSNComponent },
      { path: 'createaccount', component: CreateAccountComponent },
      { path: 'manageaccount', component: ManageAccountComponent },
      { path: 'manageproduct', component: ManageproductComponent },
      { path: 'moredetails', component: MoredetailsComponent },
      { path: 'expiredproducts', component: ExpiredProductsComponent },
      { path: 'addexpenses', component: AddExpenseTypeComponent },
      { path: 'allproductdetails', component: AllproductdetailsComponent },
      { path: 'addbill', component: AddBillComponent },
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
  // declarations: [MoredetailsComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
