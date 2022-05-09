import { createEntityAdapter } from '@ngrx/entity';
import { EntityState } from '@ngrx/entity';
import { ITodo } from './../../models/ITodo';

export interface TodoState {
    todos: EntityState<any>
}

export const todosAdapter = createEntityAdapter<any>();

export const TodosInitialState: TodoState = {
    todos: todosAdapter.getInitialState()
}