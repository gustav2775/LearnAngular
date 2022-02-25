import { LoadingService } from '../../servises/myLoading.service';
import { MyProductService } from '../../servises/myProduct.service';
import { Component, OnInit, Inject, SimpleChanges } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPage implements OnInit {
  public products_list: Observable<any>

  constructor(@Inject('MyProduct') private myProduct: MyProductService, @Inject('loadingService') private LoadingService: LoadingService) {
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
