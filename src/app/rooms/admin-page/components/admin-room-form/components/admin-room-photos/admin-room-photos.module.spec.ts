import { TestBed } from '@angular/core/testing';

import { AdminRoomPhotosModule } from './admin-room-photos.module';

describe('AdminRoomGuestsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomPhotosModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomPhotosModule).toBeTruthy();
  });
});
