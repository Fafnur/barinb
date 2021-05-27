import { TestBed } from '@angular/core/testing';

import { AdminRoomGroupModule } from './admin-room-group.module';

describe('AdminRoomGroupModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomGroupModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomGroupModule).toBeTruthy();
  });
});
