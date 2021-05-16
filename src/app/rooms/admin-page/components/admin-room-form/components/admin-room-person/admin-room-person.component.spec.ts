import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomPersonComponent } from './admin-room-person.component';

describe('AdminRoomPersonComponent', () => {
  let component: AdminRoomPersonComponent;
  let fixture: ComponentFixture<AdminRoomPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
