import { TestBed } from '@angular/core/testing';

import { RoomHeaderModule } from './room-header.module';

describe('RoomHeaderModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomHeaderModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomHeaderModule).toBeTruthy();
  });
});
