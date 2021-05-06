import { TestBed } from '@angular/core/testing';

import { RoomDetailsModule } from './room-details.module';

describe('RoomDetailsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDetailsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomDetailsModule).toBeTruthy();
  });
});
