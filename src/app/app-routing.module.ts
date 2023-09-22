import { ProductModule } from './component/product/product.module';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ProductComponent } from './component/product/product.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './component/product/product-details/product-details.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'registration',
    loadChildren:()=>import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path:"product",
    component: ProductComponent
  //  loadChildren:()=> import('./component/product/product.module').then(p=>p.ProductModule)
  },
  {
    path:"addProduct",
    component: AddProductComponent
  },
  {
    path:"ProductDetails/1",
    component: ProductDetailsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
