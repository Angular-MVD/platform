import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroComponent } from '../../components/hero/hero.component';
import { EventInfo } from '../../models/event-info.interface';
import { EventSliderComponent } from '../../components/event-slider/event-slider.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [HeroComponent, EventSliderComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  //Services
  apiService: ApiService = inject(ApiService);

  //Models
  lastEvent: WritableSignal<EventInfo | null> = signal(null);

  constructor(){
    this.lastEvent.set(this.apiService.events[0] ?? null);
  }
}
