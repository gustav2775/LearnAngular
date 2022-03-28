import { ModalAuthComponent } from '../../modals/modal-auth/modal-auth.component';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../servises/myUsers.service';
import { Component, SimpleChanges, Inject } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';

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
  selector: 'new-user-form',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.scss']
})
export class FormNewUserComponent {
  public regFormFirstname = 'Николай';
  public regFormLastname = 'Давыдов';
  public regFormdEmail?: string;

  public state: { valid: boolean, valuesPrev: any[] } = {
    valid: true,
    valuesPrev: []
  };

  constructor(@Inject('myUsers') private apiUser: UsersService, public dialogRef: MatDialogRef<ModalAuthComponent>) {
  }
  onRegistred(regForm: NgForm): void {
    this.apiUser.add(regForm.value)
      .then(() => this.closeModal())
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}