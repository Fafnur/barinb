import { TestBed } from '@angular/core/testing';

import { RoomPhotosDialogModule } from './room-photos-dialog.module';

describe('RoomPhotosDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPhotosDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPhotosDialogModule).toBeTruthy();
  });
});
