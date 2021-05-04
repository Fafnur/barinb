import { TestBed } from '@angular/core/testing';

import { RoomManagerModule } from './room-manager.module';

describe('RoomManagerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomManagerModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomManagerModule).toBeTruthy();
  });
});
