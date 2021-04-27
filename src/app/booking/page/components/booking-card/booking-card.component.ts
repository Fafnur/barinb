import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
