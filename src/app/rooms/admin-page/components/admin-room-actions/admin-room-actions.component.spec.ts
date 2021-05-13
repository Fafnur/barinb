import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomActionsComponent } from './admin-room-actions.component';

describe('AdminRoomActionsComponent', () => {
  let component: AdminRoomActionsComponent;
  let fixture: ComponentFixture<AdminRoomActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
