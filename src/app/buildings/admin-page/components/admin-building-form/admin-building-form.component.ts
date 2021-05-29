import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BuildingField } from '@app/buildings/common';
import { BuildingExtended } from '@app/buildings/manager';

import { createBuildingForm } from './admin-building-form.config';

@Component({
  selector: 'app-admin-building-form',
  templateUrl: './admin-building-form.component.html',
  styleUrls: ['./admin-building-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingFormComponent implements OnInit {
  @Input() building!: BuildingExtended;
  @Input() form!: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  BuildingField = BuildingField;

  ngOnInit(): void {
    if (!this.form) {
      this.form = new FormGroup({});
    }
    createBuildingForm(this.form);

    if (this.building) {
      this.form.patchValue(this.building);
    }
  }
}
