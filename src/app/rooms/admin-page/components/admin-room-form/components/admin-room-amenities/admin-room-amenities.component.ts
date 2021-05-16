import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@app/core/forms/utils';
import { ROOM_AMENITIES, RoomField, ROOMS_IDS } from '@app/rooms/common';

@Component({
  selector: 'app-admin-room-amenities',
  templateUrl: './admin-room-amenities.component.html',
  styleUrls: ['./admin-room-amenities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomAmenitiesComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  readonly id = ROOMS_IDS[RoomField.Amenities];
  readonly features = ROOM_AMENITIES;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.control) {
      extractTouchedChanges(this.control)
        .pipe(
          tap(() => this.changeDetectorRef.markForCheck()),
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
