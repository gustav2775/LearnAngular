import { allTodosSelector } from './todos.selector';
import { MyTodosService } from './../../servises/myTodos.service';
import { loadTodosAction, loadTodosSuccessAction } from './todos.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs';

@Injectable()
export class TodosEffect {
  constructor(
    private store: Store,
    private actions$: Actions,
    private todosSevice: MyTodosService) { }

  getTodos = createEffect(() => this.actions$.pipe(
    ofType(loadTodosAction),
    withLatestFrom(this.store.select(allTodosSelector)),
    mergeMap((todos) => {
      if (!todos.length) {
        return this.todosSevice.getAll().pipe(
          map((todos) => {
            return loadTodosSuccessAction({ todos });
          }),
          catchError(err => {
            console.log(err)
            return []
          })
        );
      } else {
        return []
      }
    })
  ))
}