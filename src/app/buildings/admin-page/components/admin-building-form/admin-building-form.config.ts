import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BuildingField } from '@app/buildings/common';

export const BUILDING_FORM_CONFIG: Record<string, any> = {
  [BuildingField.Person]: [null, [Validators.required]],
  [BuildingField.Name]: [null, [Validators.required, Validators.minLength(1)]],
  [BuildingField.City]: [null, [Validators.required, Validators.minLength(1)]],
  [BuildingField.Address]: [null, [Validators.required, Validators.minLength(1)]],
  [BuildingField.Lat]: [null, [Validators.required]],
  [BuildingField.Lng]: [null, [Validators.required]],
  [BuildingField.Rooms]: [[], []],
  [BuildingField.Created]: [null, []],
  [BuildingField.Updated]: [null, []],
};

export function createBuildingForm(form: FormGroup): void {
  for (const [key, value] of Object.entries(BUILDING_FORM_CONFIG)) {
    form.addControl(key, new FormControl(value[0], value[1]));
  }
}
