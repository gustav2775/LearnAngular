import { Component, OnInit } from '@angular/core';

interface List {
  id: number;
  title: string;
}

@Component({
  selector: 'app-ngFor',
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.scss']
})

export class NgFor implements OnInit {
  list: List[] = [
    {
      id: 1,
      title: 'один'
    },
    {
      id: 2,
      title: 'два'
    },
    {
      id: 3,
      title: 'три'
    }
  ]

  constructor() { }

  generateHtml = ():string => {
    let html=''
    this.list.forEach(item => {html +=`<li data-id=${item.id}>${item.title}</li>`})
    return html
  }

  ngOnInit() {
  }

}
