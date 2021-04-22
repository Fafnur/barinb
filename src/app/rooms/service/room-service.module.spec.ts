import { TestBed } from '@angular/core/testing';

import { RoomServiceModule } from './room-service.module';

describe('RoomServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomServiceModule).toBeTruthy();
  });
});
