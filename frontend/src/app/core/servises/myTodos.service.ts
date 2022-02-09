import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITodo, IValuesNewTodo } from '../../interfaces/ITodo';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTodosService {
  private url_path = environment.ENV.localhost + '/api/todo'
  private todos: ITodo[] = [];

  get getTodos(): ITodo[] {
    return this.todos;
  }
  constructor(private http: HttpClient) {}
  getAll = ():Observable<any> => {
    return this.http.get(this.url_path).pipe(retry(2))
  }
  add(values: IValuesNewTodo) {
    return this.http.post(this.url_path, values).pipe(retry(2))
  }
  delete = (element: ITodo) => {
    return this.http.delete(`${this.url_path}/?id=${element.id}`)
  }
  update(element: ITodo, values: IValuesNewTodo) {
    return this.http.put(this.url_path, {element,values})
  }
}
