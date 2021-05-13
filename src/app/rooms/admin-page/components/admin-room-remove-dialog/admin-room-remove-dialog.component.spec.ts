import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomRemoveDialogComponent } from './admin-room-remove-dialog.component';

describe('AdminRoomRemoveDialogComponent', () => {
  let component: AdminRoomRemoveDialogComponent;
  let fixture: ComponentFixture<AdminRoomRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomRemoveDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
