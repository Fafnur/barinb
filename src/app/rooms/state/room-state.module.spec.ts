import { TestBed } from '@angular/core/testing';

import { RoomStateModule } from './room-state.module';

describe('RoomStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomStateModule).toBeTruthy();
  });
});
