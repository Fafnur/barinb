import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomsActionsComponent } from './admin-rooms-actions.component';

describe('AdminRoomsActionsComponent', () => {
  let component: AdminRoomsActionsComponent;
  let fixture: ComponentFixture<AdminRoomsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
