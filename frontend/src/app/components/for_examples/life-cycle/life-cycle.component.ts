import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycle implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy {

  @Input()
  private refText = ''
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  ngOnInit() {
  }
  ngDoCheck() {
  }
  // ContentChild нужен для доступа к элементам в ng-content внутри дочерних компонентов.
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
  }
}
