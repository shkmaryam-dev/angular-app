import { ProductComponent } from './product.component';
import { FooterComponent } from './../footer/footer.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { HeaderComponent } from './../header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    // ProductComponent
    // AddProductComponent,
    // HeaderComponent,
    // SidebarComponent,
    // FooterComponent
  
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
