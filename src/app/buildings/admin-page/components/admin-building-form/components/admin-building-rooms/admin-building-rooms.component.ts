import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';
import { extractTouchedChanges } from '@app/core/forms/utils';
import { Room } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';

@Component({
  selector: 'app-admin-building-rooms',
  templateUrl: './admin-building-rooms.component.html',
  styleUrls: ['./admin-building-rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingRoomsComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  rooms!: Room[];

  readonly id = BUILDINGS_IDS[BuildingField.Rooms];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly roomService: RoomService) {}

  ngOnInit(): void {
    if (this.control) {
      this.control.disable();

      extractTouchedChanges(this.control)
        .pipe(
          tap(() => this.changeDetectorRef.markForCheck()),
          takeUntil(this.destroy$)
        )
        .subscribe();

      this.roomService.rooms$
        .pipe(
          tap((rooms) => {
            this.rooms = rooms;
            this.changeDetectorRef.markForCheck();
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
