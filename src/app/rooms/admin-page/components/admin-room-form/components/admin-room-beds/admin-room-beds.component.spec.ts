import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomBedsComponent } from './admin-room-beds.component';

describe('AdminRoomBedsComponent', () => {
  let component: AdminRoomBedsComponent;
  let fixture: ComponentFixture<AdminRoomBedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomBedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
