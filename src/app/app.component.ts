import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { Store } from '@ngrx/store';
import { Theme } from './core/enums/theme.enum';
import { ToggleTheme } from './store/actions';
import { IThemeState } from './store/reducers/theme.reducer';
import { currentTheme } from './store/selectors';

@Component({
  selector: 'app-root',
  template: `<app-to-do-list></app-to-do-list>`,
})
export class AppComponent implements OnInit {
  //isDarkTheme: Observable<boolean> | undefined;
  public theme: Theme | undefined;

  constructor(private store: Store<IThemeState>) {}

  ngOnInit() {
    //this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
