import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomClearDialogComponent } from './admin-room-clear-dialog.component';

describe('AdminRoomClearDialogComponent', () => {
  let component: AdminRoomClearDialogComponent;
  let fixture: ComponentFixture<AdminRoomClearDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomClearDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomClearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
