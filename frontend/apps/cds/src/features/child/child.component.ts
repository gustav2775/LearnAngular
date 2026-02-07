import { afterEveryRender, ChangeDetectionStrategy, Component, input, model, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  host: {
    '[class.detection]': 'isDetection()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  number = input<number>(0);
  trigger = model<number>(0);
  isActive = signal<boolean>(false);
  isDetection = signal<boolean>(false);

  left = signal<number>(0);
  right = signal<number>(0);

  get runChangeDetection() {
    console.log('Checking the view Child №', this.number());
    return this.number();
  }

  constructor() {
    afterEveryRender({
      read: () => {
        // console.log('afterEveryRender Child №', this.number());

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
    console.log('ngDoCheck Child №', this.number());
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked Child №', this.number());
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit Child №', this.number());
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked Child №', this.number());
  }

  changeLeftTree(event: Event) {
    this.trigger.set(this.trigger() + 1);
    this.isActive.set(true);

    setTimeout(() => {
      this.isActive.set(false);
    }, 2000)

    event.preventDefault();
  }
}
