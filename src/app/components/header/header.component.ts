import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Theme } from '../../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  count: number | undefined = 0;
  variableX: boolean | undefined = true;
  @Input() appTitle: string | undefined;
  @Input() currentTheme: Theme;
  @Output() changeThemeEvent = new EventEmitter<Theme>();

  changeCurrentTheme(value: Theme) {
    this.changeThemeEvent.emit(value);
  }
}
