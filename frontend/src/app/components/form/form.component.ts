import { UsersService } from '../../core/servises/myUsers.service';
import { Component, SimpleChanges, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public loginForm: FormGroup;
  public auth: boolean = false;
  public regFormFirstname = 'Николай';
  public regFormLastname = 'Давыдов';
  public regFormLogin = "gustav2775";
  public regFormdEmail?: string;

  public state: { valid: boolean, valuesPrev: any[] } = {
    valid: true,
    valuesPrev: []
  };

  constructor(@Inject('myUsers') private apiUser: UsersService, public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', validLogin],
      password: ['', Validators.minLength(5)],
    })

    // обязует установить все значения
    // this.form.setValue({
    //   login:'gustav2775',
    //   email: 'gustav@2775.ru',
    //   password:12345
    // })

    // Можно устаносить часть значений
    this.loginForm.patchValue({
      login: 'gustav2775',
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  onRegistred(regForm: NgForm) {
    this.apiUser.add(regForm.value)
  }

  onLogin() {
    this.apiUser.login(this.loginForm.value)
      .then(() => { this.auth = this.apiUser.is_auth })
  }
}