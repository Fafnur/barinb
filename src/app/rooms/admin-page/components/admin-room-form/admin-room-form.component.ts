import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Room, RoomField } from '@app/rooms/common';

import { createRoomForm } from './admin-room-form.config';

@Component({
  selector: 'app-admin-room-form',
  templateUrl: './admin-room-form.component.html',
  styleUrls: ['./admin-room-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomFormComponent implements OnInit {
  @Input() room!: Room;
  @Input() form!: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  RoomField = RoomField;

  constructor() {}

  ngOnInit(): void {
    if (!this.form) {
      this.form = new FormGroup({});
    }
    createRoomForm(this.form);

    if (this.room) {
      this.form.patchValue(this.room);
    }
  }
}
