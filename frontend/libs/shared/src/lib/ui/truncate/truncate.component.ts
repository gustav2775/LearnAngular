import {
  afterEveryRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  numberAttribute,
  signal,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { HintDirective } from '../../directives';

@Component({
  selector: 'ui-truncate',
  standalone: true,
  imports: [ HintDirective ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './truncate.component.html',
  styleUrl: './truncate.component.less',
  host: {
    '[style.--shell-line-clamp]': 'lines()',
    '[style.word-break]': 'wrap()'
  }

})
export class TruncateComponent {
  readonly lines = input(1, { transform: numberAttribute });

  readonly overflown = signal<boolean>(false);
  protected readonly wrap = computed(() => {
    return this.lines() === 1 ? 'break-all' : null;
  });

  @ViewChild('outlet', { static: true }) private outlet!: ElementRef<HTMLElement>;
  @ViewChild('hint', { static: true }) private hint!: TemplateRef<string>;

  protected readonly computedContent = computed(() => {
    return this.overflown() ? this.hint : ''
  });

  constructor() {
    afterEveryRender({
      read: () => this.update()
    });
  }

  protected update(): void {
    this.overflown.set(this.isOverflown());
  }

  private isOverflown(): boolean {
    if (!this.outlet) {
      return false;
    }

    const { scrollHeight, clientHeight } = this.outlet.nativeElement;
    return scrollHeight > clientHeight;
  }
}
