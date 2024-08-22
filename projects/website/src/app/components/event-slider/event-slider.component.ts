import { Component, input } from '@angular/core';
import { EventInfo } from '../../models/event-info.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'website-event-slider',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event-slider.component.html'
})
export class EventSliderComponent {
  eventInfo = input.required<EventInfo>();
}
