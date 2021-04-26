import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../reducers';
import { IThemeState } from '../reducers/theme.reducer';

export const themeReducerSelector = createFeatureSelector<IThemeState>('theme');
export const currentTheme = createSelector(
  themeReducerSelector,
  (state: IThemeState) => state.currentTheme
);
