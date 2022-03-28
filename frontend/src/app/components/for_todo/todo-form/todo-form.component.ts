import { Subscription } from 'rxjs';
import { ITodo, IValuesNewTodo } from '../../../interfaces/ITodo';
import { MyTodosService } from '../../../servises/myTodos.service';
import { NgForm } from '@angular/forms';
import { Component, Inject, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Input() 
  todoRef?:ITodo = {
    id: null,
    title: '',
    description: '',
    status:false
  }
  @Output() public editTodo = new EventEmitter();
  constructor(@Inject('MyTodosService') private myTodos: MyTodosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  onSubmit(form: NgForm) {
    const values = form.value.ngModelGroup as IValuesNewTodo;
    this.myTodos.add(values).subscribe((res: any): any => {
      form.reset();
      this.editTodo.emit(res.result)
    })
  }
  onUpdate(form: NgForm) {
    const values = form.value.ngModelGroup as IValuesNewTodo;
    if (this.todoRef) {
      this.myTodos.update(this.todoRef, values).subscribe((res: any): any => {
        this.todoRef = {
          id: null,
          title: '',
          description: '',
          status:false
        }
        form.reset();
        this.editTodo.emit(res.result)
      });
    }
  }
}
