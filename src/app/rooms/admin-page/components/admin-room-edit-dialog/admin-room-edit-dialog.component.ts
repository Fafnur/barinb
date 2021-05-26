import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { FormErrorsService } from '@app/core/forms/errors';
import { RoomField, ROOMS_IDS } from '@app/rooms/common';
import { RoomExtended } from '@app/rooms/manager';
import { RoomFacade } from '@app/rooms/state';

@Component({
  selector: 'app-admin-room-edit-dialog',
  templateUrl: './admin-room-edit-dialog.component.html',
  styleUrls: ['./admin-room-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomEditDialogComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly roomFacade: RoomFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly matDialogRef: MatDialogRef<AdminRoomEditDialogComponent>,
    private readonly matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public readonly room: RoomExtended
  ) {}

  ngOnInit(): void {
    this.roomFacade.roomChanged$
      .pipe(
        tap(() => {
          this.matDialogRef.close(true);
          this.matSnackBar.open('Номер успешно изменен!', '', { duration: 5000 });
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
      this.roomFacade.changeRoom({ ...this.form.value, [RoomField.ID]: this.room.id });
    } else {
      this.formErrorsService.scrollToFirstError(this.form, ROOMS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
