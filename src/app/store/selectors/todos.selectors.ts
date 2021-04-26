import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, ITodosState } from '../reducers';

export const todosReducerSelector = createFeatureSelector<ITodosState>(
  'todosReducer'
);

export const todos = createSelector(
  todosReducerSelector,
  (state: ITodosState) => state.todos
);

export const loading = createSelector(
  todosReducerSelector,
  (state: ITodosState) => state.loading
);
