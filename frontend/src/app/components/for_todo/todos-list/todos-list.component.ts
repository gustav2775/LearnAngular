import { ITodo } from '../../../interfaces/ITodo';
import { MyTodosService } from '../../../core/servises/myTodos.service';
import { AfterViewInit, Component, ViewChild, Inject, SimpleChanges, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})

export class TodosListComponent {
  displayedColumns: string[] = ['position', 'title', 'description', 'date', 'status', 'edit', 'delete'];
  dataSource: MatTableDataSource<ITodo> | any;
  todos: ITodo[] = [];
  todoRef: ITodo | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(@Inject('MyTodosService') private myTodos: MyTodosService) { }
  ngOnInit() {
    this.getTodos();
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
    this.myTodos.delete(element).subscribe((res: any): any => {
      if (res.massege === 'Заметка удалена') {
        const todo_index = this.todos.indexOf(element);
        this.todos.splice(todo_index, 1);
        this.updateTable();
      }
    });
  }
  updateElement(todo: ITodo) {
    this.todoRef = todo;
  }
  editTodo(todo: any) {
    const todo_index = this.todos.findIndex(i => Number(i.id) === Number(todo.id));
    if (todo_index > -1) {
      this.todos.splice(todo_index, 1, todo);
      this.updateTable();
    }else{
      this.todos.push(todo);
      this.updateTable();
    }
  }
  onUpdate(todo:ITodo){
    todo.status=!todo.status;
    this.myTodos.update(todo, {status: todo.status}).subscribe((res: any): any => {
      console.log(res);
      this.updateTable
    });
    
   
  }
  updateTable() {
    this.dataSource._updateChangeSubscription(this.todos);
  }
}