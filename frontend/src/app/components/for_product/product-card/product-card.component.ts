import { Component, ContentChildren, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: {name:string, price:number} = {
    name: '',
    price: 0
  }
  @ContentChildren(ProductCardComponent)
  childrenArray?: ProductCardComponent

  constructor() { }

  ngOnInit() {
  }

}
