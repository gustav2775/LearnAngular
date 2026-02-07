import { Component, Input, signal, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child-router',
  standalone: true,
  templateUrl: './child-router.component.html',
  styleUrls: ['./child-router.component.css']
})
export class ChildRouterComponent{
  isDetection = signal<boolean>(false);

  get runChangeDetection() {
    console.log('Checking the view Child Router');
    return 'child-router';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isDetection.set(true);

    setTimeout(() => {
      this.isDetection.set(false);
    }, 2000)
  }

  ngDoCheck() {
    console.log('ngDoCheck Child Router');
  }

  onClick() {}
}
