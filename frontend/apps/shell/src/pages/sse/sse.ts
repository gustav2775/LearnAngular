import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.html',
  styleUrls: ['./sse.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SseComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  messages: { message: string, ts: number }[] = [];

  form = new FormGroup({
    message: new FormControl(''),
  });

  eventSource?: EventSource;

  ngOnInit() {
    this.eventSource = new EventSource(`http://localhost:5550/sse/messages`);

    this.eventSource.onmessage = (event) => {
      const message = JSON.parse(event.data);

      this.messages = [message, ...this.messages];
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy() {
    this.eventSource?.close();
  }

  onSubmit(event: Event) {
    event.preventDefault();

    this.http
      .post('http://localhost:5550/sse/messages', { message: this.form.value.message, ts: Date.now() })
      .pipe(take(1))
      .subscribe();
  }
}
