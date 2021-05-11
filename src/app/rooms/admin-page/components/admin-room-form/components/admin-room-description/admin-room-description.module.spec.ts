import { TestBed } from '@angular/core/testing';

import { AdminRoomDescriptionModule } from './admin-room-description.module';

describe('AdminRoomDescriptionModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomDescriptionModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomDescriptionModule).toBeTruthy();
  });
});
