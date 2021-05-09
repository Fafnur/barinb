import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'extractFormControl',
})
export class ExtractFormControlPipe implements PipeTransform {
  transform(formGroup: FormGroup, controlName: string): FormControl | null {
    return (formGroup.get(controlName) as FormControl) ?? null;
  }
}
