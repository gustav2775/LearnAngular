
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class Binding implements OnInit {
  text: string[] = [
    'text-1',
    'text-2',
    'text-3'
  ]
  expression: boolean = false;
  isShowAngular: boolean = true;
  items:[] = [];

  constructor() {}

  onInput(event: Event): void {
    alert(`Alert enInput ${event}`)
    console.log(`PointerEvent`, event)
  }

  ngOnInit() {
  }
}
