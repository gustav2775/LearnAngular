import { IUser } from '../../../interfaces/IUser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../../servises/myUsers.service';
import { Component, Inject, } from '@angular/core';

@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.scss']
})
export class FormEditUserComponent{
  editForm: FormGroup;
  constructor(
    @Inject('myUsers') private apiUser: UsersService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<FormEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public userRef: IUser
  ) {
    this.editForm = this.fb.group({
      fullname: this.fb.group({
        first: [userRef.fullname.first],
        last: [userRef.fullname.last],
        }),
      email: [userRef.email, Validators.minLength(6)],
    })
  }
  onEdit() {
    this.apiUser.update(this.userRef,this.editForm.value)
      .then(() => { 
        this.closeModal() 
      })
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
