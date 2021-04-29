import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-navs',
  templateUrl: './carousel-navs.component.html',
  styleUrls: ['./carousel-navs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselNavsComponent {
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onPrev(): void {
    this.prev.emit();
  }

  onNext(): void {
    this.next.emit();
  }
}
