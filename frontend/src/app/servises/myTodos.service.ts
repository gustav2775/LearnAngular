import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITodo, IValuesNewTodo } from '../models/ITodo';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTodosService {
  private url_path = environment.ENV.localhost + '/api/todo'
  private todos!: [ITodo];

  get getTodos(): [ITodo] {
    return this.todos;
  }
  constructor(private http: HttpClient) {}
  getAll = ():Observable<[ITodo]> => {
    return this.http.get<[ITodo]>(this.url_path).pipe(retry(2))
  }
  add = (values: IValuesNewTodo):Observable<ITodo> => {
    return this.http.post<ITodo>(this.url_path, values).pipe(retry(2))
  }
  delete = (element: ITodo):Observable<void> => {
    return this.http.delete<void>(`${this.url_path}/?id=${element.id}`)
  }
  update(element: ITodo, values: IValuesNewTodo) {
    return this.http.put(this.url_path, {element,values})
  }
}
