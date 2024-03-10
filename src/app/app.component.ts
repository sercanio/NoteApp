import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

export type Theme = 'dark' | 'light' | undefined;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NoteApp';
  theme = 'light';
  appTitle = this.title;
  currentTheme: Theme = 'dark';

  changeTheme(theme: Theme) {
    this.currentTheme = theme;
    if (document && this.currentTheme) {
      document
        .querySelector('html')!
        .setAttribute('data-theme', this.currentTheme);
    }
  }
}
