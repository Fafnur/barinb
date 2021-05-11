import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-room-amenities',
  templateUrl: './admin-room-amenities.component.html',
  styleUrls: ['./admin-room-amenities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminRoomAmenitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
