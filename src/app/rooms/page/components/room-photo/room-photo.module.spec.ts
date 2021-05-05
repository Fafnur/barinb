import { TestBed } from '@angular/core/testing';

import { RoomPhotoModule } from './room-photo.module';

describe('RoomPhotoModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPhotoModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPhotoModule).toBeTruthy();
  });
});
