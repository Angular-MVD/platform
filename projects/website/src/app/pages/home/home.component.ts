import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroComponent } from '../../components/hero/hero.component';
import { EventInfo } from '../../models/event-info.interface';
import { EventSliderComponent } from '../../components/event-slider/event-slider.component';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [HeroComponent, EventSliderComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  //Services
  httClient: HttpClient = inject(HttpClient);

  //Models
  events: EventInfo[] = [];

  //Component event Lifecycle
  ngOnInit(): void {
    this.httClient.get('/data/events.json').subscribe({
      next: (response: any) => this.events = <EventInfo[]> response
    })
  }
}
