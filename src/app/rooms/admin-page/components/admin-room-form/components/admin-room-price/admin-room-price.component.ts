import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-price',
  templateUrl: './admin-room-price.component.html',
  styleUrls: ['./admin-room-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomPriceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
