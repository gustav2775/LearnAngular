import { TodosEffect } from './todos.effect';
import { todoReduser } from './todos.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/** Модуль хранилища данных */
@NgModule({
  imports: [
    StoreModule.forRoot(todoReduser),
    StoreModule.forFeature('Todos',todoReduser),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodosEffect])
  ]
})
export class AppStoreModule {}
