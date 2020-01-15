
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './Project/IGMC/add-product/add-product.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout', component: LayoutComponent,
    children: [
      { path: 'addproduct', component: AddProductComponent },
      { path: 'dash', component: DashboardComponent },
     // { path: '', redirectTo: '/dash', pathMatch: 'full' },

    ]
  },
  // { path: 'addproduct', component: AddProductComponent},
  // {path:'l', loadChildren:'./Project/IGMC/IGMC.module#IGMCRoutingModule'}
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
