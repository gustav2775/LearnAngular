import { LoginService } from '../../../servises/myLogin.service';
import { ModalAuthComponent } from '../../modals/modal-auth/modal-auth.component';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

function validLogin(c: AbstractControl) {
  let regexp = /^[a-z\d]+$/i
  if (c.value.length > 3) {
    if (regexp.test(c?.value)) {
      return true;
    } else {
      return ['Error!!! No Valodate Regexp'];
    }
  } else {
    return ['Error!!! No Valodate Length'];
  }
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public loginForm: FormGroup;
  public auth: boolean = false;
  public errMessage: string = ''
  constructor(
    private loginService: LoginService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalAuthComponent>
  ) {
    this.loginForm = this.fb.group({
      login: ['', validLogin],
      password: ['', Validators.minLength(5)],
    })

    // обязует установить все значения
    // this.loginForm.setValue({
    //   login:'gustav2775',
    //   email: 'gustav@2775.ru',
    //   password:12345
    // })

    this.loginForm.patchValue({
      login: 'gustav2775',
    })
  }
  onLogin() {
    this.errMessage = ''
    this.loginService.login(this.loginForm.value)
      .then((res) => {
        if (res) {
          this.errMessage = res;
        } else {
          this.closeModal()
        }
      })
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
