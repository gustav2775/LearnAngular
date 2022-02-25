import { Component, ContentChildren, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products_list: [] = []

  @ContentChildren(ProductCardComponent)
  childrenArray?: ProductCardComponent

  constructor() { }

  ngOnInit() {
  }

}
