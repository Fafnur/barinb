import { TestBed } from '@angular/core/testing';

import { RoomFeaturesModule } from './room-features.module';

describe('RoomFeaturesModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFeaturesModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomFeaturesModule).toBeTruthy();
  });
});
