import { MyProductService } from '../../core/servises/myProduct.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPage implements OnInit {
  products_list: [] = []

  constructor(@Inject('MyProduct') private myProduct: MyProductService) { }

  ngOnInit() {
    this.responseProducts();
    this.getProducts()
  }
  responseProducts =  async () => {
    await this.myProduct.reqGet()
  }
  getProducts () {
    this.products_list = this.myProduct.getProducts
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('1111111', 1111111);
  }
}
