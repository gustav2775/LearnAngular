import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { InputCheckbox, InputTextComponent } from '@shared';
import { ApiAuthService } from '@api';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputCheckbox,
  ],
  providers: [ApiAuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthDialogComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private apiAuthService = inject(ApiAuthService);

  authForm: FormGroup;

  constructor() {
    this.authForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required],
      isRegistry: false,
      select: '1'
    });
  }

  onSubmit(e?: Event) {
    console.log(e);

    if (this.authForm.get('isRegistry')?.value) {
      this.registry();
    } else {
      this.login();
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSet(v: any) {
    console.log(v);
  }


  private registry(): void {
    if (this.authForm.valid)
      this.apiAuthService.registry(this.authForm.value)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigate(['/welcome']);
        });
  }

  private login(): void {
    if (this.authForm.valid)
      this.apiAuthService.login(this.authForm.value)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigate(['/welcome']);
        });
  }
}
