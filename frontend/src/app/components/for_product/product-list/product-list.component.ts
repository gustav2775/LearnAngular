import { MyProductService } from './../../../servises/myProduct.service';
import { Component, ContentChildren, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products_list

  @ContentChildren(ProductCardComponent)
  childrenArray?: ProductCardComponent

  constructor(private myProduct: MyProductService) {
    this.products_list = myProduct.products
  }
  ngOnInit() {
    this.responseProducts();
  }
  responseProducts = async () => {
    await this.myProduct.reqGet()
  }
  getProducts() {
    this.myProduct.reqGet()
  }
}
