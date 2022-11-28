import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ProductComponent } from './component/product/product.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './login/login.component';

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
  },
  {
    path:"addProduct",
    component: AddProductComponent
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
