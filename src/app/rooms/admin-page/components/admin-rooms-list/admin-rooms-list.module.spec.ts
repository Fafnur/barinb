import { TestBed } from '@angular/core/testing';

import { AdminRoomsListModule } from './admin-rooms-list.module';

describe('AdminRoomsListModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomsListModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomsListModule).toBeTruthy();
  });
});
