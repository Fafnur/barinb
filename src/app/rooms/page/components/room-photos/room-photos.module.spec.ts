import { TestBed } from '@angular/core/testing';

import { RoomPhotosModule } from './room-photos.module';

describe('RoomPhotosModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPhotosModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPhotosModule).toBeTruthy();
  });
});
