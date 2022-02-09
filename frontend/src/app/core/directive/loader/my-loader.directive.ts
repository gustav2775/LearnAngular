import { Directive, Input, Component } from '@angular/core';

export type Loaded = { type: 'loaded', data: any };
export type Loading = { type: 'loading' };
export type LoadingState = Loaded | Loading;

@Directive({
  selector: '[loader-directive]',
})

export class MyLoaderDirective {
  @Input('ifLoaded') set state(state: LoadingState) {}
  static ngTemplateGuard_state(dir: MyLoaderDirective, expr: LoadingState): expr is Loaded { return true; };
  constructor() { }
}
