import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const routes : Routes = [
  {
    path:'',
    component: ProductComponent
  },
  {
    path:'addProduct',
    component: AddProductComponent
  }
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ProductRoutingModule{}
