import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';
import { ROOMS_IDS } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

@Component({
  selector: 'app-admin-room-create-dialog',
  templateUrl: './admin-room-create-dialog.component.html',
  styleUrls: ['./admin-room-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomCreateDialogComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly roomFacade: RoomFacade,
    private readonly buildingFacade: BuildingFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly matDialogRef: MatDialogRef<AdminRoomCreateDialogComponent>,
    private readonly matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.roomFacade.roomAdded$
      .pipe(
        tap((room) => {
          this.buildingFacade.addBuildingRoom({ id: room.building, room: room.id });
          this.matDialogRef.close(true);
          this.matSnackBar.open('Номер успешно создан!', '', { duration: 5000 });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.roomFacade.addRoom(this.form.value);
    } else {
      this.formErrorsService.scrollToFirstError(this.form, ROOMS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
