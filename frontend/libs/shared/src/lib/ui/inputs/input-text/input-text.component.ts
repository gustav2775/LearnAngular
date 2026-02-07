import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from '../input/input.directive';

@Component({
  selector: 'ui-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <input
      [formControl]="$any(ngControl?.control)"
      [attr.type]="type()"
      [attr.placeholder]="placeholder()"
      [attr.role]="'textbox'"
      [disabled]="disabled()"
      [value]="value() ?? ''"
      (input)="onInput($any($event.target).value)"
      (keydown)="onKeydown($event)"
      (focus)="onHostFocus()"
      (blur)="onHostBlur()"
    />
  `,
  styleUrl: './input-text.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends InputDirective<string> {
  readonly type = input('text');
  readonly placeholder = input<string | null>(null);
}

