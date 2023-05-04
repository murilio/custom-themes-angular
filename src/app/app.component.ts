import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../styles/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  themes = this.themeService.themes;

  ngOnInit() {
    this.themeService.currentTheme.subscribe((theme) => {
      document.body.className = theme;
    });
  }

  toggleTheme(value: any) {
    const newTheme = value.target.value;
    this.themeService.toggleTheme(newTheme);
  }
}
