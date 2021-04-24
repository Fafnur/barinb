import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Person } from '@app/persons/common';
import { PersonFacade } from '@app/persons/state';

@Injectable()
export class PersonService {
  persons$: Observable<Person[]> = this.personFacade.persons$.pipe(filter<any>(Boolean));

  constructor(private readonly personFacade: PersonFacade) {}
}
