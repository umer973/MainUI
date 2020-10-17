import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CategoryComponent } from '../Masters/category/category.component';
import { UsersComponent } from '../users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path: 'mainpage',
    component: LayoutComponent
  },
  {path:'addcategory',component:CategoryComponent},
  {path:'addcategory',component:UsersComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
