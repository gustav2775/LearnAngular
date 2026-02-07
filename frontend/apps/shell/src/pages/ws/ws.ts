import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.html',
  styleUrls: ['./ws.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WsComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private ws = new WebSocket('ws://localhost:5552/connection');

  messages: { message: string, ts: number }[] = [];

  form = new FormGroup({
    message: new FormControl(''),
  });

  ngOnInit() {
    this.ws.onopen = () => {
      console.log('WebSocket connection opened');
    }
    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
    }
    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    }
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      console.log('onmessage', message);

      this.messages = [message, ...this.messages];
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy() {
    this.ws.close();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    this.ws.send(JSON.stringify({ message: this.form.value.message, ts: Date.now() }));
  }
}
