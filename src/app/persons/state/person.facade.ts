import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import * as BuildingActions from './person.actions';
import { PersonState } from './person.reducer';
import * as BuildingSelectors from './person.selectors';

@Injectable()
export class PersonFacade {
  persons$ = this.store.pipe(select(BuildingSelectors.selectPersons));

  personLoadError$ = this.store.pipe(select(BuildingSelectors.selectPersonsLoadError));

  constructor(private readonly store: Store<PersonState>) {}

  loadPersons(): void {
    this.dispatch(BuildingActions.loadPersons());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
