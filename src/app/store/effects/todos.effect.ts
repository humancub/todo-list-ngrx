import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { v4 as uuidv4 } from 'uuid';
import {
  AddTodo,
  AddTodoFail,
  AddTodoSuccess,
  GetTodos,
  GetTodosFail,
  GetTodosSuccess,
  RemoveTodo,
  RemoveTodoFail,
  RemoveTodoSuccess,
  UpdateTodo,
  UpdateTodoFail,
  UpdateTodoSuccess,
} from '../actions';
import {
  catchError,
  delay,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { EndpointService } from 'src/app/core';
import { ITodo } from 'src/app/models/todo.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { todos } from '../selectors';
import { Store } from '@ngrx/store';
import { IAppState } from '../reducers';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private endpointsService: EndpointService,
    private store: Store<IAppState>
  ) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetTodos),
      switchMap(() => {
        return this.endpointsService.getTodos().pipe(
          delay(1000),
          map((todos: ITodo[]) => {
            return GetTodosSuccess({ todos: todos });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(GetTodosFail({ error: error }));
          })
        );
      })
    )
  );

  removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RemoveTodo),
      switchMap(({ todo }) => {
        return this.endpointsService.removeTodo(todo.id).pipe(
          delay(1000),
          map(() => {
            return RemoveTodoSuccess({ todo });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(RemoveTodoFail({ error }));
          })
        );
      })
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddTodo),
      delay(1000),
      withLatestFrom(this.store.select(todos)),
      switchMap(([{ title }, todos]) => {
        const todo: ITodo = {
          title,
          id: uuidv4(),
        };

        return this.endpointsService.addTodo(todo).pipe(
          map((todo: ITodo) => {
            return AddTodoSuccess({ todo });
          }),
          catchError((error: HttpErrorResponse) => of(AddTodoFail({ error })))
        );
      })
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateTodo),
      switchMap(({ todo }) => {
        return this.endpointsService.updateTodo(todo).pipe(
          map((todo: ITodo) => {
            return UpdateTodoSuccess({ todo });
          })
        );
      })
    )
  );
}
