import { TestBed } from '@angular/core/testing';

import { RoomDescriptionModule } from './room-description.module';

describe('RoomDescriptionModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDescriptionModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomDescriptionModule).toBeTruthy();
  });
});
