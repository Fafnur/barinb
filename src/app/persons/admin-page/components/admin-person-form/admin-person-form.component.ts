import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PersonField } from '@app/persons/common';
import { PersonExtended } from '@app/persons/manager';

import { createPersonForm } from './admin-person-form.config';

@Component({
  selector: 'app-admin-person-form',
  templateUrl: './admin-person-form.component.html',
  styleUrls: ['./admin-person-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonFormComponent implements OnInit {
  @Input() person!: PersonExtended;
  @Input() form!: FormGroup;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  PersonField = PersonField;

  ngOnInit(): void {
    if (!this.form) {
      this.form = new FormGroup({});
    }
    createPersonForm(this.form);

    if (this.person) {
      this.form.patchValue(this.person);
    }
  }
}
