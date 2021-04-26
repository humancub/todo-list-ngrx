import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';
import {
  AddTodo,
  GetTodos,
  RemoveTodo,
  ToggleTheme,
  UpdateTodo,
} from '../store/actions';
import { IAppState } from '../store/reducers';
import { currentTheme, loading, todos } from '../store/selectors';
import { FormControl } from '@angular/forms';
import { Theme } from '../core/enums/theme.enum';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  public todos$: Observable<ITodo[]> = this.store.select(todos);
  public loading$: Observable<boolean> = this.store.select(loading);
  public theme$: Observable<Theme> = this.store.select(currentTheme);

  public newTodo = new FormControl('');
  public editedTodo = new FormControl('');

  public selectedTodo: ITodo | null = null;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetTodos());
  }

  removeTodo(todo: ITodo) {
    this.store.dispatch(RemoveTodo({ todo }));
  }

  addTodo() {
    this.store.dispatch(AddTodo({ title: this.newTodo.value }));
    this.newTodo.reset('');
  }

  updateTodo(id: string, changedTitle: string): void {
    this.store.dispatch(UpdateTodo({ todo: { id, title: changedTitle } }));
    this.selectedTodo = null;
  }

  setTodo(todo: ITodo): void {
    this.editedTodo.setValue(todo.title);
    this.selectedTodo = todo;
  }

  public toggleTheme() {
    this.store.dispatch(ToggleTheme());
  }
}
