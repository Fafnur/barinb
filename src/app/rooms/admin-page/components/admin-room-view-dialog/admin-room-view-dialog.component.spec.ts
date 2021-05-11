import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomViewDialogComponent } from './admin-room-view-dialog.component';

describe('AdminRoomViewDialogComponent', () => {
  let component: AdminRoomViewDialogComponent;
  let fixture: ComponentFixture<AdminRoomViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
