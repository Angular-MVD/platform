import { Component, signal } from '@angular/core';

@Component({
  selector: 'website-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  menuState = signal(false);

  onTriggerMenuState(): void {
    this.menuState.update(value => !value);
  }
}
