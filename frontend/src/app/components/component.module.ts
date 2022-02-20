import { PipeModule } from './../core/pipes/pipes.module';
import { TransformInSvg } from './../core/pipes/transform-in-svg.pipe';
import { TransformFormatPricePipe } from './../core/pipes/transformFormatPrice.pipe';
import { FormEditUserComponent } from './for_user/form-edit-user/form-edit-user.component';
import { ModalsComponents } from './modals/index';
import { ModalAuthComponent } from './modals/modal-auth/modal-auth.component';
import { LoginFormComponent } from './for_user/login-form/login-form.component';
import { ProductCardComponent } from './for_product/product-card/product-card.component';
import { ProductListComponent } from './for_product/product-list/product-list.component';
import { TodoFormComponent } from './for_todo/todo-form/todo-form.component';
import { TodosListComponent } from './for_todo/todos-list/todos-list.component';
import { FormNewUserComponent } from './for_user/form-new-user/form-new-user.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserListComponent } from './for_user/user-list/user-list.component';
import { ExamplesComponents } from './for_examples/index';

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
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavLoaderComponent } from './nav-loader/nav-loader.component';
import { registerLocaleData } from '@angular/common';
import locateRu from '@angular/common/locales/ru';

registerLocaleData(locateRu)

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
    FormEditUserComponent,
    NavLoaderComponent
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
    MatProgressBarModule,
    PipeModule
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
    FormEditUserComponent,
    NavLoaderComponent
  ]
})
export class ComponentModule { }