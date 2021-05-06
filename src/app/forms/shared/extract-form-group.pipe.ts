import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'extractFormGroup',
})
export class ExtractFormGroupPipe implements PipeTransform {
  transform(formGroup: FormGroup, controlName: string): FormGroup | null {
    return (formGroup.get(controlName) as FormGroup) ?? null;
  }
}
