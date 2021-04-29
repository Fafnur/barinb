import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-dots',
  templateUrl: './carousel-dots.component.html',
  styleUrls: ['./carousel-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDotsComponent implements OnInit {
  @Input() counts!: number;
  @Input() active!: number;

  @Output() selected = new EventEmitter<number>();

  dots!: number[];

  ngOnInit(): void {
    this.dots = this.counts ? new Array(this.counts) : [];
  }

  onSelect(index: number): void {
    this.selected.emit(index);
  }
}
