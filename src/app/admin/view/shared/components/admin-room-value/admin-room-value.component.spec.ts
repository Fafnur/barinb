import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomValueComponent } from './admin-room-value.component';

describe('AdminRoomValueComponent', () => {
  let component: AdminRoomValueComponent;
  let fixture: ComponentFixture<AdminRoomValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
