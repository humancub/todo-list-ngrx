import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodo } from '../../models/todo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  private todosUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosUrl);
  }

  public addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.todosUrl, todo);
  }

  public removeTodo(id: string): Observable<Object> {
    const url = `${this.todosUrl}/${id}`;

    return this.http.delete(url);
  }

  public updateTodo(todo: ITodo): Observable<ITodo> {
    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.put(url, todo) as Observable<ITodo>;
  }
}
