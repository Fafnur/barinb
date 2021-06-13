import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@app/core/forms/utils';
import { RoomField, ROOMS_IDS } from '@app/rooms/common';

@Component({
  selector: 'app-admin-room-photos',
  templateUrl: './admin-room-photos.component.html',
  styleUrls: ['./admin-room-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomPhotosComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  selectable = true;
  removable = true;
  addOnBlur = true;

  photos: string[] = [];

  readonly id = ROOMS_IDS[RoomField.Photos];

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

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

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.photos.push(value);
    }

    // Clear the input value
    event.chipInput?.clear();

    this.control?.patchValue(this.photos);
  }

  remove(index: number): void {
    if (index >= 0) {
      this.photos.splice(index, 1);
      this.control?.patchValue(this.photos);
    }
  }
}
