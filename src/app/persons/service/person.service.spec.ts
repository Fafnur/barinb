import { TestBed, waitForAsync } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { Person } from '@app/persons/common';
import { PERSON_STUB, PersonFacade, PERSONS_STUB } from '@app/persons/state';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let personFacadeMock: PersonFacade;
  let persons$: ReplaySubject<Person[]>;
  let person$: ReplaySubject<Person>;

  beforeEach(() => {
    personFacadeMock = mock(PersonFacade);

    persons$ = new ReplaySubject<Person[]>(1);
    person$ = new ReplaySubject<Person>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [PersonService, providerOf(PersonFacade, personFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(personFacadeMock.persons$).thenReturn(persons$);
    when(personFacadeMock.person$(anything())).thenReturn(person$);

    service = TestBed.inject(PersonService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return persons', () => {
    persons$.next(PERSONS_STUB);

    const expected$ = hot('a', {
      a: PERSONS_STUB,
    });

    expect(service.persons$).toBeObservable(expected$);
  });

  it('should return person', () => {
    person$.next(PERSON_STUB);

    const expected$ = hot('a', {
      a: PERSON_STUB,
    });

    expect(service.person$(anything())).toBeObservable(expected$);
  });
});
