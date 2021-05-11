import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomEditDialogComponent } from './admin-room-edit-dialog.component';

describe('AdminRoomEditDialogComponent', () => {
  let component: AdminRoomEditDialogComponent;
  let fixture: ComponentFixture<AdminRoomEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
