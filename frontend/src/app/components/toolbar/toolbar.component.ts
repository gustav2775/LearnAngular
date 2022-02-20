import { LoginService } from './../../core/servises/myLogin.service';
import { ModalSettingComponent } from './../modals/modal-setting/modal-setting.component';
import { UsersService } from './../../core/servises/myUsers.service';
import { ModalAuthComponent } from '../modals/modal-auth/modal-auth.component';
import { Component, Inject, ViewChild, OnDestroy } from '@angular/core';
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

  constructor(public dialog: MatDialog, @Inject('loginService') private loginService:LoginService) { 
    this.isAuth = this.loginService.is_auth;
  }
  ngOnInit() {
  }
  openLogin() {
    const dialogRef = this.dialog.open(ModalAuthComponent,{panelClass: 'modal-auth'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      this.isAuth = this.loginService.is_auth;
    });
  }
  openSetting(){
    const dialogRef = this.dialog.open(ModalSettingComponent,{panelClass: 'modal-setting'});
    dialogRef.afterClosed().subscribe();
  }
  onLogout(){
    this.loginService.logout();
    this.isAuth = false;
  }
}
