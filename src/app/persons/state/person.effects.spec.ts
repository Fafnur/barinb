import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { PersonStorage } from '@app/persons/storage';

import * as PersonActions from './person.actions';
import { PersonEffects } from './person.effects';
import { PERSON_FEATURE_KEY, personInitialState } from './person.reducer';
import { PERSON_LOAD_ERROR, PERSONS_STUB } from './person.stub';

describe('PersonEffects', () => {
  let actions$: Observable<any>;
  let effects: PersonEffects;
  let storage: PersonStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PersonEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { [PERSON_FEATURE_KEY]: personInitialState },
        }),
        {
          provide: PersonStorage,
          useValue: {} as Partial<PersonStorage>,
        },
      ],
    });

    effects = TestBed.inject(PersonEffects);
    storage = TestBed.inject(PersonStorage);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadPersons$', () => {
    it('should return load person success', () => {
      const action = PersonActions.loadPersons();

      const completion = PersonActions.loadPersonsSuccess({ payload: PERSONS_STUB });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-a-|', { a: PERSONS_STUB });
      storage.get = jest.fn(() => response);
      const expected = cold('--a-|', { a: completion });

      expect(effects.loadPersons$).toBeObservable(expected);
    });

    it('should return load person failure', () => {
      const action = PersonActions.loadPersons();
      const completion = PersonActions.loadPersonsFailure({ payload: PERSON_LOAD_ERROR });

      actions$ = hot('-a-|', { a: action });
      const response = cold('-#|', {}, PERSON_LOAD_ERROR);
      const expected = cold('--a|', { a: completion });
      storage.get = jest.fn(() => response);

      expect(effects.loadPersons$).toBeObservable(expected);
    });
  });
});
