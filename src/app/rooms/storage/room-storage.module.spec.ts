import { TestBed } from '@angular/core/testing';

import { RoomStorageModule } from './room-storage.module';

describe('RoomStorageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomStorageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomStorageModule).toBeTruthy();
  });
});
