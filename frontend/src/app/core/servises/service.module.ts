import { MyProductService } from './myProduct.service';
import { MyTodosService } from './myTodos.service';
import { BaseApi } from './myBaseApi.service';
import { UsersService } from './myUsers.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    { provide: 'myUsers', useClass: UsersService },
    { provide: 'myBaseApi', useClass: BaseApi },
    { provide: 'MyTodosService', useClass: MyTodosService },
    { provide: 'MyProduct', useClass: MyProductService }
  ],
})
export class ServiceModule { }