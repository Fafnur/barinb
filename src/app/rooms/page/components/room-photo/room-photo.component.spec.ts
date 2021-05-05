import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPhotoComponent } from './room-photo.component';

describe('RoomPhotoComponent', () => {
  let component: RoomPhotoComponent;
  let fixture: ComponentFixture<RoomPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomPhotoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
