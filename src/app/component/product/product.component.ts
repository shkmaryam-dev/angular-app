import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  addProduct(){
    // this.route.navigate("/addProduct");
    this.route.navigateByUrl("dashboard")
  }
}
