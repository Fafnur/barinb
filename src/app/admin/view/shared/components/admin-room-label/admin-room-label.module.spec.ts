import { TestBed } from '@angular/core/testing';

import { AdminRoomLabelModule } from './admin-room-label.module';

describe('AdminRoomLabelModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomLabelModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomLabelModule).toBeTruthy();
  });
});
