import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/models/todo.interface';

export const GetTodos = createAction('Get Todos');

export const GetTodosSuccess = createAction(
  'Get Todos Succces',
  props<{ todos: ITodo[] }>()
);

export const GetTodosFail = createAction(
  'Get Todos Fail',
  props<{ error: HttpErrorResponse }>()
);

export const RemoveTodo = createAction('Remove Todo', props<{ todo: ITodo }>());

export const RemoveTodoSuccess = createAction(
  'Remove Todo Success',
  props<{ todo: ITodo }>()
);

export const RemoveTodoFail = createAction(
  'Remove Todo Success',
  props<{ error: HttpErrorResponse }>()
);

export const AddTodo = createAction('Add Todo', props<{ title: string }>());

export const AddTodoSuccess = createAction(
  'Add Todo Success',
  props<{ todo: ITodo }>()
);

export const AddTodoFail = createAction(
  'Add Todo Fail',
  props<{ error: HttpErrorResponse }>()
);

export const UpdateTodo = createAction('Update Todo', props<{ todo: ITodo }>());

export const UpdateTodoSuccess = createAction(
  'Update Todo Success',
  props<{ todo: ITodo }>()
);

export const UpdateTodoFail = createAction(
  'Update Todo Fail',
  props<{ error: HttpErrorResponse }>()
);
