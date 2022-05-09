import { Actions } from '@ngrx/effects';
import { ITodo } from './../../models/ITodo';
import { createAction, props } from "@ngrx/store";
import { Update } from '@ngrx/entity';

export const loadTodosAction = createAction('[Todos] Loading Todos');

export const loadTodosSuccessAction = createAction('[Todos] Loading Todos Success', props<{ todos: any }>());

export const addTodoAction = createAction('[Todos] Add Todo', props<{ todo: ITodo }>());

export const removeTodoAction = createAction('[Todos] Remove Todo', props<{ todo_id: string, after?: Actions[] }>());

export const updateTodoAction = createAction('[Todos] Update todo', props<{ todo: ITodo, after?: ITodo[] }>());

export const updateTodosActionsSuccess = createAction('[Todos] Success Todos', props<{ todo: Update<ITodo> }>());
