import { TestBed } from '@angular/core/testing';

import { Building } from '@app/buildings/common';

import { BuildingStorage } from './building.storage';
import { BUILDINGS_DTO_STUB } from './building.stub';

describe('BuildingStorage', () => {
  let storage: BuildingStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingStorage],
    });
    storage = TestBed.inject(BuildingStorage);
  });

  it('should be created', () => {
    expect(storage).toBeTruthy();
  });

  it('should return BUILDINGS_STUB', (done) => {
    storage.get().subscribe((result) => {
      expect(result.length).toBe(BUILDINGS_DTO_STUB.length);
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

  it('should return update buildings', (done) => {
    storage.post([{} as Building, {} as Building]);

    storage.get().subscribe((result) => {
      expect(result.length).toBe(2);
      done();
    });
  });

  it('should return reset buildings', (done) => {
    storage.post([]);
    storage.reset();

    storage.get().subscribe((result) => {
      expect(result.length).toBe(BUILDINGS_DTO_STUB.length);
      done();
    });
  });
});
