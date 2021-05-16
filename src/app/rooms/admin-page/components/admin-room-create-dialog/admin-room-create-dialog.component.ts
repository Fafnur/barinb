import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormErrorsService } from '@app/core/forms/errors';
import { ROOMS_IDS } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';

@Component({
  selector: 'app-admin-room-create-dialog',
  templateUrl: './admin-room-create-dialog.component.html',
  styleUrls: ['./admin-room-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomCreateDialogComponent {
  form = new FormGroup({});

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly roomService: RoomService,
    private readonly formErrorsService: FormErrorsService
  ) {}

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.roomService.addRoom(this.form.value);
    } else {
      this.formErrorsService.scrollToFirstError(this.form, ROOMS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
