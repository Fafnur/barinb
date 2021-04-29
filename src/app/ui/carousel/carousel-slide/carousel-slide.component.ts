import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselSlideComponent {
  @Input() image!: string;
  @Input() active = false;
}
