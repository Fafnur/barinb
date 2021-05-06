import { TestBed } from '@angular/core/testing';

import { RoomPersonModule } from './room-person.module';

describe('RoomPersonModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPersonModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPersonModule).toBeTruthy();
  });
});
