import { loadTodosAction } from './../../store/todos.actions';
import { allTodosSelector } from './../../store/todos.selector';
import { Store } from '@ngrx/store';
import { Subscription, Observable, filter, map } from 'rxjs';
import { ITodo } from '../../../models/ITodo';
import { MyTodosService } from '../../../servises/myTodos.service';
import { Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})

export class TodosListComponent {
  private subscription: Subscription = new Subscription();
  displayedColumns: string[] = ['position', 'title', 'description', 'date', 'status', 'edit', 'delete'];
  dataSource: MatTableDataSource<ITodo> | any;

  todos!: [ITodo];
  todos$!: Observable <ITodo[]> 

  todoRef?: ITodo;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(
    private myTodos: MyTodosService,
    private store: Store) { }

  ngOnInit() {
    this.getTodos();
    this.store.dispatch(loadTodosAction())
    this.store.select(allTodosSelector)
      .pipe(
        map(todos => console.log(todos))
      )
      .subscribe(arr => console.log('todos arr', arr))
  }

  getTodos() {
    this.myTodos.getAll().subscribe((res: any): any => {
      this.todos = res.results;
      this.dataSource = new MatTableDataSource<ITodo>(this.todos);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    })
  }
  deleteElement(element: ITodo) {
    this.subscription.add(
      this.myTodos.delete(element).subscribe((res: any): any => {
        if (res.massege === 'Заметка удалена') {
          const todo_index = this.todos.indexOf(element);
          this.todos.splice(todo_index, 1);
          this.updateTable();
        }
      })
    )
  }
  updateElement(todo: ITodo) {
    this.todoRef = todo;
  }
  editTodo(todo: any) {
    const todo_index = this.todos.findIndex(i => Number(i.id) === Number(todo.id));
    if (todo_index > -1) {
      this.todos.splice(todo_index, 1, todo);
      this.updateTable();
    } else {
      this.todos.unshift(todo);
      this.updateTable();
    }
  }
  onUpdate(todo: ITodo) {
    todo.status = !todo.status;
    this.subscription.add(
      this.myTodos.update(todo, { status: todo.status }).subscribe((res: any): any => {
        this.updateTable
      })
    )
  }
  updateTable() {
    this.dataSource._updateChangeSubscription(this.todos);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}