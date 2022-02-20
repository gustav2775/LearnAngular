import { ComponentModule } from './../components/component.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ExamplesPage } from './examples-page/examples-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ErrorPage } from './error-page/error.component';
import { ProductPage } from './product-page/product-page.component';
import { TodosPage } from './todos-page/todos-page.component';
import { UserDetailPage } from './user-detail-page/user-detail.component';
import { UsersPage } from './users-page/users-page.component';
import { IndexPage } from './index-page/index-pape.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        IndexPage,
        ExamplesPage,
        UsersPage,
        UserDetailPage,
        TodosPage,
        ProductPage,
        ErrorPage
    ],
    imports: [
        BrowserModule,
        RouterModule,
        MatTabsModule,
        ComponentModule
    ],
    exports: [
        IndexPage,
        ExamplesPage,
        UsersPage,
        UserDetailPage,
        TodosPage,
        ProductPage,
        ErrorPage
    ]
})
export class PageModule { }
