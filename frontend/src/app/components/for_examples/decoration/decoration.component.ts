import { Component, Input, Output, OnInit, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.scss']
})

export class Decoration {
  @Input()
  text: string | undefined;

  @Input()
  title!: string;

  @Output()
  emitText = new EventEmitter<string>();

  @HostBinding()

  @HostListener('window:click',['$event.target'])
  hideModal(event:Event){}

  constructor() {}

  onEmitText(event: Event): any {
    const input = event.target as HTMLInputElement;
    this.emitText.emit(input.value);
  }
}
