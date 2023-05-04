import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themes = [
    {
      value: 'light-theme',
      label: 'Light'
    },
    {
      value: 'dark-theme',
      label: 'Dark'
    },
    {
      value: 'orange-theme',
      label: 'Orange'
    }
  ];

  private theme = new BehaviorSubject<string>('light-theme');
  currentTheme = this.theme.asObservable();

  constructor() { }

  toggleTheme(theme: string) {
    this.theme.next(theme);
  }
}
