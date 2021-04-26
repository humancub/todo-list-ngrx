import { createReducer, on } from '@ngrx/store';
import { Theme } from 'src/app/core/enums/theme.enum';
import { ToggleTheme } from '../actions';

export interface IThemeState {
  currentTheme: Theme;
}

export const initialState: IThemeState = {
  currentTheme: Theme.Light,
};

export const themeReducer = createReducer(
  initialState,
  on(ToggleTheme, (previousState) => ({
    ...previousState,
    currentTheme:
      previousState.currentTheme === Theme.Light ? Theme.Dark : Theme.Light,
  }))
);
