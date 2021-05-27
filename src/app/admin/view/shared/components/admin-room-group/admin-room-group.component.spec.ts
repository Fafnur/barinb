import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomGroupComponent } from './admin-room-group.component';

describe('AdminRoomGroupComponent', () => {
  let component: AdminRoomGroupComponent;
  let fixture: ComponentFixture<AdminRoomGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
