import { createAction, props } from '@ngrx/store';
import { Theme } from 'src/app/core/enums/theme.enum';

export const ToggleTheme = createAction('[Theme] Toggle Theme');
