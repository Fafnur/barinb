import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';

import { ActionWatcher } from './action.watcher';

describe('ActionWatcher', () => {
  let service: ActionWatcher;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ActionWatcher,
        {
          provide: Actions,
          useValue: of(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ActionWatcher);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
