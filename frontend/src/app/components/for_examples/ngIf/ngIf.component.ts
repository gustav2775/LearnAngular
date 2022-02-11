import { Component, OnInit } from '@angular/core';
interface List {
  id:number;
  title:string;
  show:boolean;
  class:string|string[];
  mounting:boolean;
}
@Component({
  selector: 'app-ngIf',
  templateUrl: './ngIf.component.html',
  styleUrls: ['./ngIf.component.scss']
})
export class NgIf implements OnInit {

  list:List[] = [
    {
      id: 1,
      title: 'item 1',
      show: true,
      class: 'red',
      mounting: true,
    },
    {
      id: 2,
      title: 'item 2',
      show: false,
      class: '',
      mounting: true,
    },
    {
      id: 3,
      title: 'item 3',
      show: true,
      class: ['blue', 'bg-red'],
      mounting: true,
    },
    {
      id: 4,
      title: 'item 4',
      show: true,
      class: ['blue'],
      mounting: false,
    },
    {
      id: 5,
      title: 'item 5',
      show: true,
      class: ['blue'],
      mounting: true,
    }
  ]

  constructor() { }
  didMount(item:List) {
    item.mounting = !item.mounting
  }
  trackBy(index:number,item:List){
    return item.id
  }
  ngOnInit() {
  }

}
