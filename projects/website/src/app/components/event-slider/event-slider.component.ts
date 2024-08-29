import { Component, input } from '@angular/core';
import { EventInfo } from '../../models/event-info.interface';
import { DatePipe } from '@angular/common';
import { SliderDirective } from '../../directives/slider.directive';

@Component({
  selector: 'website-event-slider',
  standalone: true,
  imports: [DatePipe, SliderDirective],
  templateUrl: './event-slider.component.html'
})
export class EventSliderComponent {
  eventInfo = input.required<EventInfo>();
}
