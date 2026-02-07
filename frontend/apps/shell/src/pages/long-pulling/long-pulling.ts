import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, signal, DestroyRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '@shared';
import { take } from 'rxjs';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-long-pulling',
  standalone: true,
  templateUrl: './long-pulling.html',
  styleUrls: ['./long-pulling.css'],
  imports: [
    InputTextComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LongPullingComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  private intervalId?: number;

  submitBtnDisable = false;

  messages: { message: string, ts: number }[] = [];

  form = new FormGroup({
    message: new FormControl(''),
  });

  ngOnInit() {
    this.subscribe();
    this.submitBtnDisable = false;
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  subscribe() {
    this.http.get<{ message: string, ts: number }>('http://localhost:5551/get-messages')
      .pipe(
        take(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (data) => {
          this.messages = [data, ...this.messages];
          this.submitBtnDisable = false;
          this.cdr.markForCheck();
          this.subscribe();
        },
        error: () => {
          this.intervalId = setTimeout(() => {
            this.submitBtnDisable = false;
            this.subscribe()
          }, 1000)
        }
      });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.submitBtnDisable)
      return;

    this.submitBtnDisable = true;

    this.http
      .post('http://localhost:5551/new-messages', { message: this.form.value.message, ts: Date.now() })
      .pipe(
        take(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.subscribe());
  }
}
