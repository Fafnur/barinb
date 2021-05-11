import { TestBed } from '@angular/core/testing';

import { AdminRoomFormModule } from './admin-room-form.module';

describe('AdminRoomFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomFormModule).toBeTruthy();
  });
});
