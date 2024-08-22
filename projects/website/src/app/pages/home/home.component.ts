import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
