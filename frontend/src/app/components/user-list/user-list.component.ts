import { UsersService } from './../../core/servises/myUsers.service';
import { IStateUser,IUser } from './../../interfaces/IUser';
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
  constructor(@Inject('myUsers') private myUsers: UsersService) {
    this.userState = this.myUsers.getUsers;
  }
  ngOnInit() {
    this.myUsers.init();
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
}
