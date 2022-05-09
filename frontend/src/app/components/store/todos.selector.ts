
import { TodoState, todosAdapter } from './todos.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const TODO_NAME = 'todos'

const getTodosFeatureState = createFeatureSelector<TodoState>(TODO_NAME);

export const allTodosSelector = createSelector( getTodosFeatureState, (state: TodoState) => state.todos);