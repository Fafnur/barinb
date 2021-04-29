import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() images!: string[];
  @Output() selected = new EventEmitter<void>();

  active = 0;

  onClick(): void {
    this.selected.emit();
  }

  onSelected(index: number): void {
    this.active = index;
  }

  onPrev(): void {
    this.active = this.active === 0 ? this.images.length - 1 : this.active - 1;
  }

  onNext(): void {
    this.active = this.active === this.images.length - 1 ? 0 : this.active + 1;
  }
}
