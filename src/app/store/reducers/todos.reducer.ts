import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { ITodo } from 'src/app/models/todo.interface';
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
import { IThemeState } from './theme.reducer';

export interface IAppState {
  todosReducer: ITodosState;
  themeReducer: IThemeState;
}

export interface ITodosState {
  loading: boolean;
  todos: ITodo[];
  error: HttpErrorResponse | null;
}

export const initialState: ITodosState = {
  loading: false,
  todos: [],
  error: null,
};

export const todosReducer = createReducer(
  initialState,
  on(GetTodos, (state: ITodosState) => ({
    ...state,
    loading: true,
  })),
  on(GetTodosSuccess, (state: ITodosState, GetTodosSuccess) => ({
    ...state,
    loading: false,
    todos: GetTodosSuccess.todos,
  })),
  on(RemoveTodo, (state: ITodosState) => ({
    ...state,
    loading: true,
  })),
  on(RemoveTodoSuccess, (state: ITodosState, { todo }) => ({
    ...state,
    todos: state.todos.filter((el) => el.id !== todo.id),
  })),
  on(
    GetTodosFail,
    RemoveTodoFail,
    AddTodoFail,
    UpdateTodoFail,
    (state: ITodosState, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(AddTodo, (state: ITodosState) => ({
    ...state,
    loading: true,
  })),
  on(AddTodoSuccess, (state: ITodosState, { todo }) => ({
    ...state,
    loading: false,
    todos: [...state.todos, todo],
  })),
  on(UpdateTodo, (state: ITodosState) => ({
    ...state,
    loading: true,
  })),
  on(UpdateTodoSuccess, (state: ITodosState, { todo }) => ({
    ...state,
    loading: false,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  }))
);
