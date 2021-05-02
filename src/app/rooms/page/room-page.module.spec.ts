import { TestBed } from '@angular/core/testing';

import { RoomPageModule } from './room-page.module';

describe('RoomPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPageModule).toBeTruthy();
  });
});
