import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InputDirective } from '../input/input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-input-select',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <select [attr.role]="'selectbox'" [attr.id]="id()">
      @for (item of list(); track item) {
        <option [value]="item" (click)="onInput(item)" (keydown)="onInput(item); onKeydown($event);">
          {{ item }}
        </option>
      }
    </select>
  `,
  styleUrl: './input-select.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelect<T> extends InputDirective<T> {
  label = input<string>('');
  id = input<string>('');
  list = input<T[]>([]);
}
