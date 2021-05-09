import { Pipe, PipeTransform } from '@angular/core';

import { NUMERAL_TYPES_FORMS, NumeralType } from '@app/core/numerals/common';
import { numeralToWord } from '@app/core/numerals/utils';

@Pipe({
  name: 'numeralToWord',
})
export class NumeralToWordPipe implements PipeTransform {
  transform(count: number, type: string | NumeralType): string {
    const forms = NUMERAL_TYPES_FORMS[type as NumeralType] ?? null;

    return forms ? `${count} ${numeralToWord(count, forms)}` : `${count}`;
  }
}
