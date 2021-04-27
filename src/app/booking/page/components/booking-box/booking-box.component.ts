import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
