import { TestBed } from '@angular/core/testing';

import { PersonEntity } from '@app/persons/common';

import { PersonStorage } from './person.storage';
import { PERSONS_DTO_STUB } from './person.stub';

describe('PersonStorage', () => {
  let storage: PersonStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonStorage],
    });
    storage = TestBed.inject(PersonStorage);
  });

  it('should be created', () => {
    expect(storage).toBeTruthy();
  });

  it('should return PERSONS_STUB', (done) => {
    storage.get().subscribe((result) => {
      expect(result.length).toBe(PERSONS_DTO_STUB.length);
      done();
    });
  });

  it('should return empty', (done) => {
    storage.clear();

    storage.get().subscribe((result) => {
      expect(result.length).toBe(0);
      done();
    });
  });

  it('should return update persons', (done) => {
    storage.post([{}, {}] as PersonEntity[]);

    storage.get().subscribe((result) => {
      expect(result.length).toBe(2);
      done();
    });
  });

  it('should return reset persons', (done) => {
    storage.post([]);
    storage.reset();

    storage.get().subscribe((result) => {
      expect(result.length).toBe(PERSONS_DTO_STUB.length);
      done();
    });
  });
});
