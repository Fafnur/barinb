import { TestBed } from '@angular/core/testing';

import { RoomPropsModule } from './room-props.module';

describe('RoomPhotosModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPropsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPropsModule).toBeTruthy();
  });
});
