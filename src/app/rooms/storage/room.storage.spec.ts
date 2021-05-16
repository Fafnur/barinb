import { TestBed } from '@angular/core/testing';

import { RoomEntity } from '@app/rooms/common';

import { RoomStorage } from './room.storage';
import { ROOMS_DTO_STUB } from './room.stub';

describe('RoomStorage', () => {
  let storage: RoomStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomStorage],
    });
    storage = TestBed.inject(RoomStorage);
  });

  it('should be created', () => {
    expect(storage).toBeTruthy();
  });

  it('should return ROOMS_DTO_STUB', (done) => {
    storage.get().subscribe((result) => {
      expect(result.length).toBe(ROOMS_DTO_STUB.length);
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

  it('should return update rooms', (done) => {
    storage.post([...ROOMS_DTO_STUB, {}] as RoomEntity[]);

    storage.get().subscribe((result) => {
      expect(result.length).toBe(ROOMS_DTO_STUB.length + 1);
      done();
    });
  });

  it('should return reset rooms', (done) => {
    storage.post([]);
    storage.reset();

    storage.get().subscribe((result) => {
      expect(result.length).toBe(ROOMS_DTO_STUB.length);
      done();
    });
  });
});
