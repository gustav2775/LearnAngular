import { FormEditUserComponent } from './form-edit-user/form-edit-user.component';
import { ModalsComponents } from './modals/index';
import { ModalSettingComponent } from './modals/modal-setting/modal-setting.component';
import { ModalAuthComponent } from './modals/modal-auth/modal-auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { ExamplesComponents } from './examples/index';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ...ExamplesComponents,
    ...ModalsComponents,
    UserListComponent,
    NavComponent,
    FormNewUserComponent,
    TodosListComponent,
    TodoFormComponent,
    ProductListComponent,
    ProductCardComponent,
    ToolbarComponent,
    LoginFormComponent,
    FormEditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    ...ExamplesComponents,
    ...ModalsComponents,
    UserListComponent,
    NavComponent,
    FormNewUserComponent,
    TodosListComponent,
    TodoFormComponent,
    ProductListComponent,
    ProductCardComponent,
    ToolbarComponent,
    LoginFormComponent,
    ModalAuthComponent,
    FormEditUserComponent
  ]
})
export class ComponentModule { }