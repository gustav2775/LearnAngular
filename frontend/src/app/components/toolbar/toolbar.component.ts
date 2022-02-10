import { ModalSettingComponent } from './../modals/modal-setting/modal-setting.component';
import { UsersService } from './../../core/servises/myUsers.service';
import { ModalAuthComponent } from '../modals/modal-auth/modal-auth.component';
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isAuth?:boolean;
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog, @Inject('myUsers') private myUser:UsersService) { 
    this.isAuth = this.myUser.is_auth;
  }
  ngOnInit() {
  }
  openLogin() {
    const dialogRef = this.dialog.open(ModalAuthComponent,{panelClass: 'modal-auth'});
    dialogRef.afterClosed().subscribe(result => {
      this.isAuth = this.myUser.is_auth;
    });
  }
  openSetting(){
    const dialogRef = this.dialog.open(ModalSettingComponent,{panelClass: 'modal-setting'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  onLogout(){
    this.myUser.logout();
    this.isAuth = false;
  }
}
