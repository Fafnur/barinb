import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomCreateDialogComponent } from './admin-room-create-dialog.component';

describe('AdminRoomCreateDialogComponent', () => {
  let component: AdminRoomCreateDialogComponent;
  let fixture: ComponentFixture<AdminRoomCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
