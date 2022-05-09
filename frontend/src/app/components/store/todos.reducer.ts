import { loadTodosAction, loadTodosSuccessAction } from './todos.actions';
import { todosAdapter, TodosInitialState } from './todos.state';
import { createReducer, on } from "@ngrx/store";

export const todoReduser = createReducer(
    TodosInitialState.todos,
    on(loadTodosSuccessAction, (state, { todos }) => {
        return todosAdapter.setAll(todos,state);
    }),
    // on(addTodo, (payload, { todo }) => {
    //     return todoValueAdapter.addOne(todo, payload);
    // }),
    // on(removeTodo, (payload, { id }) => {
    //     return todosAdapter.removeOne(id, payload);
    // }),
    // on(updateTodo, (state, { update }) => {
    //     return todosAdapter.updateOne(update, state);
    // })
)