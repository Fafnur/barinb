import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPhotosDialogComponent } from './room-photos-dialog.component';

describe('RoomPhotosDialogComponent', () => {
  let component: RoomPhotosDialogComponent;
  let fixture: ComponentFixture<RoomPhotosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomPhotosDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPhotosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
