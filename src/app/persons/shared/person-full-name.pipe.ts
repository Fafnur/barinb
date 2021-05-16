import { Pipe, PipeTransform } from '@angular/core';

import { Person } from '@app/persons/common';

@Pipe({
  name: 'personFullName',
})
export class PersonFullNamePipe implements PipeTransform {
  transform(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }
}
