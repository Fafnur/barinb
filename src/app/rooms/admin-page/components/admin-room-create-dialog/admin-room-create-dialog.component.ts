import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-room-create-dialog',
  templateUrl: './admin-room-create-dialog.component.html',
  styleUrls: ['./admin-room-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomCreateDialogComponent {
  form = new FormGroup({});

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(this.form.value);
    }
    this.changeDetectorRef.markForCheck();
  }
}
