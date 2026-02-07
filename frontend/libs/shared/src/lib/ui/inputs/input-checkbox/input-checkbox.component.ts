import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InputDirective } from '../input/input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-input-checkbox',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <input
      #inputRef
      type="checkbox"
      [attr.role]="'checkbox'"
      [formControl]="$any(ngControl?.control)"
      [attr.id]="id()"
      (keydown)="onKeydown($event)"
    >
    <label [attr.for]="id()">{{label()}}</label>
  `,
  styleUrl: './input-checkbox.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCheckbox extends InputDirective<boolean> {
  label = input<string>('');
  id = input<string>('');
}
