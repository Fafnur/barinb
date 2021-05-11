import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomGuestsComponent } from './admin-room-guests.component';

describe('AdminRoomGuestsComponent', () => {
  let component: AdminRoomGuestsComponent;
  let fixture: ComponentFixture<AdminRoomGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomGuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
