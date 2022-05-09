import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function validLogin(c: AbstractControl) {
  let regexp = /^[a-z\d]+$/i
  if (c.value?.length > 5) {
    if (regexp.test(c?.value)) {
      return true;
    } else {
      return ['Error!!! No Valodate Regexp'];
    }
  } else {
    return ['Error!!! No Valodate Length'];
  }
}

@Directive({
  selector: '[validate-login]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: validLogin }
  ]
})

export class ValidateLoginDirective {}