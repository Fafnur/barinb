import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingListComponent implements OnInit {
  building$!: Observable<Building[]>;

  constructor(private readonly buildingService: BuildingService) {}

  ngOnInit(): void {
    this.building$ = this.buildingService.buildings$;
  }
}
