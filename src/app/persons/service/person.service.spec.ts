import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonFacade } from '@app/persons/state';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        PersonService,
        {
          provide: PersonFacade,
          useValue: {
            persons$: of(),
          } as Partial<PersonFacade>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(PersonService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
