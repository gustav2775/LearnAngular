import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-wrap',
  templateUrl: './decorator-wrap.component.html',
  styleUrls: ['./decorator-wrap.component.scss']
})
export class DecoratorWrap implements OnInit {
  title = 'add text on app.component';

  onEmitText(event: string): any {
    this.title = event
  }
  
  constructor() { }

  ngOnInit() {
  }

}
