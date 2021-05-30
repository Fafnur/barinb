import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PersonField } from '@app/persons/common';

export const PERSON_FORM_CONFIG: Record<string, any> = {
  [PersonField.LastName]: [null, [Validators.required, Validators.minLength(1)]],
  [PersonField.FirstName]: [null, [Validators.required, Validators.minLength(1)]],
  [PersonField.MiddleName]: [null, [Validators.minLength(1)]],
  [PersonField.Phone]: [null, [Validators.required, Validators.minLength(10)]],
  [PersonField.Avatar]: [null, [Validators.required, Validators.minLength(1)]],
  [PersonField.Buildings]: [[], []],
  [PersonField.Created]: [null, []],
  [PersonField.Updated]: [null, []],
};

export function createPersonForm(form: FormGroup): void {
  for (const [key, value] of Object.entries(PERSON_FORM_CONFIG)) {
    form.addControl(key, new FormControl(value[0], value[1]));
  }
}
