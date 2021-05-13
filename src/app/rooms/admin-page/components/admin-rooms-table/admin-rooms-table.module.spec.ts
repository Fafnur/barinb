import { TestBed } from '@angular/core/testing';

import { AdminRoomsTableModule } from './admin-rooms-table.module';

describe('AdminRoomsTableModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomsTableModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomsTableModule).toBeTruthy();
  });
});
