import { ModalUserEditComponent } from '../../modals/modal-user-edit/modal-user-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../../servises/myUsers.service';
import { IStateUser,IUser } from '../../../models/IUser';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userState: IStateUser = {
    users: [],
    nextPage: false,
  }
  constructor(@Inject('myUsers') private myUsers: UsersService,public dialog: MatDialog) {
    this.userState = this.myUsers.getUsers;
  }
  ngOnInit() {
    this.userState.users.length === 0 && this.myUsers.init();
  }
  trackByUser(index: number, user: IUser): number {
    return user.id
  }
  nextPage = () => {
    this.myUsers.nextPage
    this.userState = this.myUsers.getUsers;
  }
  deleteUser(user: IUser): void {
    this.myUsers.delete(user)
    this.userState = this.myUsers.getUsers;
  }
  openEditor(user:IUser) {
    const dialogRef = this.dialog.open(ModalUserEditComponent,{panelClass: 'modal-wrap',data:user});
  }
}
