import { ExamplesPage } from './pages/examples-page/examples-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPage } from './pages/error-page/error.component';
import { ProductPage } from './pages/product-page/product-page.component';
import { TodosPage } from './pages/todos-page/todos-page.component';
import { UserDetailPage } from './pages/user-detail-page/user-detail.component';
import { UsersPage } from './pages/users-page/users-page.component';
import { IndexPage } from './pages/index-page/index-pape.component';


const routes: Routes = [
  { path: '', component: IndexPage },
  { path: 'examples', component: ExamplesPage },
  { path: 'users', component: UsersPage },
  { path: 'users/:user-details/:userId', component: UserDetailPage },
  { path: 'todos', component: TodosPage },
  { path: 'product', component: ProductPage },
  { path: '**', component: ErrorPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
