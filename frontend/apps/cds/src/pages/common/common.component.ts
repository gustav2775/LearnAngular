import { afterEveryRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChildComponent } from '../../features/child/child.component';
import { ChildProviderComponent } from '../../features/child-provider/child-provider.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cds-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  standalone: true,
  imports: [ChildComponent, ChildProviderComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonComponent {

  isDetection = signal<boolean>(false);
  left = signal<number>(0);
  right = signal<number>(0);

  get runChangeDetection() {
    console.log('Checking the view AppComponent');

    return '';
  }

  constructor() {
    afterEveryRender({
      read: () => {
        console.log('afterEveryRender AppComponent');

        return true
      }
    })
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked AppComponent');
  }

  changeRightTree() {
    this.right.set(this.right() + 1)
  }

  changeLeftTree() {
    this.left.set(this.left() + 1)
  }
}
