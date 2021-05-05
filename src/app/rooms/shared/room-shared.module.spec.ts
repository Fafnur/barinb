import { TestBed } from '@angular/core/testing';

import { RoomSharedModule } from './room-shared.module';

describe('RoomSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomSharedModule).toBeTruthy();
  });
});
