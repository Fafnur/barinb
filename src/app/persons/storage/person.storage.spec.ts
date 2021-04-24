import { TestBed } from '@angular/core/testing';

import { Person } from '@app/persons/common';

import { PersonStorage } from './person.storage';
import { PERSONS_STUB } from './person.stub';

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
      expect(result.length).toBe(PERSONS_STUB.length);
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
    storage.post([...PERSONS_STUB, {} as Person]);

    storage.get().subscribe((result) => {
      expect(result.length).toBe(PERSONS_STUB.length + 1);
      done();
    });
  });

  it('should return reset persons', (done) => {
    storage.post([]);
    storage.reset();

    storage.get().subscribe((result) => {
      expect(result.length).toBe(PERSONS_STUB.length);
      done();
    });
  });
});
