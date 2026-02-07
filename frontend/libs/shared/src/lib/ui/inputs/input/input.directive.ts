import { Directive, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[inputRef]',
  host: {
    '[attr.aria-invalid]': 'ngControl?.invalid && (ngControl?.touched || ngControl?.dirty) ? true : false',
    '[attr.aria-disabled]': 'disabled() ? true : null',
    '[class.--invalid]': '!!ngControl?.invalid && (ngControl?.touched || ngControl?.dirty) ? true : false',
    '[class.--valid]': '!!ngControl?.valid && (ngControl?.touched || ngControl?.dirty) ? true : false',
    '[class.--touched]': '!!ngControl?.touched && (ngControl?.touched || ngControl?.dirty) ? true : false',
    '[class.--dirty]': '!!ngControl?.dirty && (ngControl?.touched || ngControl?.dirty) ? true : false',
    '[class.--focused]': 'focused()',
    '(focus)': 'onHostFocus()',
    '(blur)': 'onHostBlur()',
    'tabindex': '0'
  }
})
export class InputDirective<T> {
  readonly value = signal<T | null>(null);
  readonly disabled = signal(false);
  readonly focused = signal(false);

  @ViewChild('inputRef', { static: true }) private inputRef!: ElementRef<HTMLInputElement>;

  readonly ngControl = inject(NgControl, { optional: true, self: true });

  private onChange: (value: T | null) => void = () => {};
  private onTouched: () => void = () => {};
  private validatorChange?: () => void;

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: T | null): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(value: T): void {
    this.value.set(value);
    this.onChange(this.value());
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      const form = (this.inputRef?.nativeElement as HTMLInputElement)?.form;
      form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
  }

  onHostFocus(): void {
    this.focused.set(true);
    this.focusNativeInput();
  }

  onHostBlur(): void {
    this.focused.set(false);
    this.onTouched();
  }

  private focusNativeInput(): void {
    this.inputRef?.nativeElement?.focus();
  }
}

