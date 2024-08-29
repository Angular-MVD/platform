import { isPlatformBrowser } from '@angular/common';
import { AfterContentChecked, AfterViewInit, Directive, ElementRef, Inject, input, InputSignal, OnDestroy, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { interval, Observable, Subscription, take, tap } from 'rxjs';

@Directive({
  selector: '[websiteSlider]',
  standalone: true
})
export class SliderDirective implements OnInit {
  //Models
  slides: InputSignal<number> = input.required<number>();
  currentSlide: WritableSignal<number> = signal(0);

  //Timer ref
  timerRef: Observable<any> | null = null;
  timerSubscription: Subscription | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.timerRef = interval(3000);
      this.timerSubscription = this.timerRef.subscribe(() => {
        this.showNextSlide();
      });
    }
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  private showNextSlide() {
    this.currentSlide.update((val) => (val + 1) % this.slides() );
    this.el.nativeElement.style.transform = `translateX(-${this.currentSlide() * 100}%)`;
}

}
