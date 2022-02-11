import { Component, Input, Output, OnInit, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.scss']
})

export class Decoration implements OnInit {
  @Input()
  text: string | undefined;

  @Input()
  title!: string;

  @Output()
  emitText = new EventEmitter<string>();

  @HostBinding()

  @HostListener('window:click',['$event.target'])
  hideModal(event:Event){
    
  }
  constructor() {
    console.log(`Доступ в конструкторе  к this.text`, this.text);
  }

  onEmitText(event: Event): any {
    const input = event.target as HTMLInputElement;
    this.emitText.emit(input.value);
  }

  ngOnInit() {
    console.log(`Доступ в ngOnInit  к this.text`, this.text);
  }
}
