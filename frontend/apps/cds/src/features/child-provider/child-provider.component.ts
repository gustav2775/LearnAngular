import { afterEveryRender, ChangeDetectionStrategy, Component, Input, signal, SimpleChanges } from '@angular/core';
import { ChildConsumerComponent } from '../child-consumer/child-consumer.component';

@Component({
  selector: 'child-provider',
  standalone: true,
  templateUrl: './child-provider.component.html',
  styleUrls: ['./child-provider.component.css'],
  imports: [
    ChildConsumerComponent
  ],
  host: {
    '[class.detection]': 'isDetection()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildProviderComponent {
  isDetection = signal<boolean>(false);

  get runChangeDetection() {
    console.log('Checking the view Child Provider');
    return 'child-provider';
  }

  constructor() {
    afterEveryRender({
      read: () => {
        console.log('afterEveryRender Child Provider');

        return true
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isDetection.set(true);
    console.log('ngOnChanges Child Provider');
    setTimeout(() => {
      this.isDetection.set(false);
    }, 2000)
  }

  ngDoCheck() {
    console.log('ngDoCheck Child Provider');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Child Provider');
  }


  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Child Provider');
  }

  onClick() {}
}
