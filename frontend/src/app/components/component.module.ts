import { UserListComponent } from './user-list/user-list.component';
import { ExamplesComponents } from './examples/index';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ...ExamplesComponents,
    UserListComponent,
    NavComponent,
    FormComponent,
    TodosListComponent,
    TodoFormComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...ExamplesComponents,
    UserListComponent,
    NavComponent,
    FormComponent,
    TodosListComponent,
    TodoFormComponent,
    ProductListComponent,
    ProductCardComponent
  ]
})
export class ComponentModule { }