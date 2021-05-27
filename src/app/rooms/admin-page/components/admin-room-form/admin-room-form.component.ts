import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RoomField } from '@app/rooms/common';
import { RoomExtended } from '@app/rooms/manager';

import { createRoomForm } from './admin-room-form.config';

@Component({
  selector: 'app-admin-room-form',
  templateUrl: './admin-room-form.component.html',
  styleUrls: ['./admin-room-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomFormComponent implements OnInit {
  @Input() room!: RoomExtended;
  @Input() form!: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RoomField = RoomField;

  ngOnInit(): void {
    if (!this.form) {
      this.form = new FormGroup({});
    }
    createRoomForm(this.form);

    if (this.room) {
      this.form.patchValue({
        ...this.room,
        [RoomField.Person]: this.room.buildingExtended.person,
      });
    }
  }
}
