import { afterEveryRender, ChangeDetectionStrategy, Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-consumer',
  standalone: true,
  templateUrl: './child-consumer.component.html',
  styleUrls: ['./child-consumer.component.css'],
  host: {
    '[class.detection]': 'isDetection()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildConsumerComponent {
  isDetection = signal<boolean>(false);

  get runChangeDetection() {
    console.log('Checking the view Child Consumer');
    return ' child-consumer';
  }

  constructor() {
    afterEveryRender({
      read: () => {
        console.log('afterEveryRender Child Consumer');

        return true
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isDetection.set(true);

    setTimeout(() => {
      this.isDetection.set(false);
    }, 2000)
  }

  ngDoCheck() {
    console.log('ngDoCheck Child Consumer');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Child Consumer');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Child Consumer');
  }

  onClick() {}
}
